// tailwind config is required for editor support

import sharedConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets" | "plugins"> = {
  content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
  presets: [sharedConfig],
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
