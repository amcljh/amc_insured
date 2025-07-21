import { HTMLAttributes } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}