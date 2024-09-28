import { Playlist } from "@/app/model/Playlist";
import { mockPlaylists } from "@/app/playlists/mockPlaylists";
import test, { expect, Page } from "@playwright/test";

test.describe("Playlists Page Object", () => {
  test("Testing playlists", async ({ page }) => {
    const pom = new PlaylistsPageObject(page, mockPlaylists);
    await pom.loadPage();
    await pom.countListItems(3);

    await pom.selectItemByName("Playlist 123");
  });
});

class PlaylistsPageObject {
  constructor(private page: Page, private mocks: Playlist[]) {}

  listItems = this.page.getByTestId("playlist-item");

  async selectItemByName(arg0: string) {
    // TODO: from playists.spec.ts
  }

  async countListItems(count: number) {
    return expect(this.listItems).toHaveCount(count);
  }

  async loadPage() {
    await this.page.goto("/playlists");
  }
}
