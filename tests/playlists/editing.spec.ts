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

  // DEtails
  const PlaylistDetailsName = page.getByTestId("playlist-details-name");
  const PlaylistEditButton = page.getByRole("button", { name: "Edit" });

  await expect(PlaylistDetailsName).toContainText("Playlist 234");
  await PlaylistEditButton.click();

  // Editor
  const PlatlistEditor = page.getByTestId("playlist_editor");
  const PlaylistDescription = PlatlistEditor.locator("textarea");
  const PlaylistDetailsNameInput = PlatlistEditor.locator('input[type="text"]');
  const PlaylistEditorCancelButton = PlatlistEditor.getByRole("button", {
    name: "Cancel",
  });
  const PlaylistPublicCheckbox = PlatlistEditor.getByRole("checkbox", {
    name: "Public",
  });

  await expect(PlaylistDetailsNameInput).toHaveValue("Playlist 234");
  await expect(PlaylistPublicCheckbox).toBeChecked();
  await expect(PlaylistDescription).toContainText("Best playlist");
  await PlaylistEditorCancelButton.click();
});

test("Editor - Canceling", async ({ page }) => {});

test("Editor - Saving", async ({ page }) => {});
