import { test } from "@applitools/eyes-playwright/fixture";

test("My first visual test", async ({ page, eyes }) => {
  await page.goto("https://example.com");
  // Visual check
  await eyes.check("Homepage", {
    fully: true,
    matchLevel: "Dynamic",
  });
});
