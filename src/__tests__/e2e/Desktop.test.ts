import { test, expect } from "@playwright/test";

test.describe("Desktop", () => {
  test.beforeEach(async ({ page, isMobile }) => {
    await page.goto("/");
    test.skip(isMobile);
  });

  test('should have "Join the waitlist" in the navbar', async ({ page }) => {
    const navbar = await page.getByRole("navigation");
    // const jtwButton = await page.getByRole("button", { name: 'Join the waitlist'});

    await expect(navbar).toContainText("Join the waitlist");
  });
});
