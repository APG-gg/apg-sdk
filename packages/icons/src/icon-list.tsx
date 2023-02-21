import React, { FC } from "react";
import { IconProps } from "@apg.gg/core/lib/icon-props";
import IconBaron from './IconBaron';
import IconDiscord from "./IconDiscord";
import IconDrake from "./IconDrake";
import IconDrakeCloud from "./IconDrakeCloud";
import IconDrakeInfernal from "./IconDrakeInfernal";
import IconDrakeMountain from "./IconDrakeMountain";
import IconDrakeOcean from "./IconDrakeOcean";
import IconTwitter from "./IconTwitter";
import VerifiedIcon from './VerifiedIcon';
import NavigateNextIcon from "./NavigateNextIcon";
import NavigatePrevIcon from "./NavigatePrevIcon";

interface IconWrapperProps {	
  children: React.ReactNode;
}

const IconWrapper: FC<IconWrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center rounded-lg shadow-md w-full h-40">
      {children}
    </div>
  );
};

const IconList: FC<IconProps> = ({ size, color }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1">
      <IconWrapper>
        <IconBaron style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IconBaron />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <IconDiscord style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IconDiscord />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <IconDrake style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IconDrake />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <IconDrakeCloud style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IconDrakeCloud />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <IconDrakeInfernal style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IconDrakeInfernal />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <IconDrakeMountain style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IconDrakeMountain />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <IconDrakeOcean style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IconDrakeOcean />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <IconTwitter style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IconTwitter />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <VerifiedIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<VerifiedIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <NavigateNextIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<NavigateNextIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <NavigatePrevIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<NavigatePrevIcon />'}</pre> 
        </div>
      </IconWrapper>
    </div>
  );
};

export default IconList;