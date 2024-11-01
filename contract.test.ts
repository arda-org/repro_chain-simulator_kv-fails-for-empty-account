import { test } from "vitest";
import { FSWorld } from "xsuite";

test("Test", async () => {
  using world = await FSWorld.start({ saveLogs: true });
  const wallet = await world.createWallet();
  await wallet.getAccountValue("01");
});
