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

  test("should redirect to MS form using Signup button", async ({
    page,
    context,
    isMobile,
  }) => {
    page.on("dialog", (dialog) => {
      console.log(dialog.message());
      dialog.accept();
    });

    let signupButton = null;
    let emailInput = null;
    if (!isMobile) {
      signupButton = await page.getByRole("button", { name: "Sign up" });
      emailInput = await page.getByRole("textbox", {
        name: "Email address",
      });
    } else {
      signupButton = await page.getByRole("button", { name: "Sign up" }).nth(1);
      emailInput = await page
        .getByRole("textbox", {
          name: "Email address",
        })
        .nth(1);
    }

    await expect(signupButton).toBeVisible();
    await expect(emailInput).toBeVisible();

    // Brittle; might break if
    // 1. We wait for some other time duration
    // or
    // 2. Redirect somewhere else
    await emailInput.fill("test@test.com");
    await signupButton.click();
    await page.waitForTimeout(4000);
    const tabs = await context.pages();
    await expect(await tabs[1].title()).toMatch(/Personal Finance/);
  });
});
