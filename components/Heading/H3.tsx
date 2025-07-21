import { HeadingProps } from "./type";

const H3 = ({ children, className, style }: HeadingProps) => {
  return <h3 className={`text-xl font-bold ${className}`} style={style}>{children}</h3>;
};

export default H3;