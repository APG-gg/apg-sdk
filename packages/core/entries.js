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
  Icon: path.join(COMPONENT_DIR, "Icon"),
  Upload: path.join(COMPONENT_DIR, "Upload"),
  Tag: path.join(COMPONENT_DIR, "Tag"),
  Button: path.join(COMPONENT_DIR, "Button"),
};
