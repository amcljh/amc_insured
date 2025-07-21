import { HeadingProps } from "./type";

const H2 = ({ children, className, style }: HeadingProps) => {
  return <h2 className={`text-2xl font-bold ${className}`} style={style}>{children}</h2>;
};

export default H2;