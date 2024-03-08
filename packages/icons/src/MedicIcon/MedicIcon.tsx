import React from 'react';
import Icon from '@apg.gg/core/lib/Icon';

const IconSVG = () => (
  <svg width="1em" height="1em" viewBox="0 0 85 85" fill="currentColor">
    <path d="M36.8414 47.3411L36.8549 54.3411C36.8577 55.7994 37.3705 57.038 38.3934 58.0569C39.4162 59.0757 40.6567 59.5838 42.1151 59.5809C43.5734 59.5781 44.812 59.0653 45.8308 58.0425C46.8497 57.0197 47.3577 55.7791 47.3549 54.3208L47.3414 47.3208L54.3414 47.3073C55.7997 47.3045 57.0383 46.7917 58.0572 45.7689C59.076 44.7461 59.584 43.5055 59.5812 42.0472C59.5784 40.5889 59.0656 39.3503 58.0428 38.3314C57.02 37.3125 55.7794 36.8045 54.3211 36.8073L47.3211 36.8208L47.3076 29.8209C47.3048 28.3625 46.792 27.1239 45.7692 26.1051C44.7464 25.0862 43.5058 24.5782 42.0475 24.581C40.5891 24.5838 39.3506 25.0966 38.3317 26.1194C37.3128 27.1422 36.8048 28.3828 36.8076 29.8411L36.8211 36.8411L29.8212 36.8546C28.3628 36.8574 27.1242 37.3703 26.1054 38.3931C25.0865 39.4159 24.5785 40.6564 24.5813 42.1148C24.5841 43.5731 25.0969 44.8117 26.1197 45.8305C27.1425 46.8494 28.3831 47.3574 29.8414 47.3546L36.8414 47.3411ZM17.6421 73.6282C15.7171 73.6319 14.0679 72.9497 12.6944 71.5815C11.3209 70.2133 10.6323 68.5667 10.6286 66.6417L10.534 17.6418C10.5303 15.7168 11.2125 14.0676 12.5807 12.6941C13.9489 11.3206 15.5955 10.632 17.5205 10.6283L66.5204 10.5337C68.4454 10.53 70.0946 11.2122 71.4681 12.5804C72.8416 13.9486 73.5302 15.5952 73.5339 17.5202L73.6285 66.5201C73.6322 68.4451 72.95 70.0943 71.5818 71.4678C70.2136 72.8413 68.567 73.5299 66.642 73.5336L17.6421 73.6282Z" />
  </svg>
);

export default (props: any) => <Icon component={IconSVG} className="flex" {...props} />;