import moment from 'moment';

export default function getRelativeTime(dateString: string): string {
  const date = moment(dateString);
  const now = moment();
  const diff = now.diff(date, "seconds");
  let result = "";

  result = diff < 60 ? `${diff} second${diff === 1 ? "" : "s"} ago` 
          : diff < 3600 ? `${Math.floor(diff / 60)} minute${Math.floor(diff / 60) === 1 ? "" : "s"} ago`
          : diff < 86400 && !date.isSame(now, "day") ? `${Math.floor(diff / 3600)} hour${Math.floor(diff / 3600) === 1 ? "" : "s"} ago`
          : diff < 604800 ? `${Math.floor(diff / 86400)} day${Math.floor(diff / 86400) === 1 ? "" : "s"} ago`
          : diff < 2592000 ? `${Math.floor(diff / 604800)} week${Math.floor(diff / 604800) === 1 ? "" : "s"} ago`
          : diff < 31536000 ? `${Math.floor(diff / 2592000)} month${Math.floor(diff / 2592000) === 1 ? "" : "s"} ago`
          : `${Math.floor(diff / 31536000)} year${Math.floor(diff / 31536000) === 1 ? "" : "s"} ago`;

  return result;
}
