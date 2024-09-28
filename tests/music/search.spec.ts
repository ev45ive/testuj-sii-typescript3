import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/music/search");
});

test("Empty search box", async ({ page }) => {
  // TODO:
  await expect(page.getByPlaceholder("Search")).toBeEmpty();
});

test("Not Logged In", async ({ page }) => {
  await page.getByPlaceholder("Search").fill("test");
  await page.getByRole("button", { name: "Search" }).click();

  const NoTokenProvided = page.getByText("No token provided");
  await expect(NoTokenProvided).toBeVisible();
});

test("Searching", async ({ page }) => {
  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("test");
  await page.getByRole("button", { name: "Search" }).click(); 
  
});
