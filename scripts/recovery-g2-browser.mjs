import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const base = process.env.BASE_URL || "http://127.0.0.1:5000";
const dir = "artifacts/recovery-g2";
await mkdir(dir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const rows = [];
const source = process.env.GITHUB_SHA || "local";
const stamp = new Date().toISOString();

for (const width of [375, 1440]) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    hasTouch: width === 375,
    isMobile: width === 375,
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const record = async (flow, expected, action) => {
    let status = "pass";
    let observed = "";
    try {
      observed = await action();
    } catch (error) {
      status = "fail";
      observed = String(error?.message || error).slice(0, 1200);
    }
    const screenshot = `${width}-${flow}.png`;
    try { await page.screenshot({ path: `${dir}/${screenshot}`, fullPage: false }); }
    catch (error) { observed += ` | screenshot unavailable: ${error.message}`; }
    rows.push({ width, flow, url: page.url(), expected, observed, status, screenshot, at: new Date().toISOString() });
    console.log(JSON.stringify(rows.at(-1)));
  };
  const open = async (path) => {
    await page.goto(new URL(path, base).href, { waitUntil: "domcontentloaded" });
  };

  await record("service-handoff", "Package link preserves intended service on Schedule", async () => {
    await open("/services");
    await page.getByTestId("button-book-moving-day-peace-of-mind").click();
    await page.getByTestId("select-schedule-service").waitFor();
    const value = await page.getByTestId("select-schedule-service").innerText();
    if (!page.url().includes("/schedule?service=") || !value.includes("Moving Day Peace of Mind")) throw Error(`url=${page.url()}, selected=${value}`);
    return `url=${page.url()}, selected=${value}`;
  });

  await record("estimate-validation", "Blank and malformed input blocked with visible feedback", async () => {
    await open("/schedule");
    await page.getByTestId("button-submit-estimate").click();
    await page.getByText("Name is required").first().waitFor();
    await page.getByTestId("input-schedule-name").fill("Proof User");
    await page.getByTestId("input-schedule-email").fill("malformed");
    await page.getByTestId("button-submit-estimate").click();
    const native = await page.getByTestId("input-schedule-email").evaluate(el => el.validationMessage);
    const zod = await page.getByText("Valid email is required").count();
    if (!native && !zod) throw Error("No visible malformed email feedback");
    return `blank name error visible; malformed email feedback=${native || "Zod message"}`;
  });

  await record("estimate-response", "Disposable submission reaches HTTP 201; confirmation copy is an unresolved trust finding", async () => {
    await open("/schedule");
    await page.getByTestId("input-schedule-name").fill("Proof User");
    await page.getByTestId("input-schedule-email").fill("proof@example.invalid");
    await page.getByTestId("input-schedule-phone").fill("2025550100");
    await page.getByTestId("select-schedule-service").click();
    await page.getByRole("option", { name: /Moving Day Peace of Mind/ }).click();
    const date = new Date(Date.now() + 3 * 86400000).toISOString().slice(0, 10);
    await page.getByTestId("input-schedule-date").fill(date);
    await page.getByTestId("select-schedule-time").click();
    await page.getByRole("option", { name: /8:00 AM/ }).click();
    const response = page.waitForResponse(r => r.url().endsWith("/api/estimates") && r.request().method() === "POST");
    await page.getByTestId("button-submit-estimate").click();
    const status = (await response).status();
    await page.getByRole("heading", { name: "Estimate Requested!" }).waitFor();
    if (status !== 201) throw Error(`HTTP ${status}`);
    return `HTTP ${status}; UI says Google Meet link emailed within 2 hours and confirmation sent; no email/calendar evidence`;
  });

  await record("lead-validation", "Blank and malformed input blocked with visible feedback", async () => {
    await open("/show-my-space");
    await page.getByTestId("button-submit-space").click();
    await page.getByText("Name is required").first().waitFor();
    await page.getByTestId("input-name").fill("Proof User");
    await page.getByTestId("input-email").fill("malformed");
    await page.getByTestId("button-submit-space").click();
    const native = await page.getByTestId("input-email").evaluate(el => el.validationMessage);
    const zod = await page.getByText("Valid email is required").count();
    if (!native && !zod) throw Error("No visible malformed email feedback");
    return `blank name error visible; malformed email feedback=${native || "Zod message"}`;
  });

  await record("lead-response", "Disposable submission reaches HTTP 201; follow-up copy is an unresolved trust finding", async () => {
    await open("/show-my-space");
    await page.getByTestId("input-name").fill("Proof User");
    await page.getByTestId("input-email").fill("proof@example.invalid");
    await page.getByTestId("input-phone").fill("2025550100");
    await page.getByTestId("textarea-space-description").fill("A fictitious test room for the recovery proof.");
    const response = page.waitForResponse(r => r.url().endsWith("/api/leads") && r.request().method() === "POST");
    await page.getByTestId("button-submit-space").click();
    const status = (await response).status();
    await page.getByRole("heading", { name: "We've Got Your Space!" }).waitFor();
    if (status !== 201) throw Error(`HTTP ${status}`);
    return `HTTP ${status}; UI promises contact within 24 hours; no follow-up mechanism verified`;
  });

  await record("gallery-filter-modal", "Filter narrows results; card opens one dialog, closes, and focus returns", async () => {
    await open("/gallery");
    await page.getByTestId("gallery-item-1").waitFor({ timeout: 12000 });
    const initial = await page.locator('[data-testid^="gallery-item-"]').count();
    await page.getByTestId("filter-countertops").click();
    await page.locator('[data-testid^="gallery-item-"]').first().waitFor();
    const filtered = await page.locator('[data-testid^="gallery-item-"]').count();
    const card = page.locator('[data-testid^="gallery-item-"]').first();
    await card.click();
    const count = await page.getByRole("dialog").count();
    await page.getByTestId("close-modal-button").click();
    const focused = await card.evaluate(el => document.activeElement === el);
    if (count !== 1 || filtered >= initial || !focused) throw Error(`initial=${initial}, filtered=${filtered}, dialogs=${count}, focusReturned=${focused}`);
    return `initial=${initial}, filtered=${filtered}, dialogs=${count}, focusReturned=${focused}`;
  });

  await record("gallery-input", width === 375 ? "One touch opens one dialog" : "Enter and Escape operate modal", async () => {
    await open("/gallery");
    const card = page.locator('[data-testid^="gallery-item-"]').first();
    await card.waitFor();
    if (width === 375) await card.tap();
    else { await card.focus(); await page.keyboard.press("Enter"); }
    const count = await page.getByRole("dialog").count();
    await page.keyboard.press("Escape");
    const closed = await page.getByRole("dialog").count();
    if (count !== 1 || closed !== 0) throw Error(`dialogsAfterAction=${count}, afterEscape=${closed}`);
    return `dialogsAfterAction=${count}, afterEscape=${closed}`;
  });

  await record("comparison-slider", "Pointer movement shifts comparison divider", async () => {
    await open("/gallery");
    const card = page.locator('[data-testid^="gallery-item-"]').first();
    await card.waitFor();
    await card.click();
    const slider = page.getByTestId("comparison-slider");
    await slider.waitFor();
    const box = await slider.boundingBox();
    if (!box) throw Error("Slider has no bounding box");
    if (width === 375) {
      await page.touchscreen.tap(box.x + box.width * 0.8, box.y + box.height * 0.5);
    } else {
      await page.mouse.move(box.x + box.width * 0.8, box.y + box.height * 0.5);
      await page.mouse.down(); await page.mouse.up();
    }
    const clipped = await slider.locator('div[style*="width:"][class*="overflow-hidden"]').first().getAttribute("style");
    if (!clipped || !/width: (7|8|9)\\d/.test(clipped)) throw Error(`clipped=${clipped}`);
    return `comparison clip style=${clipped}; source pair identity remains unverified`;
  });

  await record("layout-motion", "No horizontal document overflow; reduced-motion preference recorded", async () => {
    await open("/services");
    const state = await page.evaluate(() => ({
      viewport: innerWidth,
      doc: document.documentElement.scrollWidth,
      reduced: matchMedia("(prefers-reduced-motion: reduce)").matches,
    }));
    if (state.doc > state.viewport + 1 || !state.reduced) throw Error(JSON.stringify(state));
    return JSON.stringify(state) + "; this is not accessibility compliance evidence";
  });

  await record("ai-error", "Provider failure shows failure toast and no generated result", async () => {
    await page.route("**/api/visualize", route => route.fulfill({ status: 503, contentType: "application/json", body: '{"error":"Provider intentionally unavailable for G2"}' }));
    await open("/visualizer");
    await page.getByTestId("select-visualizer-service").click();
    await page.getByRole("option").first().click();
    await page.getByTestId("textarea-visualizer-description").fill("A fictitious kitchen for error-path testing.");
    await page.getByTestId("button-visualize").click();
    await page.getByText("Visualization failed").waitFor();
    const result = await page.getByTestId("visualization-result").count();
    if (result !== 0) throw Error("Generated result visible during forced provider failure");
    await page.unroute("**/api/visualize");
    return "HTTP 503 injected; failure toast visible; result absent; provider generation not tested";
  });
  await context.close();
}
await browser.close();
const receipt = { source, capturedAt: stamp, browser: `Chromium ${browser.version()}`, os: process.platform, base, database: "disposable GitHub Actions PostgreSQL service", input: "fictitious example.invalid and 555-0100 data", rows, boundary: "Observed browser actions only. No media rights, accessibility compliance, real booking, follow-up, testimonial authenticity, adoption, or production AI established." };
await writeFile(`${dir}/receipt.json`, JSON.stringify(receipt, null, 2) + "\n");
console.log(`G2 observations: ${rows.filter(r => r.status === "pass").length} pass, ${rows.filter(r => r.status === "fail").length} fail`);
if (rows.some(r => r.status === "fail")) process.exitCode = 1;
