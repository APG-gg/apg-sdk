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
import ArrowRightIcon from "./ArrowRightIcon";
import ArrowLeftIcon from "./ArrowLeftIcon";
import IconHerald from "./IconHerald";
import IconHamburger from "./IconHamburger";
import IconTurret from "./IconTurret";
import ArrowDownIcon from "./ArrowDownIcon";
import ArrowUpIcon from "./ArrowUpIcon";
import GoogleIcon from "./GoogleIcon";
import TwitchIcon from "./TwitchIcon";
import TiktokIcon from "./TiktokIcon";
import TelegramIcon from "./TelegramIcon";
import FacebookIcon from "./FacebookIcon";
import ApgIcon from "./ApgIcon";
import InstagramIcon from "./InstagramIcon";

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
        <IconHerald style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IconHerald />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <IconTurret style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IconTurret />'}</pre> 
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
        <IconDiscord style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IconDiscord />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <IconTwitter style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IconTwitter />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <GoogleIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<GoogleIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <TwitchIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<TwitchIcon />'}</pre> 
        </div>
      </IconWrapper>

      <IconWrapper>
        <TiktokIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<TiktokIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <TelegramIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<TelegramIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <FacebookIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<FacebookIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <InstagramIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<InstagramIcon />'}</pre> 
        </div>
      </IconWrapper>

      <IconWrapper>
        <ArrowLeftIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ArrowLeftIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ArrowRightIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ArrowRightIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ArrowUpIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ArrowUpIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ArrowDownIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ArrowDownIcon />'}</pre> 
        </div>
      </IconWrapper>
      
      <IconWrapper>
        <VerifiedIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<VerifiedIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <IconHamburger style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IconHamburger />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ApgIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ApgIcon />'}</pre> 
        </div>
      </IconWrapper>
    </div>
  );
};

export default IconList;