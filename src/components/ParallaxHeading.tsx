import { useScroll, useTransform, motion } from "framer-motion";

const ParallaxHeading = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]); // scroll 0-500px -> move -50px

  return (
    <motion.h2 style={{ y }} className="text-4xl font-bold text-center mb-8">
      Projects
    </motion.h2>
  );
};
export default ParallaxHeading;