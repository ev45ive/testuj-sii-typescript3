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

test("should show selected playlist", async ({ page }) => {
  await page.goto("http://localhost:3000/playlists");

  const playlistItems = page.locator("[data-testid=playlist-item]");

  await expect(playlistItems.first()).toContainText("Playlist 123");

  await playlistItems.first().click();

  const playlistName = page.getByTestId('playlist-details-name')
  await expect(playlistName).toHaveText('Playlist 123');
 
});
