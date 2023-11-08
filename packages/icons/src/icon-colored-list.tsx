import React, { FC } from "react";
import BetaColorIcon from "./BetaColorIcon";
import VerifiedColorIcon from "./VerifiedColorIcon";
import AbacusColorIcon from "./AbacusColorIcon";
import BarChartColorIcon from "./BarChartColorIcon";
import ClipboardColorIcon from "./ClipboardColorIcon";
import MegaphoneColorIcon from "./MegaphoneColorIcon";
import GameControlColorIcon from "./GameControlColorIcon";
import MedicColorIcon from "./MedicColorIcon";
import SpaColorIcon from "./SpaColorIcon";
import MeditationColorIcon from "./MeditationColorIcon";
import DumbbellColorIcon from "./DumbbellColorIcon";
import AppleFruitColorIcon from "./AppleFruitColorIcon";
import WellbeingColorIcon from "./WellbeingColorIcon";
import VideoCamColorIcon from "./VideoCamColorIcon";
import MicrophoneColorIcon from "./MicrophoneColorIcon";
import MicrophoneExtColorIcon from "./MicrophoneExtColorIcon";
import PaletteColorIcon from "./PaletteColorIcon";
import BalanceColorIcon from "./BalanceColorIcon";
import BriefcaseColorIcon from "./BriefcaseColorIcon";
import MovieColorIcon from "./MovieColorIcon";
import GlassesColorIcon from "./GlassesColorIcon";
import ScreenColorIcon from "./ScreenColorIcon";
import IdeaColorIcon from "./IdeaColorIcon";
import TieColorIcon from "./TieColorIcon";
import CelebrationColorIcon from "./CelebrationColorIcon";
import PersonCelebrateColorIcon from "./PersonCelebrateColorIcon";
import ComedyColorIcon from "./ComedyColorIcon";
import SearchColorIcon from "./SearchColorIcon";

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

const IconColoredList: FC<IconProps> = ({ size, color }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1">
      <IconWrapper>
        <BetaColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<BetaColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <VerifiedColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<VerifiedColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <AbacusColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<AbacusColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <BarChartColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<BarChartColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ClipboardColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ClipboardColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MegaphoneColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MegaphoneColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <GameControlColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<GameControlColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MedicColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MedicColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <SpaColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<SpaColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MeditationColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MeditationColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <DumbbellColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<DumbbellColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <AppleFruitColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<AppleFruitColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <WellbeingColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<WellbeingColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MicrophoneColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MicrophoneColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MicrophoneExtColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MicrophoneExtColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PaletteColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PaletteColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <VideoCamColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<VideoCamColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <BalanceColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<BalanceColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <BriefcaseColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<BriefcaseColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MovieColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MovieColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <GlassesColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<GlassesColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ScreenColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ScreenColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <IdeaColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IdeaColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <TieColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<TieColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CelebrationColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CelebrationColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PersonCelebrateColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PersonCelebrateColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ComedyColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ComedyColorIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <SearchColorIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<SearchColorIcon />'}</pre> 
        </div>
      </IconWrapper>
    </div>
  );
};

export default IconColoredList;