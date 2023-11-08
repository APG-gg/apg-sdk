export type TypeMapKey = 
  "blue" | 
  "blue-50" | 
  "blue-100" | 
  "blue-200" |
  "blue-300" |
  "blue-400" |
  "blue-500" |
  "blue-600" |
  "blue-700" |
  "blue-800" |
  "blue-900" |
  "aqua" |
  "aqua-50" |
  "aqua-100" |
  "aqua-200" |
  "aqua-300" |
  "aqua-400" |
  "aqua-500" |
  "aqua-600" |
  "aqua-700" |
  "aqua-800" |
  "aqua-900" |
  "green" |
  "green-50" |
  "green-100" |
  "green-200" |
  "green-300" |
  "green-400" |
  "green-500" |
  "green-600" |
  "green-700" |
  "green-800" |
  "green-900" |
  "limegreen" |
  "limegreen-50" |
  "limegreen-100" |
  "limegreen-200" |
  "limegreen-300" |
  "limegreen-400" |
  "limegreen-500" |
  "limegreen-600" |
  "limegreen-700" |
  "limegreen-800" |
  "limegreen-900" |
  "yellow" |
  "yellow-50" |
  "yellow-100" |
  "yellow-200" |
  "yellow-300" |
  "yellow-400" |
  "yellow-500" |
  "yellow-600" |
  "yellow-700" |
  "yellow-800" |
  "yellow-900" |
  "purple" |
  "purple-50" |
  "purple-100" |
  "purple-200" |
  "purple-300" |
  "purple-400" |
  "purple-500" |
  "purple-600" |
  "purple-700" |
  "purple-800" |
  "purple-900" |
  "fucsia" |
  "fucsia-50" |
  "fucsia-100" |
  "fucsia-200" |
  "fucsia-300" |
  "fucsia-400" |
  "fucsia-500" |
  "fucsia-600" |
  "fucsia-700" |
  "fucsia-800" |
  "fucsia-900" |
  "red" |
  "red-50" |
  "red-100" |
  "red-200" |
  "red-300" |
  "red-400" |
  "red-500" |
  "red-600" |
  "red-700" |
  "red-800" |
  "red-900" |
  "orange" |
  "orange-50" |
  "orange-100" |
  "orange-200" |
  "orange-300" |
  "orange-400" |
  "orange-500" |
  "orange-600" |
  "orange-700" |
  "orange-800" |
  "orange-900" |
  "black" |
  "black-50" |
  "black-100" |
  "black-200" |
  "black-300" |
  "black-400" |
  "black-500" |
  "black-600" |
  "black-700" |
  "black-800" |
  "black-900" |
  "white" |
  "white-50" |
  "white-100" |
  "white-200" |
  "white-300" |
  "white-400" |
  "white-500" |
  "white-600" |
  "white-700" |
  "white-800" |
  "white-900";

export const typeMap: Record<TypeMapKey, {
  borderColor: string;
  textColor: string;
  hoverBgColor: string;
  activeBgColor: string;
}> = {
  "blue": {
    borderColor: "border-blue",
    textColor: "text-blue",
    hoverBgColor: "hover:bg-blue/[0.14]",
    activeBgColor: "active:bg-blue/[0.08]"
  },
  "blue-50": {
    borderColor: "border-blue-50",
    textColor: "text-blue-50",
    hoverBgColor: "hover:bg-blue-50/[0.14]",
    activeBgColor: "active:bg-blue-50/[0.08]"
  },
  "blue-100": {
    borderColor: "border-blue-100",
    textColor: "text-blue-100",
    hoverBgColor: "hover:bg-blue-100/[0.14]",
    activeBgColor: "active:bg-blue-100/[0.08]"
  },
  "blue-200": {
    borderColor: "border-blue-200",
    textColor: "text-blue-200",
    hoverBgColor: "hover:bg-blue-200/[0.14]",
    activeBgColor: "active:bg-blue-200/[0.08]"
  },
  "blue-300": {
    borderColor: "border-blue-300",
    textColor: "text-blue-300",
    hoverBgColor: "hover:bg-blue-300/[0.14]",
    activeBgColor: "active:bg-blue-300/[0.08]"
  },
  "blue-400": {
    borderColor: "border-blue-400",
    textColor: "text-blue-400",
    hoverBgColor: "hover:bg-blue-400/[0.14]",
    activeBgColor: "active:bg-blue-400/[0.08]"
  },
  "blue-500": {
    borderColor: "border-blue-500",
    textColor: "text-blue-500",
    hoverBgColor: "hover:bg-blue-500/[0.14]",
    activeBgColor: "active:bg-blue-500/[0.08]"
  },
  "blue-600": {
    borderColor: "border-blue-600",
    textColor: "text-blue-600",
    hoverBgColor: "hover:bg-blue-600/[0.14]",
    activeBgColor: "active:bg-blue-600/[0.08]"
  },
  "blue-700": {
    borderColor: "border-blue-700",
    textColor: "text-blue-700",
    hoverBgColor: "hover:bg-blue-700/[0.14]",
    activeBgColor: "active:bg-blue-700/[0.08]"
  },
  "blue-800": {
    borderColor: "border-blue-800",
    textColor: "text-blue-800",
    hoverBgColor: "hover:bg-blue-800/[0.14]",
    activeBgColor: "active:bg-blue-800/[0.08]"
  },
  "blue-900": {
    borderColor: "border-blue-900",
    textColor: "text-blue-900",
    hoverBgColor: "hover:bg-blue-900/[0.14]",
    activeBgColor: "active:bg-blue-900/[0.08]"
  },
  "aqua": {
    borderColor: "border-aqua",
    textColor: "text-aqua",
    hoverBgColor: "hover:bg-aqua/[0.14]",
    activeBgColor: "active:bg-aqua/[0.08]"
  },
  "aqua-50": {
    borderColor: "border-aqua-50",
    textColor: "text-aqua-50",
    hoverBgColor: "hover:bg-aqua-50/[0.14]",
    activeBgColor: "active:bg-aqua-50/[0.08]"
  },
  "aqua-100": {
    borderColor: "border-aqua-100",
    textColor: "text-aqua-100",
    hoverBgColor: "hover:bg-aqua-100/[0.14]",
    activeBgColor: "active:bg-aqua-100/[0.08]"
  },
  "aqua-200": {
    borderColor: "border-aqua-200",
    textColor: "text-aqua-200",
    hoverBgColor: "hover:bg-aqua-200/[0.14]",
    activeBgColor: "active:bg-aqua-200/[0.08]"
  },
  "aqua-300": {
    borderColor: "border-aqua-300",
    textColor: "text-aqua-300",
    hoverBgColor: "hover:bg-aqua-300/[0.14]",
    activeBgColor: "active:bg-aqua-300/[0.08]"
  },
  "aqua-400": {
    borderColor: "border-aqua-400",
    textColor: "text-aqua-400",
    hoverBgColor: "hover:bg-aqua-400/[0.14]",
    activeBgColor: "active:bg-aqua-400/[0.08]"
  },
  "aqua-500": {
    borderColor: "border-aqua-500",
    textColor: "text-aqua-500",
    hoverBgColor: "hover:bg-aqua-500/[0.14]",
    activeBgColor: "active:bg-aqua-500/[0.08]"
  },
  "aqua-600": {
    borderColor: "border-aqua-600",
    textColor: "text-aqua-600",
    hoverBgColor: "hover:bg-aqua-600/[0.14]",
    activeBgColor: "active:bg-aqua-600/[0.08]"
  },
  "aqua-700": {
    borderColor: "border-aqua-700",
    textColor: "text-aqua-700",
    hoverBgColor: "hover:bg-aqua-700/[0.14]",
    activeBgColor: "active:bg-aqua-700/[0.08]"
  },
  "aqua-800": {
    borderColor: "border-aqua-800",
    textColor: "text-aqua-800",
    hoverBgColor: "hover:bg-aqua-800/[0.14]",
    activeBgColor: "active:bg-aqua-800/[0.08]"
  },
  "aqua-900": {
    borderColor: "border-aqua-900",
    textColor: "text-aqua-900",
    hoverBgColor: "hover:bg-aqua-900/[0.14]",
    activeBgColor: "active:bg-aqua-900/[0.08]"
  },
  "green": {
    borderColor: "border-green",
    textColor: "text-green",
    hoverBgColor: "hover:bg-green/[0.14]",
    activeBgColor: "active:bg-green/[0.08]"
  },
  "green-50": {
    borderColor: "border-green-50",
    textColor: "text-green-50",
    hoverBgColor: "hover:bg-green-50/[0.14]",
    activeBgColor: "active:bg-green-50/[0.08]"
  },
  "green-100": {
    borderColor: "border-green-100",
    textColor: "text-green-100",
    hoverBgColor: "hover:bg-green-100/[0.14]",
    activeBgColor: "active:bg-green-100/[0.08]"
  },
  "green-200": {
    borderColor: "border-green-200",
    textColor: "text-green-200",
    hoverBgColor: "hover:bg-green-200/[0.14]",
    activeBgColor: "active:bg-green-200/[0.08]"
  },
  "green-300": {
    borderColor: "border-green-300",
    textColor: "text-green-300",
    hoverBgColor: "hover:bg-green-300/[0.14]",
    activeBgColor: "active:bg-green-300/[0.08]"
  },
  "green-400": {
    borderColor: "border-green-400",
    textColor: "text-green-400",
    hoverBgColor: "hover:bg-green-400/[0.14]",
    activeBgColor: "active:bg-green-400/[0.08]"
  },
  "green-500": {
    borderColor: "border-green-500",
    textColor: "text-green-500",
    hoverBgColor: "hover:bg-green-500/[0.14]",
    activeBgColor: "active:bg-green-500/[0.08]"
  },
  "green-600": {
    borderColor: "border-green-600",
    textColor: "text-green-600",
    hoverBgColor: "hover:bg-green-600/[0.14]",
    activeBgColor: "active:bg-green-600/[0.08]"
  },
  "green-700": {
    borderColor: "border-green-700",
    textColor: "text-green-700",
    hoverBgColor: "hover:bg-green-700/[0.14]",
    activeBgColor: "active:bg-green-700/[0.08]"
  },
  "green-800": {
    borderColor: "border-green-800",
    textColor: "text-green-800",
    hoverBgColor: "hover:bg-green-800/[0.14]",
    activeBgColor: "active:bg-green-800/[0.08]"
  },
  "green-900": {
    borderColor: "border-green-900",
    textColor: "text-green-900",
    hoverBgColor: "hover:bg-green-900/[0.14]",
    activeBgColor: "active:bg-green-900/[0.08]"
  },
  "yellow": {
    borderColor: "border-yellow",
    textColor: "text-yellow",
    hoverBgColor: "hover:bg-yellow/[0.14]",
    activeBgColor: "active:bg-yellow/[0.08]"
  },
  "yellow-50": {
    borderColor: "border-yellow-50",
    textColor: "text-yellow-50",
    hoverBgColor: "hover:bg-yellow-50/[0.14]",
    activeBgColor: "active:bg-yellow-50/[0.08]"
  },
  "yellow-100": {
    borderColor: "border-yellow-100",
    textColor: "text-yellow-100",
    hoverBgColor: "hover:bg-yellow-100/[0.14]",
    activeBgColor: "active:bg-yellow-100/[0.08]"
  },
  "yellow-200": {
    borderColor: "border-yellow-200",
    textColor: "text-yellow-200",
    hoverBgColor: "hover:bg-yellow-200/[0.14]",
    activeBgColor: "active:bg-yellow-200/[0.08]"
  },
  "yellow-300": {
    borderColor: "border-yellow-300",
    textColor: "text-yellow-300",
    hoverBgColor: "hover:bg-yellow-300/[0.14]",
    activeBgColor: "active:bg-yellow-300/[0.08]"
  },
  "yellow-400": {
    borderColor: "border-yellow-400",
    textColor: "text-yellow-400",
    hoverBgColor: "hover:bg-yellow-400/[0.14]",
    activeBgColor: "active:bg-yellow-400/[0.08]"
  },
  "yellow-500": {
    borderColor: "border-yellow-500",
    textColor: "text-yellow-500",
    hoverBgColor: "hover:bg-yellow-500/[0.14]",
    activeBgColor: "active:bg-yellow-500/[0.08]"
  },
  "yellow-600": {
    borderColor: "border-yellow-600",
    textColor: "text-yellow-600",
    hoverBgColor: "hover:bg-yellow-600/[0.14]",
    activeBgColor: "active:bg-yellow-600/[0.08]"
  },
  "yellow-700": {
    borderColor: "border-yellow-700",
    textColor: "text-yellow-700",
    hoverBgColor: "hover:bg-yellow-700/[0.14]",
    activeBgColor: "active:bg-yellow-700/[0.08]"
  },
  "yellow-800": {
    borderColor: "border-yellow-800",
    textColor: "text-yellow-800",
    hoverBgColor: "hover:bg-yellow-800/[0.14]",
    activeBgColor: "active:bg-yellow-800/[0.08]"
  },
  "yellow-900": {
    borderColor: "border-yellow-900",
    textColor: "text-yellow-900",
    hoverBgColor: "hover:bg-yellow-900/[0.14]",
    activeBgColor: "active:bg-yellow-900/[0.08]"
  },
  "fucsia": {
    borderColor: "border-fucsia",
    textColor: "text-fucsia",
    hoverBgColor: "hover:bg-fucsia/[0.14]",
    activeBgColor: "active:bg-fucsia/[0.08]"
  },
  "fucsia-50": {
    borderColor: "border-fucsia-50",
    textColor: "text-fucsia-50",
    hoverBgColor: "hover:bg-fucsia-50/[0.14]",
    activeBgColor: "active:bg-fucsia-50/[0.08]"
  },
  "fucsia-100": {
    borderColor: "border-fucsia-100",
    textColor: "text-fucsia-100",
    hoverBgColor: "hover:bg-fucsia-100/[0.14]",
    activeBgColor: "active:bg-fucsia-100/[0.08]"
  },
  "fucsia-200": {
    borderColor: "border-fucsia-200",
    textColor: "text-fucsia-200",
    hoverBgColor: "hover:bg-fucsia-200/[0.14]",
    activeBgColor: "active:bg-fucsia-200/[0.08]"
  },
  "fucsia-300": {
    borderColor: "border-fucsia-300",
    textColor: "text-fucsia-300",
    hoverBgColor: "hover:bg-fucsia-300/[0.14]",
    activeBgColor: "active:bg-fucsia-300/[0.08]"
  },
  "fucsia-400": {
    borderColor: "border-fucsia-400",
    textColor: "text-fucsia-400",
    hoverBgColor: "hover:bg-fucsia-400/[0.14]",
    activeBgColor: "active:bg-fucsia-400/[0.08]"
  },
  "fucsia-500": {
    borderColor: "border-fucsia-500",
    textColor: "text-fucsia-500",
    hoverBgColor: "hover:bg-fucsia-500/[0.14]",
    activeBgColor: "active:bg-fucsia-500/[0.08]"
  },
  "fucsia-600": {
    borderColor: "border-fucsia-600",
    textColor: "text-fucsia-600",
    hoverBgColor: "hover:bg-fucsia-600/[0.14]",
    activeBgColor: "active:bg-fucsia-600/[0.08]"
  },
  "fucsia-700": {
    borderColor: "border-fucsia-700",
    textColor: "text-fucsia-700",
    hoverBgColor: "hover:bg-fucsia-700/[0.14]",
    activeBgColor: "active:bg-fucsia-700/[0.08]"
  },
  "fucsia-800": {
    borderColor: "border-fucsia-800",
    textColor: "text-fucsia-800",
    hoverBgColor: "hover:bg-fucsia-800/[0.14]",
    activeBgColor: "active:bg-fucsia-800/[0.08]"
  },
  "fucsia-900": {
    borderColor: "border-fucsia-900",
    textColor: "text-fucsia-900",
    hoverBgColor: "hover:bg-fucsia-900/[0.14]",
    activeBgColor: "active:bg-fucsia-900/[0.08]"
  },
  "red": {
    borderColor: "border-red",
    textColor: "text-red",
    hoverBgColor: "hover:bg-red/[0.14]",
    activeBgColor: "active:bg-red/[0.08]"
  },
  "red-50": {
    borderColor: "border-red-50",
    textColor: "text-red-50",
    hoverBgColor: "hover:bg-red-50/[0.14]",
    activeBgColor: "active:bg-red-50/[0.08]"
  },
  "red-100": {
    borderColor: "border-red-100",
    textColor: "text-red-100",
    hoverBgColor: "hover:bg-red-100/[0.14]",
    activeBgColor: "active:bg-red-100/[0.08]"
  },
  "red-200": {
    borderColor: "border-red-200",
    textColor: "text-red-200",
    hoverBgColor: "hover:bg-red-200/[0.14]",
    activeBgColor: "active:bg-red-200/[0.08]"
  },
  "red-300": {
    borderColor: "border-red-300",
    textColor: "text-red-300",
    hoverBgColor: "hover:bg-red-300/[0.14]",
    activeBgColor: "active:bg-red-300/[0.08]"
  },
  "red-400": {
    borderColor: "border-red-400",
    textColor: "text-red-400",
    hoverBgColor: "hover:bg-red-400/[0.14]",
    activeBgColor: "active:bg-red-400/[0.08]"
  },
  "red-500": {
    borderColor: "border-red-500",
    textColor: "text-red-500",
    hoverBgColor: "hover:bg-red-500/[0.14]",
    activeBgColor: "active:bg-red-500/[0.08]"
  },
  "red-600": {
    borderColor: "border-red-600",
    textColor: "text-red-600",
    hoverBgColor: "hover:bg-red-600/[0.14]",
    activeBgColor: "active:bg-red-600/[0.08]"
  },
  "red-700": {
    borderColor: "border-red-700",
    textColor: "text-red-700",
    hoverBgColor: "hover:bg-red-700/[0.14]",
    activeBgColor: "active:bg-red-700/[0.08]"
  },
  "red-800": {
    borderColor: "border-red-800",
    textColor: "text-red-800",
    hoverBgColor: "hover:bg-red-800/[0.14]",
    activeBgColor: "active:bg-red-800/[0.08]"
  },
  "red-900": {
    borderColor: "border-red-900",
    textColor: "text-red-900",
    hoverBgColor: "hover:bg-red-900/[0.14]",
    activeBgColor: "active:bg-red-900/[0.08]"
  },
  "purple": {
    borderColor: "border-purple",
    textColor: "text-purple",
    hoverBgColor: "hover:bg-purple/[0.14]",
    activeBgColor: "active:bg-purple/[0.08]"
  },
  "purple-50": {
    borderColor: "border-purple-50",
    textColor: "text-purple-50",
    hoverBgColor: "hover:bg-purple-50/[0.14]",
    activeBgColor: "active:bg-purple-50/[0.08]"
  },
  "purple-100": {
    borderColor: "border-purple-100",
    textColor: "text-purple-100",
    hoverBgColor: "hover:bg-purple-100/[0.14]",
    activeBgColor: "active:bg-purple-100/[0.08]"
  },
  "purple-200": {
    borderColor: "border-purple-200",
    textColor: "text-purple-200",
    hoverBgColor: "hover:bg-purple-200/[0.14]",
    activeBgColor: "active:bg-purple-200/[0.08]"
  },
  "purple-300": {
    borderColor: "border-purple-300",
    textColor: "text-purple-300",
    hoverBgColor: "hover:bg-purple-300/[0.14]",
    activeBgColor: "active:bg-purple-300/[0.08]"
  },
  "purple-400": {
    borderColor: "border-purple-400",
    textColor: "text-purple-400",
    hoverBgColor: "hover:bg-purple-400/[0.14]",
    activeBgColor: "active:bg-purple-400/[0.08]"
  },
  "purple-500": {
    borderColor: "border-purple-500",
    textColor: "text-purple-500",
    hoverBgColor: "hover:bg-purple-500/[0.14]",
    activeBgColor: "active:bg-purple-500/[0.08]"
  },
  "purple-600": {
    borderColor: "border-purple-600",
    textColor: "text-purple-600",
    hoverBgColor: "hover:bg-purple-600/[0.14]",
    activeBgColor: "active:bg-purple-600/[0.08]"
  },
  "purple-700": {
    borderColor: "border-purple-700",
    textColor: "text-purple-700",
    hoverBgColor: "hover:bg-purple-700/[0.14]",
    activeBgColor: "active:bg-purple-700/[0.08]"
  },
  "purple-800": {
    borderColor: "border-purple-800",
    textColor: "text-purple-800",
    hoverBgColor: "hover:bg-purple-800/[0.14]",
    activeBgColor: "active:bg-purple-800/[0.08]"
  },
  "purple-900": {
    borderColor: "border-purple-900",
    textColor: "text-purple-900",
    hoverBgColor: "hover:bg-purple-900/[0.14]",
    activeBgColor: "active:bg-purple-900/[0.08]"
  },
  "orange": {
    borderColor: "border-orange",
    textColor: "text-orange",
    hoverBgColor: "hover:bg-orange/[0.14]",
    activeBgColor: "active:bg-orange/[0.08]"
  },
  "orange-50": {
    borderColor: "border-orange-50",
    textColor: "text-orange-50",
    hoverBgColor: "hover:bg-orange-50/[0.14]",
    activeBgColor: "active:bg-orange-50/[0.08]"
  },
  "orange-100": {
    borderColor: "border-orange-100",
    textColor: "text-orange-100",
    hoverBgColor: "hover:bg-orange-100/[0.14]",
    activeBgColor: "active:bg-orange-100/[0.08]"
  },
  "orange-200": {
    borderColor: "border-orange-200",
    textColor: "text-orange-200",
    hoverBgColor: "hover:bg-orange-200/[0.14]",
    activeBgColor: "active:bg-orange-200/[0.08]"
  },
  "orange-300": {
    borderColor: "border-orange-300",
    textColor: "text-orange-300",
    hoverBgColor: "hover:bg-orange-300/[0.14]",
    activeBgColor: "active:bg-orange-300/[0.08]"
  },
  "orange-400": {
    borderColor: "border-orange-400",
    textColor: "text-orange-400",
    hoverBgColor: "hover:bg-orange-400/[0.14]",
    activeBgColor: "active:bg-orange-400/[0.08]"
  },
  "orange-500": {
    borderColor: "border-orange-500",
    textColor: "text-orange-500",
    hoverBgColor: "hover:bg-orange-500/[0.14]",
    activeBgColor: "active:bg-orange-500/[0.08]"
  },
  "orange-600": {
    borderColor: "border-orange-600",
    textColor: "text-orange-600",
    hoverBgColor: "hover:bg-orange-600/[0.14]",
    activeBgColor: "active:bg-orange-600/[0.08]"
  },
  "orange-700": {
    borderColor: "border-orange-700",
    textColor: "text-orange-700",
    hoverBgColor: "hover:bg-orange-700/[0.14]",
    activeBgColor: "active:bg-orange-700/[0.08]"
  },
  "orange-800": {
    borderColor: "border-orange-800",
    textColor: "text-orange-800",
    hoverBgColor: "hover:bg-orange-800/[0.14]",
    activeBgColor: "active:bg-orange-800/[0.08]"
  },
  "orange-900": {
    borderColor: "border-orange-900",
    textColor: "text-orange-900",
    hoverBgColor: "hover:bg-orange-900/[0.14]",
    activeBgColor: "active:bg-orange-900/[0.08]"
  },
  "limegreen": {
    borderColor: "border-limegreen",
    textColor: "text-limegreen",
    hoverBgColor: "hover:bg-limegreen/[0.14]",
    activeBgColor: "active:bg-limegreen/[0.08]"
  },
  "limegreen-50": {
    borderColor: "border-limegreen-50",
    textColor: "text-limegreen-50",
    hoverBgColor: "hover:bg-limegreen-50/[0.14]",
    activeBgColor: "active:bg-limegreen-50/[0.08]"
  },
  "limegreen-100": {
    borderColor: "border-limegreen-100",
    textColor: "text-limegreen-100",
    hoverBgColor: "hover:bg-limegreen-100/[0.14]",
    activeBgColor: "active:bg-limegreen-100/[0.08]"
  },
  "limegreen-200": {
    borderColor: "border-limegreen-200",
    textColor: "text-limegreen-200",
    hoverBgColor: "hover:bg-limegreen-200/[0.14]",
    activeBgColor: "active:bg-limegreen-200/[0.08]"
  },
  "limegreen-300": {
    borderColor: "border-limegreen-300",
    textColor: "text-limegreen-300",
    hoverBgColor: "hover:bg-limegreen-300/[0.14]",
    activeBgColor: "active:bg-limegreen-300/[0.08]"
  },
  "limegreen-400": {
    borderColor: "border-limegreen-400",
    textColor: "text-limegreen-400",
    hoverBgColor: "hover:bg-limegreen-400/[0.14]",
    activeBgColor: "active:bg-limegreen-400/[0.08]"
  },
  "limegreen-500": {
    borderColor: "border-limegreen-500",
    textColor: "text-limegreen-500",
    hoverBgColor: "hover:bg-limegreen-500/[0.14]",
    activeBgColor: "active:bg-limegreen-500/[0.08]"
  },
  "limegreen-600": {
    borderColor: "border-limegreen-600",
    textColor: "text-limegreen-600",
    hoverBgColor: "hover:bg-limegreen-600/[0.14]",
    activeBgColor: "active:bg-limegreen-600/[0.08]"
  },
  "limegreen-700": {
    borderColor: "border-limegreen-700",
    textColor: "text-limegreen-700",
    hoverBgColor: "hover:bg-limegreen-700/[0.14]",
    activeBgColor: "active:bg-limegreen-700/[0.08]"
  },
  "limegreen-800": {
    borderColor: "border-limegreen-800",
    textColor: "text-limegreen-800",
    hoverBgColor: "hover:bg-limegreen-800/[0.14]",
    activeBgColor: "active:bg-limegreen-800/[0.08]"
  },
  "limegreen-900": {
    borderColor: "border-limegreen-900",
    textColor: "text-limegreen-900",
    hoverBgColor: "hover:bg-limegreen-900/[0.14]",
    activeBgColor: "active:bg-limegreen-900/[0.08]"
  },
  "white": {
    borderColor: "border-white",
    textColor: "text-white",
    hoverBgColor: "hover:bg-white/[0.14]",
    activeBgColor: "active:bg-white/[0.08]"
  },
  "white-50": {
    borderColor: "border-white-50",
    textColor: "text-white-50",
    hoverBgColor: "hover:bg-white-50/[0.14]",
    activeBgColor: "active:bg-white-50/[0.08]"
  },
  "white-100": {
    borderColor: "border-white-100",
    textColor: "text-white-100",
    hoverBgColor: "hover:bg-white-100/[0.14]",
    activeBgColor: "active:bg-white-100/[0.08]"
  },
  "white-200": {
    borderColor: "border-white-200",
    textColor: "text-white-200",
    hoverBgColor: "hover:bg-white-200/[0.14]",
    activeBgColor: "active:bg-white-200/[0.08]"
  },
  "white-300": {
    borderColor: "border-white-300",
    textColor: "text-white-300",
    hoverBgColor: "hover:bg-white-300/[0.14]",
    activeBgColor: "active:bg-white-300/[0.08]"
  },
  "white-400": {
    borderColor: "border-white-400",
    textColor: "text-white-400",
    hoverBgColor: "hover:bg-white-400/[0.14]",
    activeBgColor: "active:bg-white-400/[0.08]"
  },
  "white-500": {
    borderColor: "border-white-500",
    textColor: "text-white-500",
    hoverBgColor: "hover:bg-white-500/[0.14]",
    activeBgColor: "active:bg-white-500/[0.08]"
  },
  "white-600": {
    borderColor: "border-white-600",
    textColor: "text-white-600",
    hoverBgColor: "hover:bg-white-600/[0.14]",
    activeBgColor: "active:bg-white-600/[0.08]"
  },
  "white-700": {
    borderColor: "border-white-700",
    textColor: "text-white-700",
    hoverBgColor: "hover:bg-white-700/[0.14]",
    activeBgColor: "active:bg-white-700/[0.08]"
  },
  "white-800": {
    borderColor: "border-white-800",
    textColor: "text-white-800",
    hoverBgColor: "hover:bg-white-800/[0.14]",
    activeBgColor: "active:bg-white-800/[0.08]"
  },
  "white-900": {
    borderColor: "border-white-900",
    textColor: "text-white-900",
    hoverBgColor: "hover:bg-white-900/[0.14]",
    activeBgColor: "active:bg-white-900/[0.08]"
  },
  "black": {
    borderColor: "border-black",
    textColor: "text-black",
    hoverBgColor: "hover:bg-black/[0.14]",
    activeBgColor: "active:bg-black/[0.08]"
  },
  "black-50": {
    borderColor: "border-black-50",
    textColor: "text-black-50",
    hoverBgColor: "hover:bg-black-50/[0.14]",
    activeBgColor: "active:bg-black-50/[0.08]"
  },
  "black-100": {
    borderColor: "border-black-100",
    textColor: "text-black-100",
    hoverBgColor: "hover:bg-black-100/[0.14]",
    activeBgColor: "active:bg-black-100/[0.08]"
  },
  "black-200": {
    borderColor: "border-black-200",
    textColor: "text-black-200",
    hoverBgColor: "hover:bg-black-200/[0.14]",
    activeBgColor: "active:bg-black-200/[0.08]"
  },
  "black-300": {
    borderColor: "border-black-300",
    textColor: "text-black-300",
    hoverBgColor: "hover:bg-black-300/[0.14]",
    activeBgColor: "active:bg-black-300/[0.08]"
  },
  "black-400": {
    borderColor: "border-black-400",
    textColor: "text-black-400",
    hoverBgColor: "hover:bg-black-400/[0.14]",
    activeBgColor: "active:bg-black-400/[0.08]"
  },
  "black-500": {
    borderColor: "border-black-500",
    textColor: "text-black-500",
    hoverBgColor: "hover:bg-black-500/[0.14]",
    activeBgColor: "active:bg-black-500/[0.08]"
  },
  "black-600": {
    borderColor: "border-black-600",
    textColor: "text-black-600",
    hoverBgColor: "hover:bg-black-600/[0.14]",
    activeBgColor: "active:bg-black-600/[0.08]"
  },
  "black-700": {
    borderColor: "border-black-700",
    textColor: "text-black-700",
    hoverBgColor: "hover:bg-black-700/[0.14]",
    activeBgColor: "active:bg-black-700/[0.08]"
  },
  "black-800": {
    borderColor: "border-black-800",
    textColor: "text-black-800",
    hoverBgColor: "hover:bg-black-800/[0.14]",
    activeBgColor: "active:bg-black-800/[0.08]"
  },
  "black-900": {
    borderColor: "border-black-900",
    textColor: "text-black-900",
    hoverBgColor: "hover:bg-black-900/[0.14]",
    activeBgColor: "active:bg-black-900/[0.08]"
  }
};