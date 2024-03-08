import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 85 85" fill="currentColor">
    <path d="M14.1553 14.8947L21.1823 28.8811L31.6823 28.8609L24.6552 14.8744L31.6552 14.8609L38.6822 28.8474L49.1822 28.8271L42.1552 14.8406L49.1552 14.8271L56.1822 28.8136L66.6822 28.7933L59.6552 14.8068L70.1552 14.7866C72.0802 14.7829 73.7294 15.4651 75.1029 16.8333C76.4763 18.2015 77.1649 19.848 77.1687 21.773L77.2497 63.773C77.2535 65.698 76.5712 67.3472 75.203 68.7207C73.8349 70.0942 72.1883 70.7828 70.2633 70.7865L14.2634 70.8946C12.3384 70.8983 10.6891 70.2161 9.31567 68.8479C7.94219 67.4797 7.25359 65.8331 7.24988 63.9081L7.16879 21.9082C7.16507 19.9832 7.84731 18.334 9.21549 16.9605C10.5837 15.587 12.2303 14.8984 14.1553 14.8947Z" />
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;