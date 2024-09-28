import { Playlist } from "@/app/model/Playlist";
import { mockPlaylists } from "@/app/playlists/mockPlaylists";
import { test, expect, Page } from "@playwright/test";

test("Follow Playlists link", async ({ page }) => {
  await page.goto("/");

  const PlaylistsPageLink = page.getByRole("link", { name: /Playlists/ });
  const PlaylistsPageHeader = page
    .locator("h1")
    .filter({ hasText: "Playlists" });

  await PlaylistsPageLink.click();

  await page.waitForURL(/\/playlists/);

  await expect(PlaylistsPageHeader).toHaveText("Playlists");
});

test.describe("Playlists", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/playlists");
  });

  test("Playlists page has title", async ({ page }) => {
    const NoPlaylistSelectedAlert = page.getByText("No playlist selected");
    const PlaylistsPageHeader = page
      .locator("h1")
      .filter({ hasText: "Playlists" });

    await expect(PlaylistsPageHeader).toBeVisible();
    await expect(NoPlaylistSelectedAlert).toBeVisible();
  });

  test("should show selected playlist", async ({ page }) => {
    for (const playlist of mockPlaylists) {
      await selectPlaylistOnList(page, playlist.name);
      await assertPlaylistDetails(page, playlist);
    }
    expect(mockPlaylists).toHaveLength(3);
  });
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
