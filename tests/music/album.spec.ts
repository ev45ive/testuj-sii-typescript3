import test from "@playwright/test";
import { APITokenResponse } from "./APITokenResponse";
import { readFile, writeFile } from "fs/promises";

let token: APITokenResponse;

test.beforeAll(async ({ page, request }) => {
  try {
    token = JSON.parse(await readFile("./token.json", { encoding: "utf-8" }));
  } catch (e) {
    const res = await request.get("/api/token", {});
    token = await res.json();
    await writeFile("./token.json", JSON.stringify(token, null, 2));
  }
});

test.beforeEach(async ({ page }) => {
  await page.goto("/");

  // Error: page.evaluate: ReferenceError: token is not defined
  //   await page.evaluate(`sessionStorage.setItem('token', token.access_token`,{token})

  const extractedFromPage = await page.evaluate((token) => {
    sessionStorage.setItem("token", token.access_token);
    return sessionStorage.getItem("token");
  }, token);
});

test("Testing albums", async ({ page }) => {
  await page.goto("/music/albums/5Tby0U5VndHW0SomYO7Id7");

  await page.waitForTimeout(5000);
});
