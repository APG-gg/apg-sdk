
    import React from 'react';
    import ApgIcon from '@apg.gg/icons/lib/ApgIcon';
import ArrowDownIcon from '@apg.gg/icons/lib/ArrowDownIcon';
import ArrowLeftIcon from '@apg.gg/icons/lib/ArrowLeftIcon';
import ArrowRightIcon from '@apg.gg/icons/lib/ArrowRightIcon';
import ArrowUpIcon from '@apg.gg/icons/lib/ArrowUpIcon';
import AspectRatioIcon from '@apg.gg/icons/lib/AspectRatioIcon';
import BetaColorIcon from '@apg.gg/icons/lib/BetaColorIcon';
import CommentIcon from '@apg.gg/icons/lib/CommentIcon';
import CropLandscapeIcon from '@apg.gg/icons/lib/CropLandscapeIcon';
import CropPortraitIcon from '@apg.gg/icons/lib/CropPortraitIcon';
import CropSquareIcon from '@apg.gg/icons/lib/CropSquareIcon';
import DiscordIcon from '@apg.gg/icons/lib/DiscordIcon';
import DownloadIcon from '@apg.gg/icons/lib/DownloadIcon';
import DragIcon from '@apg.gg/icons/lib/DragIcon';
import EditIcon from '@apg.gg/icons/lib/EditIcon';
import EpicIcon from '@apg.gg/icons/lib/EpicIcon';
import ErrorIcon from '@apg.gg/icons/lib/ErrorIcon';
import FacebookIcon from '@apg.gg/icons/lib/FacebookIcon';
import GithubIcon from '@apg.gg/icons/lib/GithubIcon';
import GoogleIcon from '@apg.gg/icons/lib/GoogleIcon';
import GridViewIcon from '@apg.gg/icons/lib/GridViewIcon';
import HeartIcon from '@apg.gg/icons/lib/HeartIcon';
import IconApgLogo from '@apg.gg/icons/lib/IconApgLogo';
import IconApgLogoFull from '@apg.gg/icons/lib/IconApgLogoFull';
import IconBaron from '@apg.gg/icons/lib/IconBaron';
import IconDrake from '@apg.gg/icons/lib/IconDrake';
import IconDrakeCloud from '@apg.gg/icons/lib/IconDrakeCloud';
import IconDrakeInfernal from '@apg.gg/icons/lib/IconDrakeInfernal';
import IconDrakeMountain from '@apg.gg/icons/lib/IconDrakeMountain';
import IconDrakeOcean from '@apg.gg/icons/lib/IconDrakeOcean';
import IconFirstBlood from '@apg.gg/icons/lib/IconFirstBlood';
import IconHamburger from '@apg.gg/icons/lib/IconHamburger';
import IconHerald from '@apg.gg/icons/lib/IconHerald';
import IconKills from '@apg.gg/icons/lib/IconKills';
import IconLaneBottom from '@apg.gg/icons/lib/IconLaneBottom';
import IconLaneJungle from '@apg.gg/icons/lib/IconLaneJungle';
import IconLaneMid from '@apg.gg/icons/lib/IconLaneMid';
import IconLaneSupport from '@apg.gg/icons/lib/IconLaneSupport';
import IconLaneTop from '@apg.gg/icons/lib/IconLaneTop';
import IconTurret from '@apg.gg/icons/lib/IconTurret';
import IconTurretBlue from '@apg.gg/icons/lib/IconTurretBlue';
import IconTurretRed from '@apg.gg/icons/lib/IconTurretRed';
import IconWildRiftLogo from '@apg.gg/icons/lib/IconWildRiftLogo';
import ImagesIcon from '@apg.gg/icons/lib/ImagesIcon';
import InstagramIcon from '@apg.gg/icons/lib/InstagramIcon';
import KickIcon from '@apg.gg/icons/lib/KickIcon';
import LinkIcon from '@apg.gg/icons/lib/LinkIcon';
import LogoutIcon from '@apg.gg/icons/lib/LogoutIcon';
import MenuIcon from '@apg.gg/icons/lib/MenuIcon';
import MenuOpenIcon from '@apg.gg/icons/lib/MenuOpenIcon';
import MoreVerticalIcon from '@apg.gg/icons/lib/MoreVerticalIcon';
import NavigateNextIcon from '@apg.gg/icons/lib/NavigateNextIcon';
import NavigatePrevIcon from '@apg.gg/icons/lib/NavigatePrevIcon';
import OpenLinkIcon from '@apg.gg/icons/lib/OpenLinkIcon';
import PasswordIcon from '@apg.gg/icons/lib/PasswordIcon';
import PersonIcon from '@apg.gg/icons/lib/PersonIcon';
import PlusIcon from '@apg.gg/icons/lib/PlusIcon';
import PulseRingIcon from '@apg.gg/icons/lib/PulseRingIcon';
import RiotIcon from '@apg.gg/icons/lib/RiotIcon';
import SearchIcon from '@apg.gg/icons/lib/SearchIcon';
import SettingsIcon from '@apg.gg/icons/lib/SettingsIcon';
import ShareIcon from '@apg.gg/icons/lib/ShareIcon';
import SocialIcon from '@apg.gg/icons/lib/SocialIcon';
import SortIcon from '@apg.gg/icons/lib/SortIcon';
import StarFillIcon from '@apg.gg/icons/lib/StarFillIcon';
import StarOutlineIcon from '@apg.gg/icons/lib/StarOutlineIcon';
import SteamIcon from '@apg.gg/icons/lib/SteamIcon';
import TelegramIcon from '@apg.gg/icons/lib/TelegramIcon';
import ThreadsIcon from '@apg.gg/icons/lib/ThreadsIcon';
import TiktokIcon from '@apg.gg/icons/lib/TiktokIcon';
import TrashIcon from '@apg.gg/icons/lib/TrashIcon';
import TwitchIcon from '@apg.gg/icons/lib/TwitchIcon';
import TwitterIcon from '@apg.gg/icons/lib/TwitterIcon';
import UploadIcon from '@apg.gg/icons/lib/UploadIcon';
import VerifiedColorIcon from '@apg.gg/icons/lib/VerifiedColorIcon';
import VerifiedIcon from '@apg.gg/icons/lib/VerifiedIcon';
import ViewListIcon from '@apg.gg/icons/lib/ViewListIcon';
import VisibilityIcon from '@apg.gg/icons/lib/VisibilityIcon';
import VisibilityOffIcon from '@apg.gg/icons/lib/VisibilityOffIcon';
import XboxIcon from '@apg.gg/icons/lib/XboxIcon';
import XCircleIcon from '@apg.gg/icons/lib/XCircleIcon';
import XIcon from '@apg.gg/icons/lib/XIcon';
import YoutubeIcon from '@apg.gg/icons/lib/YoutubeIcon';
import ZoomInIcon from '@apg.gg/icons/lib/ZoomInIcon';
import ZoomOutIcon from '@apg.gg/icons/lib/ZoomOutIcon';

    function getComponentByName(name: string, className: string) {
      switch (name) {
        case "apg": return <ApgIcon className={className} />;
case "arrowDown": return <ArrowDownIcon className={className} />;
case "arrowLeft": return <ArrowLeftIcon className={className} />;
case "arrowRight": return <ArrowRightIcon className={className} />;
case "arrowUp": return <ArrowUpIcon className={className} />;
case "aspectRatio": return <AspectRatioIcon className={className} />;
case "betaColor": return <BetaColorIcon className={className} />;
case "comment": return <CommentIcon className={className} />;
case "cropLandscape": return <CropLandscapeIcon className={className} />;
case "cropPortrait": return <CropPortraitIcon className={className} />;
case "cropSquare": return <CropSquareIcon className={className} />;
case "discord": return <DiscordIcon className={className} />;
case "download": return <DownloadIcon className={className} />;
case "drag": return <DragIcon className={className} />;
case "edit": return <EditIcon className={className} />;
case "epic": return <EpicIcon className={className} />;
case "error": return <ErrorIcon className={className} />;
case "facebook": return <FacebookIcon className={className} />;
case "github": return <GithubIcon className={className} />;
case "google": return <GoogleIcon className={className} />;
case "gridView": return <GridViewIcon className={className} />;
case "heart": return <HeartIcon className={className} />;
case "apgLogo": return <IconApgLogo className={className} />;
case "apgLogoFull": return <IconApgLogoFull className={className} />;
case "baron": return <IconBaron className={className} />;
case "drake": return <IconDrake className={className} />;
case "drakeCloud": return <IconDrakeCloud className={className} />;
case "drakeInfernal": return <IconDrakeInfernal className={className} />;
case "drakeMountain": return <IconDrakeMountain className={className} />;
case "drakeOcean": return <IconDrakeOcean className={className} />;
case "firstBlood": return <IconFirstBlood className={className} />;
case "hamburger": return <IconHamburger className={className} />;
case "herald": return <IconHerald className={className} />;
case "kills": return <IconKills className={className} />;
case "laneBottom": return <IconLaneBottom className={className} />;
case "laneJungle": return <IconLaneJungle className={className} />;
case "laneMid": return <IconLaneMid className={className} />;
case "laneSupport": return <IconLaneSupport className={className} />;
case "laneTop": return <IconLaneTop className={className} />;
case "turret": return <IconTurret className={className} />;
case "turretBlue": return <IconTurretBlue className={className} />;
case "turretRed": return <IconTurretRed className={className} />;
case "wildRiftLogo": return <IconWildRiftLogo className={className} />;
case "images": return <ImagesIcon className={className} />;
case "instagram": return <InstagramIcon className={className} />;
case "kick": return <KickIcon className={className} />;
case "link": return <LinkIcon className={className} />;
case "logout": return <LogoutIcon className={className} />;
case "menu": return <MenuIcon className={className} />;
case "menuOpen": return <MenuOpenIcon className={className} />;
case "moreVertical": return <MoreVerticalIcon className={className} />;
case "navigateNext": return <NavigateNextIcon className={className} />;
case "navigatePrev": return <NavigatePrevIcon className={className} />;
case "openLink": return <OpenLinkIcon className={className} />;
case "password": return <PasswordIcon className={className} />;
case "person": return <PersonIcon className={className} />;
case "plus": return <PlusIcon className={className} />;
case "pulseRing": return <PulseRingIcon className={className} />;
case "riot": return <RiotIcon className={className} />;
case "search": return <SearchIcon className={className} />;
case "settings": return <SettingsIcon className={className} />;
case "share": return <ShareIcon className={className} />;
case "social": return <SocialIcon className={className} />;
case "sort": return <SortIcon className={className} />;
case "starFill": return <StarFillIcon className={className} />;
case "starOutline": return <StarOutlineIcon className={className} />;
case "steam": return <SteamIcon className={className} />;
case "telegram": return <TelegramIcon className={className} />;
case "threads": return <ThreadsIcon className={className} />;
case "tiktok": return <TiktokIcon className={className} />;
case "trash": return <TrashIcon className={className} />;
case "twitch": return <TwitchIcon className={className} />;
case "twitter": return <TwitterIcon className={className} />;
case "upload": return <UploadIcon className={className} />;
case "verifiedColor": return <VerifiedColorIcon className={className} />;
case "verified": return <VerifiedIcon className={className} />;
case "viewList": return <ViewListIcon className={className} />;
case "visibility": return <VisibilityIcon className={className} />;
case "visibilityOff": return <VisibilityOffIcon className={className} />;
case "xbox": return <XboxIcon className={className} />;
case "xCircle": return <XCircleIcon className={className} />;
case "x": return <XIcon className={className} />;
case "youtube": return <YoutubeIcon className={className} />;
case "zoomIn": return <ZoomInIcon className={className} />;
case "zoomOut": return <ZoomOutIcon className={className} />;
        default: return null;
      }
    }

    export default getComponentByName;
  