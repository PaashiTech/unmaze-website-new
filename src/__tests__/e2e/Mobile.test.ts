import { test, expect } from "@playwright/test";

test.describe("Mobile", () => {
  test.beforeEach(async ({ page, isMobile }) => {
    await page.goto("/");
    test.skip(!isMobile);
  });

  test.describe("Navbar", () => {
    test('should not have "Join the waitlist" in the navbar', async ({
      page,
    }) => {
      const navbar = await page.getByTestId("navbar");

      await expect(navbar).not.toContainText("Join the waitlist");
    });

    test("should not have nav links in the navbar", async ({ page }) => {
      const navlinks = await page
        .getByTestId("navbar")
        .getByTestId("navbar-link");

      const navlinkLocators = await navlinks.all();
      for (const nv of navlinkLocators) {
        await expect(nv).not.toBeVisible();
      }
    });
  });
});
