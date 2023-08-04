const { expect, test } = require("@playwright/test");

test("visit page and take screenshot", async ({ page }) => {
  const targetUrl =
    process.env.ENVIRONMENT_URL || "https://www.somersetstrikers.co.za";

  const response = await page.goto(targetUrl);

  expect(
    response.status(),
    "should respond with correct status code"
  ).toBeLessThan(400);

  await page.screenshot({ path: "screenshot.jpg" });
});
