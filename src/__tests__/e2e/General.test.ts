import { test, expect } from "@playwright/test";

test.describe("General", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test('should have "Unmaze" in the title', async ({ page }) => {
    await expect(page).toHaveTitle(/Unmaze/);
  });

  test('should have "Investment Journeys" in the title', async ({ page }) => {
    await expect(page).toHaveTitle(/Investment Journeys/);
  });
});
