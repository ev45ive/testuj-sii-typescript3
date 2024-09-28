import { test, expect, Page } from "@playwright/test";

test("Opening editor", async ({ page }) => {
  await page.goto("http://localhost:3000/playlists");

  await expect(
    page.getByTestId("playlist-item").filter({
      hasText: "Playlist 123",
    })
  ).toBeVisible();

  await page.getByText("Playlist 234").click();

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
