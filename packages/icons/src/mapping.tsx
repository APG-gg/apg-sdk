
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
import IconTwitterCircle from '@apg.gg/icons/lib/IconTwitterCircle';
import IconWildRiftLogo from '@apg.gg/icons/lib/IconWildRiftLogo';

    function getComponentByName(name: string) {
      switch (name) {
        case "apglogo": return <IconApgLogo />;
case "apglogofull": return <IconApgLogoFull />;
case "baron": return <IconBaron />;
case "discord": return <IconDiscord />;
case "drake": return <IconDrake />;
case "drakecloud": return <IconDrakeCloud />;
case "drakeinfernal": return <IconDrakeInfernal />;
case "drakemountain": return <IconDrakeMountain />;
case "drakeocean": return <IconDrakeOcean />;
case "facebook": return <IconFacebook />;
case "firstblood": return <IconFirstBlood />;
case "hamburger": return <IconHamburger />;
case "herald": return <IconHerald />;
case "instagram": return <IconInstagram />;
case "kills": return <IconKills />;
case "lanebottom": return <IconLaneBottom />;
case "lanejungle": return <IconLaneJungle />;
case "lanemid": return <IconLaneMid />;
case "lanesupport": return <IconLaneSupport />;
case "lanetop": return <IconLaneTop />;
case "logout": return <IconLogout />;
case "settings": return <IconSettings />;
case "turret": return <IconTurret />;
case "turretblue": return <IconTurretBlue />;
case "turretred": return <IconTurretRed />;
case "twitter": return <IconTwitter />;
case "twittercircle": return <IconTwitterCircle />;
case "wildriftlogo": return <IconWildRiftLogo />;
        default: return null;
      }
    }

    export default getComponentByName;
  