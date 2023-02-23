const path = require("path");

const SRC_DIR = path.resolve("src");
const COMPONENT_DIR = path.join(SRC_DIR, "components");
const HOOKS_DIR = path.join(SRC_DIR, "hooks");
const CSS_IN_JS_DIR = path.join(SRC_DIR, "css-in-js/index.ts");
const UTILS_DIR = path.join(SRC_DIR, "utils/index.ts");

module.exports = {
  "css-in-js": path.join(CSS_IN_JS_DIR),
  "utils": path.join(UTILS_DIR),

  // Hooks
  useDebounce: path.join(HOOKS_DIR, "useDebounce"),
  useWindowSize: path.join(HOOKS_DIR, "useWindowSize"),

  // Components
  Button: path.join(COMPONENT_DIR, "Button"),
  Card: path.join(COMPONENT_DIR, "Card"),
  Carousel: path.join(COMPONENT_DIR, "Carousel"),
  Icon: path.join(COMPONENT_DIR, "Icon"),
  Input: path.join(COMPONENT_DIR, "Input"),
  Sidebar: path.join(COMPONENT_DIR, "Sidebar"),
  Tag: path.join(COMPONENT_DIR, "Tag"),
  Tooltip: path.join(COMPONENT_DIR, "Tooltip"),
  Upload: path.join(COMPONENT_DIR, "Upload"),
};
