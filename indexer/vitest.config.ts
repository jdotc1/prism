import { defineConfig } from "vitest/config";

// Tests import the indexer module, but production must require an explicit RPC endpoint.
export default defineConfig({
  test: {
    env: {
      SOROBAN_RPC_URL: "https://soroban-testnet.stellar.org",
    },
  },
});
