import { ImgHTMLAttributes } from "react";

export interface PhotoProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}