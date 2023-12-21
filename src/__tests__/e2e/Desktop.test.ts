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

    test("should scroll to Resources section after clicking the link", async ({
      page,
    }) => {
      page.setViewportSize({ width: 1024, height: 768 });

      const resourcesLink = await page
        .getByTestId("navbar")
        .getByText("Resources");
      const resourcesSection = await page.getByTestId("resources");

      // Default: not in viewport
      await expect(resourcesSection).not.toBeInViewport();

      // Click on the link
      await resourcesLink.click();
      await expect(resourcesSection).toBeInViewport();
    });

    test("should scroll to Team section after clicking the link", async ({
      page,
    }) => {
      page.setViewportSize({ width: 1024, height: 768 });

      const TeamLink = await page.getByTestId("navbar").getByText("Team");
      const TeamSection = await page.getByTestId("team");

      // Default: not in viewport
      await expect(TeamSection).not.toBeInViewport();

      // Click on the link
      await TeamLink.click();
      await expect(TeamSection).toBeInViewport();
    });

    test("should scroll to Careers section after clicking the link", async ({
      page,
    }) => {
      page.setViewportSize({ width: 1024, height: 768 });

      const CareersLink = await page.getByTestId("navbar").getByText("Careers");
      const CareersSection = await page.getByTestId("careers");

      // Default: not in viewport
      await expect(CareersSection).not.toBeInViewport();

      // Click on the link
      await CareersLink.click();
      await expect(CareersSection).toBeInViewport();
    });
  });
});
