import { InputHTMLAttributes } from "react";

export interface NumericInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}