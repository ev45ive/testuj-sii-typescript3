import test, { Page } from "@playwright/test";

test.describe("Playlists Page Object", () => {
  test("Testing playlists", async ({ page }) => {
    const pom = new PlaylistsPageObject(page);
    pom.loadPage();
  });
});

class PlaylistsPageObject {
  constructor(private page: Page) {}

  loadPage() {
    this.page.goto("/playlists");
  }
}
