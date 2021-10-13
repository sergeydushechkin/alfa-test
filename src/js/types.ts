interface CardData {
  title: string;
  explanation: string;
  thumbnail: string;
  href: string;
  type: string;
  isLiked: boolean;
}

interface RowCard {
  date: string;
  explanation: string;
  [`media_type`]: string;
  [`service_version`]: string;
  [`thumbnail_url`]?: string;
  title: string;
  url: string;
  hdurl?: string
}

export {CardData, RowCard};
