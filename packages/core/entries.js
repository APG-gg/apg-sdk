const path = require("path");

const SRC_DIR = path.resolve("src");
const COMPONENT_DIR = path.join(SRC_DIR, "components");
const UTILS_DIR = path.join(SRC_DIR, "utils");
const HOOKS_DIR = path.join(SRC_DIR, "hooks");
const CSS_IN_JS_DIR = path.join(SRC_DIR, "css-in-js/index.ts");

module.exports = {
  "css-in-js": path.join(CSS_IN_JS_DIR),

  // Utils
  getRelativeTime: path.join(UTILS_DIR, "getRelativeTime"),
  isNumeric: path.join(UTILS_DIR, "isNumeric"),
  getComponentByName: path.join(UTILS_DIR, "mapping"),
  move: path.join(UTILS_DIR, "move"),
  renderIcon: path.join(UTILS_DIR, "renderIcon"),

  // Hooks
  useDebounce: path.join(HOOKS_DIR, "useDebounce"),
  useWindowSize: path.join(HOOKS_DIR, "useWindowSize"),

  // Components
  Button: path.join(COMPONENT_DIR, "Button"),
  Card: path.join(COMPONENT_DIR, "Card"),
  CardLandscape: path.join(COMPONENT_DIR, "CardLandscape"),
  CardPost: path.join(COMPONENT_DIR, "CardPost"),
  CardHeader: path.join(COMPONENT_DIR, "CardHeader"),
  CardDescription: path.join(COMPONENT_DIR, "CardDescription"),
  Icon: path.join(COMPONENT_DIR, "Icon"),
  DateInput: path.join(COMPONENT_DIR, "DateInput"),
  Dropdown: path.join(COMPONENT_DIR, "Dropdown"),
  PasswordInput: path.join(COMPONENT_DIR, "PasswordInput"),
  Input: path.join(COMPONENT_DIR, "Input"),
  Link: path.join(COMPONENT_DIR, "Link"),
  Navbar: path.join(COMPONENT_DIR, "Navbar"),
  MenuItem: path.join(COMPONENT_DIR, "MenuItem"),
  SubMenuItem: path.join(COMPONENT_DIR, "SubMenuItem"),
  Select: path.join(COMPONENT_DIR, "Select"),
  Sidebar: path.join(COMPONENT_DIR, "Sidebar"),
  Tag: path.join(COMPONENT_DIR, "Tag"),
  Tooltip: path.join(COMPONENT_DIR, "Tooltip"),
  Upload: path.join(COMPONENT_DIR, "Upload"),
};
