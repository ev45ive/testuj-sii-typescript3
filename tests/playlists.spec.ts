import { test, expect } from "@playwright/test";

test("Playlists page has title", async ({ page }) => {
  page.goto("http://localhost:3000/");

  expect(page.getByText("Playlists")).toBeVisible();
});
