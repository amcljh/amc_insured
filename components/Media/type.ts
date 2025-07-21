import { HTMLAttributes } from "react";

export interface MediaProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  type: "video" | "audio";
  caption?: string;
}