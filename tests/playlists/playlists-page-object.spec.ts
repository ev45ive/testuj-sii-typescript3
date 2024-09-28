import { Playlist } from "@/app/model/Playlist";
import { mockPlaylists } from "@/app/playlists/mockPlaylists";
import test, { expect, Locator, Page } from "@playwright/test";

test.describe("Playlists Page Object", () => {
  test("Testing playlists", async ({ page }) => {
    const pom = new PlaylistsPageObject(page, mockPlaylists);
    await pom.loadPage();
    await pom.countListItems(3);

    await pom.assertNoPlaylistSelected();
    const selection = await pom.selectItemByName("Playlist 123");

    await pom.details.assertPlaylist(mockPlaylists[0]);

    await pom.details.clickEdit();
    // await pom.editor.assertOpened(); //

    await pom.editor.assertPlaylist(mockPlaylists[0]);
  });
});

class PlaylistsPageObject {
  constructor(private page: Page, private mocks: Playlist[]) {}

  details = new PlaylistDetailsPOM(this.page);
  editor = new PlaylistEditorPOM(this.page);

  listItems = this.page.getByTestId("playlist-item");
  selection = this.listItems.filter({
    has: this.page.getByRole("option", { selected: true }),
  });

  /**
   * Select playlist, asserts selection
   * @param text
   * @returns selected playlist locator
   */
  async selectItemByName(text: string) {
    this.selection = this.listItems.filter({
      hasText: text,
    });
    await expect(this.selection).toBeVisible();
    await this.selection?.click();
    await expect(this.selection).toHaveCount(1);
    return this.selection;
  }

  async assertNoPlaylistSelected() {
    await expect(this.selection).toHaveCount(0);
    await this.details.assertNoPlaylist();
  }

  async countListItems(count: number) {
    return expect(this.listItems).toHaveCount(count);
  }

  async loadPage() {
    await this.page.goto("/playlists");
  }
}

class PlaylistDetailsPOM {
  async clickEdit() {
    await this.editButton.click();
  }
  constructor(private page: Page) {}
  el = this.page.getByTestId("playlist-details");

  editButton = this.el.getByRole("button", { name: "Edit" });
  detailsName = this.el.getByTestId("playlist-details-name");

  async assertNoPlaylist() {
    await expect(this.el).toContainText("No playlist selected");
  }
  async assertPlaylist(playlist: Playlist) {
    await expect(this.detailsName).toContainText(playlist.name);
    await expect(this.el).toContainText(playlist.description);
    await expect(this.el).toContainText(playlist.public ? "Yes" : "No");
  }
}

class PlaylistEditorPOM {
  el = this.page.getByTestId("playlist_editor");

  description = this.el.locator("textarea");
  detailsNameInput = this.el.locator('input[type="text"]');
  editorCancelButton = this.el.getByRole("button", {
    name: "Cancel",
  });

  publicCheckbox = this.el.getByRole("checkbox", {
    name: "Public",
  });

  constructor(private page: Page) {}

  async assertOpened() {
    await expect(this.el.isVisible()).toBeTruthy();
  }

  async assertPlaylist(playlist: Playlist) {
    await expect(this.detailsNameInput).toHaveValue(playlist.name);
    // await expect(this.publicCheckbox).toBeChecked({ checked: playlist.public });
    // await expect(this.description).toContainText(playlist.description);
  }
}
