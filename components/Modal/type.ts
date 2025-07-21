import { DialogHTMLAttributes } from "react";

export interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  children: React.ReactNode;
}