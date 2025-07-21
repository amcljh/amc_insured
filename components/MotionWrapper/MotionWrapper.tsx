import { motion, MotionProps } from "framer-motion";

const MotionWrapper = ({ children, ...props }: { children: React.ReactNode } & MotionProps) => {
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  )
}

export default MotionWrapper;