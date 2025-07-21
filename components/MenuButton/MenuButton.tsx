import { MenuButtonProps } from "./type";
import { useToggle } from "usehankook";

const MenuButton = ({
  children,
  className,
  style,
}: MenuButtonProps) => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <button className={className} style={style} onClick={() => toggleOpen()}
      aria-expanded={isOpen}
      aria-label="Menu"
    >
      {children}
    </button>
  )
}

export default MenuButton;