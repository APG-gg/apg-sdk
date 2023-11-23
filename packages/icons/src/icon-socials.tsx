import React, { FC } from "react";
import ApgIcon from "./ApgIcon";
import DiscordIcon from "./DiscordIcon";
import EpicIcon from "./EpicIcon";
import FacebookIcon from "./FacebookIcon";
import GithubIcon from "./GithubIcon";
import GoogleIcon from "./GoogleIcon";
import InstagramIcon from "./InstagramIcon";
import KickIcon from "./KickIcon";
import KoFiIcon from "./KoFiIcon";
import PatreonIcon from "./PatreonIcon";
import RiotIcon from "./RiotIcon";
import SteamIcon from "./SteamIcon";
import TelegramIcon from "./TelegramIcon";
import ThreadsIcon from "./ThreadsIcon";
import TiktokIcon from "./TiktokIcon";
import TwitchIcon from "./TwitchIcon";
import TwitterIcon from "./TwitterIcon";
import XboxIcon from "./XboxIcon";
import HoyolabIcon from "./HoyolabIcon";
import PaypalIcon from "./PaypalIcon";
import CafecitoIcon from "./CafecitoIcon";
import AmazonIcon from "./AmazonIcon";

interface IconWrapperProps {	
  children: React.ReactNode;
}

export interface IconProps {
  size: number;
  color: string;
}

const IconWrapper: FC<IconWrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center rounded-lg shadow-md w-full h-40">
      {children}
    </div>
  );
};

const IconSocialsList: FC<IconProps> = ({ size, color }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1">
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
        <ThreadsIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ThreadsIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <KickIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<KickIcon />'}</pre> 
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
        <ApgIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ApgIcon />'}</pre> 
        </div>
      </IconWrapper>


      <IconWrapper>
        <RiotIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<RiotIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <SteamIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<SteamIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <XboxIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<XboxIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <EpicIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<EpicIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <GithubIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<GithubIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PatreonIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PatreonIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <KoFiIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<KoFiIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <HoyolabIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<HoyolabIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PaypalIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PaypalIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CafecitoIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CafecitoIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <AmazonIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<AmazonIcon />'}</pre> 
        </div>
      </IconWrapper>
      
    </div>
  );
};

export default IconSocialsList;