import { isSameDay } from 'date-fns';

export default function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let result = "";

  result = diffInSeconds < 60
    ? `${diffInSeconds} second${diffInSeconds === 1 ? "" : "s"} ago`
    : diffInSeconds < 3600
    ? `${Math.floor(diffInSeconds / 60)} minute${Math.floor(diffInSeconds / 60) === 1 ? "" : "s"} ago`
    : diffInSeconds < 86400 && !isSameDay(date, now)
    ? `${Math.floor(diffInSeconds / 3600)} hour${Math.floor(diffInSeconds / 3600) === 1 ? "" : "s"} ago`
    : diffInSeconds < 604800
    ? `${Math.floor(diffInSeconds / 86400)} day${Math.floor(diffInSeconds / 86400) === 1 ? "" : "s"} ago`
    : diffInSeconds < 2592000
    ? `${Math.floor(diffInSeconds / 604800)} week${Math.floor(diffInSeconds / 604800) === 1 ? "" : "s"} ago`
    : diffInSeconds < 31536000
    ? `${Math.floor(diffInSeconds / 2592000)} month${Math.floor(diffInSeconds / 2592000) === 1 ? "" : "s"} ago`
    : `${Math.floor(diffInSeconds / 31536000)} year${Math.floor(diffInSeconds / 31536000) === 1 ? "" : "s"} ago`;

  return result;
}
