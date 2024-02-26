import { motion, AnimatePresence } from "framer-motion";
import CTA from "@/components/Home/CTA";
import Footer from "@/components/Footer";

import PortfolioHero from "@/components/Hero/PortfolioHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import CustomerCTA from "@/components/CustomerCTA";
export default function Portfolio() {
  const images = Array.from({ length: 13 }, (_, i) => {
    return {
      src: `/images/portfolio/image-${i + 1}.jpg`,
      width: 400,
      height: 400,
      alt: `Image ${i + 1}`,
    };
  });
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
        className="bg-white w-screen h-screen"
      >
        <PortfolioHero />
        <GalleryGrid images={images} />
        <CustomerCTA />
        <Footer />
      </motion.section>
    </AnimatePresence>
  );
}
