import { motion, AnimatePresence } from "framer-motion";
import CTA from "@/components/Home/CTA";
import Footer from "@/components/Footer";
import PartnerHero from "@/components/Hero/PartnerHero";
export default function Partner() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
        className="bg-white w-screen h-screen"
      >
        <PartnerHero />
        <div className="constrained-padded flex">
          <div className="py-10">
            <h3 className="font-display lg:text-xl text-sm max-w-3xl">
              To become a partner with us, you need to download the given files
              read it carefully and then submit it here:
            </h3>
          </div>
        </div>
        <div className="constrained-padded flex lg:translate-y-40 translate-y-20">
          <h3 className="font-display lg:text-xl text-sm">
            For any query, please feel free to contact us
          </h3>
        </div>
        <CTA />
        <Footer />
      </motion.section>
    </AnimatePresence>
  );
}
