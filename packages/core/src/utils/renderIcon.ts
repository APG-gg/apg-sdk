import getComponentByName from "./mapping";

const renderIcon = (icon: string | React.ReactNode) => {
  if (typeof icon === 'string') {
    return getComponentByName(icon);
  } else {
    return icon
  }
}

export default renderIcon;