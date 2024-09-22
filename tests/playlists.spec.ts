import { Playlist } from "@/app/model/Playlist";
import { mockPlaylists } from "@/app/playlists/mockPlaylists";
import { test, expect, Page } from "@playwright/test";

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

  // Scenario Definition:
  await selectPlaylistOnList(page, mockPlaylists[0].name);
  await assertPlaylistDetails(page, mockPlaylists[0]);

  await selectPlaylistOnList(page, mockPlaylists[1].name);
  await assertPlaylistDetails(page, mockPlaylists[1]);

  await selectPlaylistOnList(page, mockPlaylists[2].name);
  await assertPlaylistDetails(page, mockPlaylists[2]);
});

// Steps Definition:
async function assertPlaylistDetails(page: Page, mock: Playlist) {
  const playlistName = page.getByTestId("playlist-details-name");

  await expect(playlistName).toHaveText(mock.name);
}

async function selectPlaylistOnList(page: Page, name: string) {
  const playlistItems = page.locator("[data-testid=playlist-item]");
  const selection = playlistItems.getByText(name);
  await selection.click();
}
