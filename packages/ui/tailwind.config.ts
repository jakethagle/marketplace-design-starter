import sharedConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  prefix: "",
  presets: [sharedConfig],
};

export default config;
