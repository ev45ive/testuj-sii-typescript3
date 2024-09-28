import test, { expect } from "@playwright/test";

test("Page login button get /api/token", async ({ page }) => {
  await page.goto("/");

  const tokenPromise = page.waitForResponse("/api/token");
  await page.getByRole("button", { name: "Login" }).click();

  const res = await tokenPromise;
  const data: APITokenResponse = await res.json();

  expect([data]).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        access_token: expect.any(String),
        expires_in: expect.any(Number),
        token_type: "Bearer",
      } satisfies Record<keyof APITokenResponse, any>),
    ])
  );
});

test("Test login api token", async ({ page, request }) => {
  const res = await request.get("/api/token", {});

  const data: APITokenResponse = await res.json();

  // expect(data).toBe('placki')
  // expect(data).toBe({  // Object.is equality !!
  // expect(data).toStrictEqual
  // expect(data).toEqual
  //   expect(data).toEqual({
  //     access_token: "BQBie...4L7EpI",
  //     expires_in: 3600,
  //     token_type: "Bearer",
  //   });

  expect([data]).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        access_token: expect.any(String),
        expires_in: expect.any(Number),
        token_type: "Bearer",
      } satisfies Record<keyof APITokenResponse, any>),
    ])
  );
});

export interface APITokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}
