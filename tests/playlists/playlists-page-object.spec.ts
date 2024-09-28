import { Playlist } from "@/app/model/Playlist";
import { mockPlaylists } from "@/app/playlists/mockPlaylists";
import test, { expect, Locator, Page } from "@playwright/test";

test.describe("Playlists Page Object", () => {
  test("Testing playlists", async ({ page }) => {
    const pom = new PlaylistsPageObject(page, mockPlaylists);
    await pom.loadPage();
    await pom.countListItems(3);

    const selection = await pom.selectItemByName("Playlist 123");
  });
});

class PlaylistsPageObject {
  constructor(private page: Page, private mocks: Playlist[]) {}

  listItems = this.page.getByTestId("playlist-item");
  selection?: Locator;

  async selectItemByName(text: string) {
    this.selection = this.listItems.filter({
      hasText: text,
    });
    await expect(this.selection).toBeVisible();
    await this.selection?.click();
    await expect(
      this.listItems.filter({
        has: this.page.getByText(text),
        //   .and(this.listItems.locator("css=.bg-slate-600.text-black"))
        //   .and(this.listItems.getByRole("option", { selected: true }))
      })
    ).toHaveCount(1);
    return this.selection;
  }

  async countListItems(count: number) {
    return expect(this.listItems).toHaveCount(count);
  }

  async loadPage() {
    await this.page.goto("/playlists");
  }
}
