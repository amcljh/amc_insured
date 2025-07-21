import { AudioHTMLAttributes, VideoHTMLAttributes } from "react";
import { MediaProps } from "./type";

/**
 * Media component is a wrapper for the media component.
 * Not image, but video, audio, etc.
 */
const Media = ({ src, type, caption, className, style, ...props }: MediaProps) => {
  return (
    <figure className={className} style={style}>
      {type === "video" && <video src={src} autoPlay muted loop {...props as VideoHTMLAttributes<HTMLVideoElement>} />}
      {type === "audio" && <audio src={src} autoPlay muted loop {...props as AudioHTMLAttributes<HTMLAudioElement>} />}
      <figcaption className="sr-only">{caption}</figcaption>
    </figure>
  )
}

export default Media;

