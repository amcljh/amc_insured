export type CarouselItem = {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
}

export type CarouselProps = {
  items: CarouselItem[];
  className?: string;
  style?: React.CSSProperties;
}


