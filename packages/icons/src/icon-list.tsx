import React, { FC } from "react";
import ApgIcon from "./ApgIcon";
import ArrowDownIcon from "./ArrowDownIcon";
import ArrowLeftIcon from "./ArrowLeftIcon";
import ArrowRightIcon from "./ArrowRightIcon";
import ArrowUpIcon from "./ArrowUpIcon";
import CommentIcon from "./CommentIcon";
import DownloadIcon from "./DownloadIcon";
import DragIcon from "./DragIcon";
import ErrorIcon from "./ErrorIcon";
import GridViewIcon from "./GridViewIcon";
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
import LinkIcon from "./LinkIcon";
import LogoutIcon from "./LogoutIcon";
import MenuIcon from "./MenuIcon";
import MenuOpenIcon from "./MenuOpenIcon";
import MoreIcon from "./MoreIcon";
import MoreVerticalIcon from "./MoreVerticalIcon";
import OpenLinkIcon from "./OpenLinkIcon";
import PasswordIcon from "./PasswordIcon";
import PersonIcon from "./PersonIcon";
import PlusIcon from "./PlusIcon";
import SearchIcon from "./SearchIcon";
import SettingsIcon from "./SettingsIcon";
import ShareIcon from "./ShareIcon";
import SocialIcon from "./SocialIcon";
import UploadIcon from "./UploadIcon";
import VerifiedIcon from './VerifiedIcon';
import ViewListIcon from "./ViewListIcon";
import VisibilityIcon from "./VisibilityIcon";
import VisibilityOffIcon from "./VisibilityOffIcon";
import XCircleIcon from "./XCircleIcon";
import XIcon from "./XIcon";
import EditIcon from "./EditIcon";
import StarFillIcon from "./StarFillIcon";
import StarOutlineIcon from "./StarOutlineIcon";
import ZoomInIcon from "./ZoomInIcon";
import ZoomOutIcon from "./ZoomOutIcon";
import AspectRatioIcon from "./AspectRatioIcon";
import CropPortraitIcon from "./CropPortraitIcon";
import CropLandscapeIcon from "./CropLandscapeIcon";
import CropSquareIcon from "./CropSquareIcon";
import ImagesIcon from "./ImagesIcon";
import PulseRingIcon from "./PulseRingIcon";
import TrashIcon from "./TrashIcon";
import PinFillIcon from "./PinFillIcon";
import PinOutlineIcon from "./PinOutlineIcon";
import LockIcon from "./LockIcon";
import LockOpenIcon from "./LockOpenIcon";
import HomeIcon from "./HomeIcon";
import GroupIcon from "./GroupIcon";
import JoytickIcon from "./JoytickIcon";
import TouchpadMouseIcon from "./TouchpadMouseIcon";
import StarsIcon from "./StarsIcon";
import GalleryIcon from "./GalleryIcon";
import TrophyIcon from "./TrophyIcon";
import TicketIcon from "./TicketIcon";
import MailIcon from "./MailIcon";
import CalendarIcon from "./CalendarIcon";
import LoyaltyIcon from "./LoyaltyIcon";
import TranslateIcon from "./TranslateIcon";
import BlockIcon from "./BlockIcon";
import ReportIcon from "./ReportIcon";

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
        <MoreIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MoreIcon />'}</pre> 
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
      <IconWrapper>
        <DownloadIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<DownloadIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <DragIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<DragIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <GridViewIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<GridViewIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <LinkIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<LinkIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <LogoutIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<LogoutIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <OpenLinkIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<OpenLinkIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PasswordIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PasswordIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <SettingsIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<SettingsIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <EditIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<EditIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <SocialIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<SocialIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <UploadIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<UploadIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ViewListIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ViewListIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <StarFillIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<StarFillIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <StarOutlineIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<StarOutlineIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PinFillIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PinFillIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PinOutlineIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PinOutlineIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ZoomInIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ZoomInIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ZoomOutIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ZoomOutIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <AspectRatioIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<AspectRatioIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CropSquareIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CropSquareIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CropPortraitIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CropPortraitIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CropLandscapeIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CropLandscapeIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ImagesIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ImagesIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <TrashIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<TrashIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <LockIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<LockIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <LockOpenIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<LockOpenIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <PulseRingIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<PulseRingIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <HomeIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<HomeIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <GroupIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<GroupIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <JoytickIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<JoytickIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <TouchpadMouseIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<TouchpadMouseIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <StarsIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<StarsIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <GalleryIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<GalleryIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <TrophyIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<TrophyIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <TicketIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<TicketIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <MailIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<MailIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <CalendarIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<CalendarIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <LoyaltyIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<LoyaltyIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <TranslateIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<TranslateIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <BlockIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<BlockIcon />'}</pre> 
        </div>
      </IconWrapper>
      <IconWrapper>
        <ReportIcon style={{ fontSize: size, color: color }} />
        <div className="text-white text-xs">
          <pre>{'<ReportIcon />'}</pre> 
        </div>
      </IconWrapper>
    </div>
  );
};

export default IconList;