import { HeadingProps } from "./type";

const H1 = ({ children, className, style }: HeadingProps) => {
  return <h1 className={`text-4xl font-bold ${className}`} style={style}>{children}</h1>;
};

export default H1;