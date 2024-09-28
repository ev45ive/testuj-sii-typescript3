import { mockAlbums } from "@/app/(music)/common/fixtures/mockAlbums";
import { MockAlbumSearchResponse } from "@/app/(music)/common/model/Album";
import { UserProfile } from "@/app/model/User";
import test, { expect } from "@playwright/test";

// test.describe("Search", () => {
test.beforeEach(async ({ page }) => {
  await page.route("https://**/*.{jpg,png,jpeg,gif}", (route) => route.abort());

  await page.route("https://api.spotify.com/v1/search**", (route) => {
    route.fulfill({
      json: {
        albums: {
          items: mockAlbums,
        },
      } satisfies MockAlbumSearchResponse,
    });
  });

  await page.route("https://api.spotify.com/v1/me**", (route) => {
    route.fulfill({
      json: {
        display_name: "Placki",
        email: "placli@placki.com",
      } satisfies Partial<UserProfile>,
    });
  });

  await page.goto("/music/search");
});

test("Searching", async ({ page }) => {
  await page.getByPlaceholder("Search").click();
  await page.getByPlaceholder("Search").fill("test");
  await page.getByRole("button", { name: "Search" }).click();

  await expect(
    page
      .locator("css=.card")
      .filter({ hasText: /^Album 123$/ })
      .nth(0)
  ).toBeVisible();
});

// test("Empty search box", async ({ page }) => {
//   // TODO:
//   await expect(page.getByPlaceholder("Search")).toBeEmpty();
// });

// });

// test.skip("Not Logged In", async ({ page }) => {
//   await page.goto("/music/search");
//   await page.getByPlaceholder("Search").fill("test");
//   await page.getByRole("button", { name: "Search" }).click();

//   const NoTokenProvided = page.getByText("No token provided");
//   await expect(NoTokenProvided).toBeVisible();
// });
