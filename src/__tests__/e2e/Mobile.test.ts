import { test, expect } from "@playwright/test";

test.describe("Mobile", () => {
  test.beforeEach(async ({ page, isMobile }) => {
    await page.goto("/");
    test.skip(!isMobile);
  });

  test('should not have "Join the waitlist" in the navbar', async ({
    page,
  }) => {
    const navbar = await page.getByRole("navigation");

    await expect(navbar).not.toContainText("Join the waitlist");
  });
});
