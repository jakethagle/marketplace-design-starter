import { defineConfig, type Options } from "tsup";

// eslint-disable-next-line import/no-default-export -- ignore
export default defineConfig((options: Options) => ({
  entryPoints: ["src/index.ts"],
  clean: true,
  dts: true,
  format: ["cjs"],
  ...options,
}));
