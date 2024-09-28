import { test, expect, Page } from "@playwright/test";

test("Opening editor", async ({ page }) => {
  await page.goto("http://localhost:3000/playlists");

  const PlaylistsItemsList = page.getByTestId("playlist-item");
  const Playlist123 = PlaylistsItemsList.filter({ hasText: "Playlist 123" });
  const AnyPlaylistFromList = PlaylistsItemsList.first();
  
  await expect(PlaylistsItemsList).toHaveCount(3);
  await expect(Playlist123).toBeVisible();
  await expect(AnyPlaylistFromList).toBeVisible();
  
  const Playlist234 = PlaylistsItemsList.filter({ hasText: "Playlist 234" });
  await Playlist234.click();

  await expect(page.getByTestId("playlist-details-name")).toContainText(
    "Playlist 234"
  );
  await page.getByRole("button", { name: "Edit" }).click();
  await expect(page.locator("textarea")).toContainText("Best playlist");
  await expect(page.locator('input[type="text"]')).toHaveValue("Playlist 234");
  await page.getByRole("button", { name: "Cancel" }).click();
});

test("Editor - Canceling", async ({ page }) => {});

test("Editor - Saving", async ({ page }) => {});
