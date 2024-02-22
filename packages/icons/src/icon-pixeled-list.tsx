import React, { FC } from "react";
import CoinPixelIcon from "./CoinPixelIcon";
import LawyerPixelIcon from "./LawyerPixelIcon";
import AnalystPixelIcon from "./AnalystPixelIcon";
import RefereePixelIcon from "./RefereePixelIcon";
import BroadcasterPixelIcon from "./BroadcasterPixelIcon";
import CasterPixelIcon from "./CasterPixelIcon";
import CeoPixelIcon from "./CeoPixelIcon";
import CoachPixelIcon from "./CoachPixelIcon";
import CounterPixelIcon from "./CounterPixelIcon";
import CopywriterPixelIcon from "./CopywriterPixelIcon";
import CosplayerPixelIcon from "./CosplayerPixelIcon";
import CreatorPixelIcon from "./CreatorPixelIcon";
import DeveloperPixelIcon from "./DeveloperPixelIcon";
import DesignerPixelIcon from "./DesignerPixelIcon";
import EditorPixelIcon from "./EditorPixelIcon";
import FanPixelIcon from "./FanPixelIcon";
import FitnessPixelIcon from "./FitnessPixelIcon";
import FounderPixelIcon from "./FounderPixelIcon";
import HostPixelIcon from "./HostPixelIcon";
import IllustratorPixelIcon from "./IllustratorPixelIcon";
import ManagerPixelIcon from "./ManagerPixelIcon";
import MedicPixelIcon from "./MedicPixelIcon";
import NutritionistPixelIcon from "./NutritionistPixelIcon";
import ObserverPixelIcon from "./ObserverPixelIcon";
import OrganizerPixelIcon from "./OrganizerPixelIcon";
import PerformancePixelIcon from "./PerformancePixelIcon";
import PlayerPixelIcon from "./PlayerPixelIcon";
import PsychologistPixelIcon from "./PsychologistPixelIcon";
import RecruiterPixelIcon from "./RecruiterPixelIcon";
import StreamerPixelIcon from "./StreamerPixelIcon";
import TalentManagerPixelIcon from "./TalentManagerPixelIcon";

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