const path = require("path");

const SRC_DIR = path.resolve("src");
const COMPONENT_DIR = path.join(SRC_DIR, "components");
const DOMAIN_DIR = path.join(SRC_DIR, "domain");
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
  delay: path.join(UTILS_DIR, "delay"),
  slugify: path.join(UTILS_DIR, "slugify"),
  titleCase: path.join(UTILS_DIR, "titleCase"),
  getCroppedImg: path.join(UTILS_DIR, "getCroppedImg"),
  
  // Interfaces
  DispatchObject: path.join(DOMAIN_DIR, "dispatchObject"),
  ImageData: path.join(DOMAIN_DIR, "imageData.interface"),
  
  // Enums
  EventTypeEnum: path.join(DOMAIN_DIR, "eventType.enum"),
  ProfileTypeColor: path.join(DOMAIN_DIR, "profileTypeColor.enum"),

  // Hooks
  useDebounce: path.join(HOOKS_DIR, "useDebounce"),
  useWindowSize: path.join(HOOKS_DIR, "useWindowSize"),

  // Components
  Button: path.join(COMPONENT_DIR, "Button"),
  Card: path.join(COMPONENT_DIR, "Card"),
  CardDescription: path.join(COMPONENT_DIR, "CardDescription"),
  CardHeader: path.join(COMPONENT_DIR, "CardHeader"),
  CardLandscape: path.join(COMPONENT_DIR, "CardLandscape"),
  CardPost: path.join(COMPONENT_DIR, "CardPost"),
  CardType: path.join(COMPONENT_DIR, "CardType"),
  ChildButton: path.join(COMPONENT_DIR, "FloatingMenu/ChildButton"),
  ChildContent: path.join(COMPONENT_DIR, "FloatingMenu/ChildContent"),
  DateInput: path.join(COMPONENT_DIR, "DateInput"),
  Drawer: path.join(COMPONENT_DIR, "Drawer"),
  Dropdown: path.join(COMPONENT_DIR, "Dropdown"),
  FloatingMenu: path.join(COMPONENT_DIR, "FloatingMenu"),
  Icon: path.join(COMPONENT_DIR, "Icon"),
  Input: path.join(COMPONENT_DIR, "Input"),
  Link: path.join(COMPONENT_DIR, "Link"),
  MainButton: path.join(COMPONENT_DIR, "FloatingMenu/MainButton"),
  MenuItem: path.join(COMPONENT_DIR, "MenuItem"),
  Modal: path.join(COMPONENT_DIR, "Modal"),
  Navbar: path.join(COMPONENT_DIR, "Navbar"),
  PasswordInput: path.join(COMPONENT_DIR, "PasswordInput"),
  RadioButton: path.join(COMPONENT_DIR, "RadioButton"),
  Select: path.join(COMPONENT_DIR, "Select"),
  Sidebar: path.join(COMPONENT_DIR, "Sidebar"),
  Steps: path.join(COMPONENT_DIR, "Steps"),
  StrictModeDroppable: path.join(COMPONENT_DIR, "StrictModeDroppable"),
  SubMenuItem: path.join(COMPONENT_DIR, "SubMenuItem"),
  Switch: path.join(COMPONENT_DIR, "Switch"),
  Tag: path.join(COMPONENT_DIR, "Tag"),
  Textarea: path.join(COMPONENT_DIR, "Textarea"),
  TextLinker: path.join(COMPONENT_DIR, "TextLinker"),
  Tooltip: path.join(COMPONENT_DIR, "Tooltip"),
  Upload: path.join(COMPONENT_DIR, "Upload"),
  UploadMultiple: path.join(COMPONENT_DIR, "UploadMultiple"),
};
