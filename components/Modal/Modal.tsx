import { ModalProps } from "./type";
import { useToggle } from "usehankook";

/**
 * Modal component is a wrapper for the modal component.
 * It is a dialog element that can be opened and closed.
 */
const Modal = ({
  children,
  className,
  style,
  ...props
}: ModalProps) => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <dialog className={className} style={style}
      open={isOpen}
      onClose={() => toggleOpen()}
      {...props}
    >
      {children}
    </dialog>
  )
}

export default Modal;