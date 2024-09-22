import { test, expect } from "@playwright/test";

test("Follow Playlists link", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  //   expect(true).toBeTruthy() // Sync - no promise, no await needed

  await page.getByRole("link", { name: /Playlists/ }).click();

  await page.waitForURL(/\/playlists/);

  await expect(page.getByText("Playlists")).toBeVisible();
});

test("Playlists page has title", async ({ page }) => {
  await page.goto("http://localhost:3000/playlists");

  await expect(page.getByText("Playlists")).toBeVisible();
  
  await expect(page.getByText("No playlist selected")).toBeVisible();

});
