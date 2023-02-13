import React from 'react';
import Icon from '@ant-design/icons';

const TwitterSvg = () => (
  <svg width="24" height="24" viewBox="0 0 100 100" fill="currentColor">
    <path d="M94.2892 22.4068C92.827 23.0267 91.3236 23.5499 89.7875 23.9747C91.6061 22.0087 92.9927 19.6954 93.8391 17.164C94.0289 16.5966 93.8322 15.9755 93.3443 15.6044C92.857 15.233 92.1799 15.1885 91.6434 15.4924C88.3811 17.3419 84.8615 18.6711 81.1711 19.4483C77.4537 15.9761 72.4046 14 67.185 14C56.1672 14 47.2034 22.568 47.2034 33.0995C47.2034 33.929 47.2584 34.7538 47.3671 35.5672C33.695 34.4198 20.9844 27.9962 12.256 17.7618C11.945 17.397 11.4658 17.2004 10.9752 17.238C10.4842 17.2748 10.0432 17.5394 9.79515 17.9461C8.02486 20.8497 7.08897 24.1707 7.08897 27.5496C7.08897 32.1518 8.80792 36.5184 11.8444 39.9303C10.9211 39.6246 10.0251 39.2426 9.17003 38.7889C8.71094 38.5446 8.15067 38.5484 7.69458 38.7984C7.2382 39.0483 6.95205 39.5081 6.94004 40.0107C6.93794 40.0953 6.93794 40.18 6.93794 40.2658C6.93794 47.1354 10.8058 53.3201 16.7193 56.691C16.2113 56.6425 15.7035 56.5722 15.1991 56.4801C14.6791 56.3851 14.1443 56.5593 13.7936 56.9384C13.4423 57.3173 13.3261 57.8454 13.488 58.3275C15.6768 64.8598 21.3123 69.6646 28.125 71.1295C22.4746 74.5125 16.0128 76.2845 9.22948 76.2845C7.81408 76.2845 6.39058 76.205 4.9974 76.0474C4.30532 75.9688 3.64356 76.3594 3.40786 76.9885C3.17216 77.6179 3.42197 78.3196 4.01077 78.6804C12.725 84.0213 22.8012 86.8444 33.1495 86.8444C53.4928 86.8444 66.2191 77.6744 73.3126 69.9818C82.1581 60.3897 87.2311 47.6933 87.2311 35.1485C87.2311 34.6244 87.2227 34.0952 87.2059 33.5676C90.6958 31.0543 93.7004 28.0126 96.1454 24.5165C96.5168 23.9856 96.4765 23.2838 96.0463 22.7951C95.6166 22.306 94.9005 22.1479 94.2892 22.4068Z" />
  </svg>
);

export default (props: any) => <Icon component={TwitterSvg} {...props} />;