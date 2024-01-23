export const socialMediaUrls = {
  twitter: 'https://www.twitter.com/',
  instagram: 'https://www.instagram.com/',
  youtube: 'https://www.youtube.com/',
  tiktok: 'https://www.tiktok.com/@',
  twitch: 'https://www.twitch.tv/',
  kick: 'https://www.kick.com/',
  threads: 'https://www.threads.com/',
  facebook: 'https://www.facebook.com/',
  hoyolab: '',
  patreon: '',
  cafecito: '',
  kofi: '',
  paypal: '',
  amazon: '',
  discord: '',
  website: '',
  mail: 'mailto:',
  epic: '',
  riot: '',
};

const enhanceSocialMediaLink = (socialMedia: string, link: string, validDomains: string[]): string => {
  let linkParsed = link;

  // Check if link contains any of the valid domains
  const containsValidDomain = validDomains.some(domain => link.includes(domain));
  if (containsValidDomain) {
    // If link does not start with 'https://', prepend it
    if (!link.startsWith('https://')) {
      linkParsed = 'https://' + link;
    }
  } else {
    // If link does not contain any domain and has only 1 object when split by '/',
    // prepend 'https://' and the first valid domain
    const splitLink = link.split('/');
    if (splitLink.length === 1) {
      linkParsed = `https://${validDomains[0]}/${link}`;
    }
  }

  return linkParsed;
};

const generateSocialMediaLink = (socialMedia: string, link: string): string => {
  if (
    socialMedia === 'discord' || 
    socialMedia === 'website' || 
    socialMedia === 'epic' || 
    socialMedia === 'riot' ||
    socialMedia === 'hoyolab' ||
    socialMedia === 'patreon' ||
    socialMedia === 'cafecito' ||
    socialMedia === 'kofi' ||
    socialMedia === 'paypal' ||
    socialMedia === 'amazon'
  ) {
    let linkParsed = link;

    switch (socialMedia) {
      case 'paypal':
        linkParsed = enhanceSocialMediaLink(socialMedia, link, ['paypal.com', 'paypal.me']);
        break;
      case 'kofi':
        linkParsed = enhanceSocialMediaLink(socialMedia, link, ['ko-fi.com']);
        break;
      case 'patreon':
        linkParsed = enhanceSocialMediaLink(socialMedia, link, ['patreon.com']);
        break;
      case 'amazon':
        linkParsed = enhanceSocialMediaLink(socialMedia, link, ['amazon.com']);
        break;
      case 'cafecito':
        linkParsed = enhanceSocialMediaLink(socialMedia, link, ['cafecito.app']);
        break;
      case 'hoyolab':
        linkParsed = enhanceSocialMediaLink(socialMedia, link, ['hoyolab.com']);
        break;
      default: 
        linkParsed = link;
        break;
    }

    return linkParsed;
  } else {
    // Para otras redes sociales, concatenamos el usuario con la URL base
    const baseUrl = socialMediaUrls[socialMedia as keyof typeof socialMediaUrls];
    let linkParsed = link;

    switch (socialMedia) {
      case 'twitter':
      case 'instagram':
      case 'youtube':
      case 'tiktok':
      case 'twitch':
      case 'kick':
      case 'threads':
      case 'facebook':
        linkParsed = link.replace('@', '');
        break;
      default: 
        linkParsed = link;
        break;
    }

    return `${baseUrl}${linkParsed}`;
  }
}

export default generateSocialMediaLink;