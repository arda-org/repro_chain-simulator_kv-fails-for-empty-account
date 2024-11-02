import { expect, test } from "vitest";
import { FSWorld } from "xsuite";

test("Test", async () => {
  using world = await FSWorld.start({ saveLogs: true });
  const wallet = await world.createWallet({ balance: 1 });
  expect(await wallet.getAccountBalance()).toEqual(1n);
  await wallet.getAccountValue("01");
});
