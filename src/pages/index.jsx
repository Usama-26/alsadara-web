import Footer from "@/components/Footer";
import AboutUs from "@/components/Home/Aboutus";
import CTA from "@/components/Home/CTA";
import Hero from "@/components/Home/Hero";
import OurPartners from "@/components/Home/Partners";
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
        transition={{ duration: 3 }}
      >
        <Hero />
        <AboutUs />
        <Stats />
        <Services />
        <WhyChooseUs />
       {/* <OurProjects />*/}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ margin: "50px" }}
          className="lg:py-20"
        >
          <div className="constrained-padded">
            <div className="space-y-2 mb-10">
              <h1 className="font-display lg:text-3xl text-2xl text-center capitalize">
                Geographical Location
              </h1>
            </div>
          </div>
          <div>
            <img src={"/images/home/map.png"} />
          </div>
        </motion.section>
        <OurPartners />
        <CTA />
        <Footer padding={"lg:pt-40 pt-20"} />
      </motion.section>
    </AnimatePresence>
  );
}
