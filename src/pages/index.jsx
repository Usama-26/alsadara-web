import Footer from "@/components/Footer";
import AboutUs from "@/components/Home/Aboutus";
import CTA from "@/components/Home/CTA";
import Hero from "@/components/Home/Hero";
import OurPartners from "@/components/Home/Partners";
import OurProjects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Stats from "@/components/Stats";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Hero />
        <AboutUs />
        <Stats />
        <Services />
        <WhyChooseUs />
        <OurProjects />
        <OurPartners />
        <CTA />
        <Footer padding={"lg:pt-40 pt-20"} />
      </motion.section>
    </AnimatePresence>
  );
}
