import { expect, test } from "vitest";
import { FSWorld } from "xsuite";

test("Fails", async () => {
  using world = await FSWorld.start({ saveLogs: true });
  const wallet = await world.createWallet({ balance: 1 });
  expect(await wallet.getAccountBalance()).toEqual(1n);
  expect(await wallet.getAccountValue("01")).toEqual("");
});

test("Succeeds", async () => {
  using world = await FSWorld.start({ saveLogs: true });
  const wallet = await world.createWallet({ balance: 1, kvs: { "": "" } });
  expect(await wallet.getAccountBalance()).toEqual(1n);
  expect(await wallet.getAccountValue("01")).toEqual("");
});
