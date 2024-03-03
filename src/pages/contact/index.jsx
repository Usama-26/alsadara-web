import { motion, AnimatePresence } from "framer-motion";
import CTA from "@/components/Home/CTA";
import Footer from "@/components/Footer";
import ContactusHero from "@/components/Hero/ContactusHero";
export default function Contactus() {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
        className="bg-white"
      >
        <ContactusHero />

        <div className="lg:-translate-y-40 -translate-y-20">
          <CTA />
        </div>
        <div className="constrained-padded my-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.435124142824!2d46.727148299999996!3d24.746265999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f026ae2c5f49f%3A0xd8ca7937fd8d1004!2sAl%20Sadara%2C%20King%20Abdullah%20Dt.%2C%20Riyadh%2012451%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1708966668593!5m2!1sen!2s"
            className="w-full h-96 border-0 rounded-2xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Footer />
      </motion.section>
    </AnimatePresence>
  );
}
