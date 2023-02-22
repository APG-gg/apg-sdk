
    import React from 'react';
    import IconApgLogo from '@apg.gg/icons/lib/IconApgLogo';
import IconApgLogoFull from '@apg.gg/icons/lib/IconApgLogoFull';
import IconBaron from '@apg.gg/icons/lib/IconBaron';
import IconDiscord from '@apg.gg/icons/lib/IconDiscord';
import IconDrake from '@apg.gg/icons/lib/IconDrake';
import IconDrakeCloud from '@apg.gg/icons/lib/IconDrakeCloud';
import IconDrakeInfernal from '@apg.gg/icons/lib/IconDrakeInfernal';
import IconDrakeMountain from '@apg.gg/icons/lib/IconDrakeMountain';
import IconDrakeOcean from '@apg.gg/icons/lib/IconDrakeOcean';
import IconFacebook from '@apg.gg/icons/lib/IconFacebook';
import IconFirstBlood from '@apg.gg/icons/lib/IconFirstBlood';
import IconHamburger from '@apg.gg/icons/lib/IconHamburger';
import IconHerald from '@apg.gg/icons/lib/IconHerald';
import IconInstagram from '@apg.gg/icons/lib/IconInstagram';
import IconKills from '@apg.gg/icons/lib/IconKills';
import IconLaneBottom from '@apg.gg/icons/lib/IconLaneBottom';
import IconLaneJungle from '@apg.gg/icons/lib/IconLaneJungle';
import IconLaneMid from '@apg.gg/icons/lib/IconLaneMid';
import IconLaneSupport from '@apg.gg/icons/lib/IconLaneSupport';
import IconLaneTop from '@apg.gg/icons/lib/IconLaneTop';
import IconLogout from '@apg.gg/icons/lib/IconLogout';
import IconSettings from '@apg.gg/icons/lib/IconSettings';
import IconTurret from '@apg.gg/icons/lib/IconTurret';
import IconTurretBlue from '@apg.gg/icons/lib/IconTurretBlue';
import IconTurretRed from '@apg.gg/icons/lib/IconTurretRed';
import IconTwitter from '@apg.gg/icons/lib/IconTwitter';
import IconWildRiftLogo from '@apg.gg/icons/lib/IconWildRiftLogo';
import NavigateNextIcon from '@apg.gg/icons/lib/NavigateNextIcon';
import NavigatePrevIcon from '@apg.gg/icons/lib/NavigatePrevIcon';
import VerifiedIcon from '@apg.gg/icons/lib/VerifiedIcon';

    function getComponentByName(name: string, className: string) {
      switch (name) {
        case "apgLogo": return <IconApgLogo className={className} />;
case "apgLogoFull": return <IconApgLogoFull className={className} />;
case "baron": return <IconBaron className={className} />;
case "discord": return <IconDiscord className={className} />;
case "drake": return <IconDrake className={className} />;
case "drakeCloud": return <IconDrakeCloud className={className} />;
case "drakeInfernal": return <IconDrakeInfernal className={className} />;
case "drakeMountain": return <IconDrakeMountain className={className} />;
case "drakeOcean": return <IconDrakeOcean className={className} />;
case "facebook": return <IconFacebook className={className} />;
case "firstBlood": return <IconFirstBlood className={className} />;
case "hamburger": return <IconHamburger className={className} />;
case "herald": return <IconHerald className={className} />;
case "instagram": return <IconInstagram className={className} />;
case "kills": return <IconKills className={className} />;
case "laneBottom": return <IconLaneBottom className={className} />;
case "laneJungle": return <IconLaneJungle className={className} />;
case "laneMid": return <IconLaneMid className={className} />;
case "laneSupport": return <IconLaneSupport className={className} />;
case "laneTop": return <IconLaneTop className={className} />;
case "logout": return <IconLogout className={className} />;
case "settings": return <IconSettings className={className} />;
case "turret": return <IconTurret className={className} />;
case "turretBlue": return <IconTurretBlue className={className} />;
case "turretRed": return <IconTurretRed className={className} />;
case "twitter": return <IconTwitter className={className} />;
case "wildRiftLogo": return <IconWildRiftLogo className={className} />;
case "navigateNext": return <NavigateNextIcon className={className} />;
case "navigatePrev": return <NavigatePrevIcon className={className} />;
case "verified": return <VerifiedIcon className={className} />;
        default: return null;
      }
    }

    export default getComponentByName;
  