import React, { FC } from "react";
import AbacusIcon from "./AbacusIcon";
import BarChartIcon from "./BarChartIcon";
import ClipboardIcon from "./ClipboardIcon";
import GameControlIcon from "./GameControlIcon";
import MegaphoneIcon from "./MegaphoneIcon";
import AppleFruitIcon from "./AppleFruitIcon";
import WellbeingIcon from "./WellbeingIcon";
import DumbbellIcon from "./DumbbellIcon";
import MedicIcon from "./MedicIcon";
import MeditationIcon from "./MeditationIcon";
import SpaIcon from "./SpaIcon";
import MicrophoneIcon from "./MicrophoneIcon";
import MicrophoneExtIcon from "./MicrophoneExtIcon";
import PaletteIcon from "./PaletteIcon";
import VideoCamIcon from "./VideoCamIcon";
import TieIcon from "./TieIcon";
import BalanceIcon from "./BalanceIcon";
import CelebrationIcon from "./CelebrationIcon";
import ScreenIcon from "./ScreenIcon";
import IdeaIcon from "./IdeaIcon";
import GlassesIcon from "./GlassesIcon";
import LanguageIcon from "./LanguageIcon";
import MovieIcon from "./MovieIcon";
import PersonCelebrateIcon from "./PersonCelebrateIcon";
import SearchIcon from "./SearchIcon";
import ComedyIcon from "./ComedyIcon";
import BriefcaseIcon from "./BriefcaseIcon";

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

const IconRolesList: FC<IconProps> = ({ size, color }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1">
      <IconWrapper>
        <AbacusIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<AbacusIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <BarChartIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<BarChartIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ClipboardIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ClipboardIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <GameControlIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<GameControlIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MegaphoneIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MegaphoneIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <AppleFruitIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<AppleFruitIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <WellbeingIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<WellbeingIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <DumbbellIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<DumbbellIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MedicIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MedicIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MeditationIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MeditationIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <SpaIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<SpaIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MicrophoneIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MicrophoneIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MicrophoneExtIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MicrophoneExtIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PaletteIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PaletteIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <VideoCamIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<VideoCamIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <TieIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<TieIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <BalanceIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<BalanceIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CelebrationIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CelebrationIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ScreenIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ScreenIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <IdeaIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IdeaIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <GlassesIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<GlassesIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <LanguageIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<LanguageIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MovieIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MovieIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PersonCelebrateIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PersonCelebrateIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <SearchIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<SearchIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ComedyIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ComedyIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <BriefcaseIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<BriefcaseIcon />'}</pre> 
        </div>
      </IconWrapper>
    </div>
  );
};

export default IconRolesList;