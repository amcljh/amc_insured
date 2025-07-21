import { ButtonHTMLAttributes } from "react";

export interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}