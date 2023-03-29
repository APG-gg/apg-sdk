import React, { FC } from "react";
import { IconProps } from "@apg.gg/core/lib/icon-props";
import ApgIcon from "./ApgIcon";
import ArrowDownIcon from "./ArrowDownIcon";
import ArrowLeftIcon from "./ArrowLeftIcon";
import ArrowRightIcon from "./ArrowRightIcon";
import ArrowUpIcon from "./ArrowUpIcon";
import CommentIcon from "./CommentIcon";
import DiscordIcon from "./DiscordIcon";
import ErrorIcon from "./ErrorIcon";
import FacebookIcon from "./FacebookIcon";
import GoogleIcon from "./GoogleIcon";
import HeartIcon from "./HeartIcon";
import IconBaron from './IconBaron';
import IconDrake from "./IconDrake";
import IconDrakeCloud from "./IconDrakeCloud";
import IconDrakeInfernal from "./IconDrakeInfernal";
import IconDrakeMountain from "./IconDrakeMountain";
import IconDrakeOcean from "./IconDrakeOcean";
import IconHamburger from "./IconHamburger";
import IconHerald from "./IconHerald";
import IconTurret from "./IconTurret";
import InstagramIcon from "./InstagramIcon";
import MenuIcon from "./MenuIcon";
import MenuOpenIcon from "./MenuOpenIcon";
import MoreVerticalIcon from "./MoreVerticalIcon";
import PersonIcon from "./PersonIcon";
import PlusIcon from "./PlusIcon";
import SearchIcon from "./SearchIcon";
import ShareIcon from "./ShareIcon";
import TelegramIcon from "./TelegramIcon";
import TiktokIcon from "./TiktokIcon";
import TwitchIcon from "./TwitchIcon";
import TwitterIcon from "./TwitterIcon";
import VerifiedIcon from './VerifiedIcon';
import VisibilityIcon from "./VisibilityIcon";
import VisibilityOffIcon from "./VisibilityOffIcon";
import XCircleIcon from "./XCircleIcon";
import XIcon from "./XIcon";

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
        <DiscordIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<DiscordIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <TwitterIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<TwitterIcon />'}</pre> 
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
      <IconWrapper>
        <CommentIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CommentIcon />'}</pre> 
        </div>
      </IconWrapper>

      <IconWrapper>
        <ErrorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ErrorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <SearchIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<SearchIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <HeartIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<HeartIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PersonIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PersonIcon />'}</pre> 
        </div>
      </IconWrapper>

      <IconWrapper>
        <MoreVerticalIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MoreVerticalIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PlusIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PlusIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <XCircleIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<XCircleIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <XIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<XIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MenuIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MenuIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MenuOpenIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MenuOpenIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ShareIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ShareIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <VisibilityIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<VisibilityIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <VisibilityOffIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<VisibilityOffIcon />'}</pre> 
        </div>
      </IconWrapper>
    </div>
  );
};

export default IconList;