import { motion, AnimatePresence } from "framer-motion";

export default function Aboutus() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
        className="bg-white w-screen h-screen"
      ></motion.section>
    </AnimatePresence>
  );
}
