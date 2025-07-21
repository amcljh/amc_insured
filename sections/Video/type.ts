export type VideoProps = {
  className?: string;
  style?: React.CSSProperties;
  video: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  preload?: "auto" | "metadata" | "none";
}