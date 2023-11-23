export const socialMediaUrls = {
  twitter: 'https://www.twitter.com/',
  instagram: 'https://www.instagram.com/',
  youtube: 'https://www.youtube.com/',
  tiktok: 'https://www.tiktok.com/@',
  twitch: 'https://www.twitch.tv/',
  kick: 'https://www.kick.com/',
  threads: 'https://www.threads.com/',
  discord: '',
  website: '',
  mail: 'mailto:',
  epic: '',
  riot: '',
};

const generateSocialMediaLink = (socialMedia: string, link: string): string => {
  if (socialMedia === 'discord' || socialMedia === 'website' || socialMedia === 'epic' || socialMedia === 'riot') {
    // Para Discord, simplemente copiamos el valor del usuario
    return link;
  } else {
    // Para otras redes sociales, concatenamos el usuario con la URL base
    const baseUrl = socialMediaUrls[socialMedia as keyof typeof socialMediaUrls];
    return `${baseUrl}${link}`;
  }
}

export default generateSocialMediaLink;