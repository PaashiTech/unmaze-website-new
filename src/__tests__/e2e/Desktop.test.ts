import { test, expect } from "@playwright/test";

test.describe("Desktop", () => {
  test.beforeEach(async ({ page, isMobile }) => {
    await page.goto("/");
    test.skip(isMobile);
  });

  test.describe("Navbar", () => {
    test('should have "Join the waitlist" in the navbar', async ({ page }) => {
      const navbar = await page.getByTestId("navbar");
      // const jtwButton = await page.getByRole("button", { name: 'Join the waitlist'});

      await expect(navbar).toContainText("Join the waitlist");
    });

    test("should not have nav links in the navbar", async ({ page }) => {
      const navlinks = await page
        .getByTestId("navbar")
        .getByTestId("navbar-link");

      const navlinkLocators = await navlinks.all();
      for (const nv of navlinkLocators) {
        await expect(nv).toBeVisible();
      }
    });
  });
});
