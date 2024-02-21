import React, { FC } from "react";
import CoinPixelIcon from "./Pixel/CoinPixelIcon";
import LawyerPixelIcon from "./Pixel/LawyerPixelIcon";
import AnalystPixelIcon from "./Pixel/AnalystPixelIcon";
import RefereePixelIcon from "./Pixel/RefereePixelIcon";
import BroadcasterPixelIcon from "./Pixel/BroadcasterPixelIcon";
import CasterPixelIcon from "./Pixel/CasterPixelIcon";
import CeoPixelIcon from "./Pixel/CeoPixelIcon";
import CoachPixelIcon from "./Pixel/CoachPixelIcon";
import CounterPixelIcon from "./Pixel/CounterPixelIcon";
import CopywriterPixelIcon from "./Pixel/CopywriterPixelIcon";
import CosplayerPixelIcon from "./Pixel/CosplayerPixelIcon";
import CreatorPixelIcon from "./Pixel/CreatorPixelIcon";
import DeveloperPixelIcon from "./Pixel/DeveloperPixelIcon";
import DesignerPixelIcon from "./Pixel/DesignerPixelIcon";
import EditorPixelIcon from "./Pixel/EditorPixelIcon";
import FanPixelIcon from "./Pixel/FanPixelIcon";
import FitnessPixelIcon from "./Pixel/FitnessPixelIcon";
import FounderPixelIcon from "./Pixel/FounderPixelIcon";
import HostPixelIcon from "./Pixel/HostPixelIcon";
import IllustratorPixelIcon from "./Pixel/IllustratorPixelIcon";
import ManagerPixelIcon from "./Pixel/ManagerPixelIcon";
import MedicPixelIcon from "./Pixel/MedicPixelIcon";
import NutritionistPixelIcon from "./Pixel/NutritionistPixelIcon";
import ObserverPixelIcon from "./Pixel/ObserverPixelIcon";
import OrganizerPixelIcon from "./Pixel/OrganizerPixelIcon";
import PerformancePixelIcon from "./Pixel/PerformancePixelIcon";
import PlayerPixelIcon from "./Pixel/PlayerPixelIcon";
import PsychologistPixelIcon from "./Pixel/PsychologistPixelIcon";
import RecruiterPixelIcon from "./Pixel/RecruiterPixelIcon";
import StreamerPixelIcon from "./Pixel/StreamerPixelIcon";
import TalentManagerPixelIcon from "./Pixel/TalentManagerPixelIcon";

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

const IconPixeledList: FC<IconProps> = ({ size, color }) => {
  return (
    <div className="grid grid-cols-6 grid-rows-1">
      <IconWrapper>
        <CoinPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CoinPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <LawyerPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<LawyerPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <AnalystPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<AnalystPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <RefereePixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<RefereePixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <BroadcasterPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<BroadcasterPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CasterPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CasterPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CeoPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CeoPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CoachPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CoachPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CounterPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CounterPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CopywriterPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CopywriterPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CosplayerPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CosplayerPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CreatorPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CreatorPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <DeveloperPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<DeveloperPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <DesignerPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<DesignerPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <EditorPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<EditorPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <FanPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<FanPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <FitnessPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<FitnessPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <FounderPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<FounderPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <HostPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<HostPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <IllustratorPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<IllustratorPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ManagerPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ManagerPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MedicPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MedicPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <NutritionistPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<NutritionistPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ObserverPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ObserverPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <OrganizerPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<OrganizerPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PerformancePixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PerformancePixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PlayerPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PlayerPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PsychologistPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PsychologistPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <RecruiterPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<RecruiterPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <StreamerPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<StreamerPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <TalentManagerPixelIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<TalentManagerPixelIcon />'}</pre> 
        </div>
      </IconWrapper>
    </div>
  );
};

export default IconPixeledList;