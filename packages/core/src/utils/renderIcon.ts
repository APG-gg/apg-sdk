import getComponentByName from "./mapping";

const renderIcon = (icon: string | React.ReactNode, className: string = '') => {
  if (typeof icon === 'string') {
    return getComponentByName(icon, className);
  } else {
    return icon
  }
}

export default renderIcon;