import { test } from "@applitools/eyes-playwright/fixture";

test("displays expected homepage content", async ({ page, eyes }) => {
  await page.goto("http://localhost:3000");
  await eyes.check("Homepage", {
    fully: true,
    matchLevel: "Dynamic",
  });
});
