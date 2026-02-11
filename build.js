import StyleDictionary from "style-dictionary";
import { readFileSync, existsSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Register custom transform to convert asset file paths to base64
StyleDictionary.registerTransform({
  name: "asset/base64",
  type: "value",
  filter: (token) => token.type === "asset",
  transform: (token) => {
    const filePath = join(__dirname, token.value);
    if (existsSync(filePath)) {
      const bitmap = readFileSync(filePath);
      const ext = extname(filePath).replace(".", "");
      return `data:image/${ext};base64,${bitmap.toString("base64")}`;
    }
    console.warn(`Warning: Asset file not found: ${filePath}`);
    return token.value;
  },
});

// Load the config
const config = await import("./config.json", { with: { type: "json" } });

// Extend transform groups to include base64 transform for JS/JSON platforms
const platforms = config.default.platforms;

Object.keys(platforms).forEach((platform) => {
  if (["js", "cjs", "json", "ts"].includes(platform)) {
    const transformGroup = platforms[platform].transformGroup;
    if (
      transformGroup &&
      StyleDictionary.hooks.transformGroups[transformGroup]
    ) {
      platforms[platform].transforms = [
        ...StyleDictionary.hooks.transformGroups[transformGroup],
        "asset/base64",
      ];
      delete platforms[platform].transformGroup;
    }
  }
});

// Create and build Style Dictionary instance
const sd = new StyleDictionary(config.default);
await sd.buildAllPlatforms();

console.log("\n✨ Build complete with base64 encoded assets!");
