import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Hero/ServicesHero";
import { ItemCard } from "@/components/Card";
import PartnerCTA from "@/components/PartnerCTA";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import Header from "@/components/Header";
import CustomerCTA from "@/components/CustomerCTA";
import { useState } from "react";

const services = [
  {
    heading: "Calibration Services",
    details:
      "Precise calibration to ensure accurate measurements & compliance with standards.",
  },
  {
    heading: "Preventive Maintenance",
    details:
      "Tailored programs with thorough inspections and preventive measures to identify and resolve issues proactively.",
  },
  {
    heading: "Equipment Upgrades",
    details:
      "Guidance and support for healthcare facilities in upgrading medical equipment for enhanced performance and efficiency.",
  },
  {
    heading: "Corrective Maintenance",
    details:
      "Prompt and efficient repairs in the event of equipment failure, restoring optimal functionality.",
  },
  {
    heading: "Compliance and Documentation",
    details:
      "Accurate and comprehensive documentation of maintenance activities to meet regulatory standards.",
  },
  {
    heading: "Training and Support",
    details:
      "Empowering healthcare professionals with knowledge and skills for effective device use and maintenance.",
  },
];

export default function ITSolutions() {
  const [openIndex, setOpenIndex] = useState(null);

  const list = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
        className="bg-white "
      >
        <div className="relative constrained-padded">
          <div className="constrained-padded z-10 absolute w-full h-full py-10 left-0">
            <Header />

            <div className="lg:mt-48 mt-10 text-end">
              <div className="inline-block">
                <div className="flex flex-col gap-y-3">
                  <Link
                    href={"https://twitter.com/alsadaraco"}
                    target="_blank"
                    className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/company/alsadara/"}
                    target="_blank"
                    className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    href={
                      "https://www.instagram.com/alsadaraco?igsh=MXFzejlqaXMxMHlybA=="
                    }
                    target="_blank"
                    className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href={"https://www.facebook.com/hashtag/alsadara/"}
                    target="_blank"
                    className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
                  >
                    <FaFacebook />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="h-screen relative bio-medical-maintenance-hero-bg">
            <div className="relative constrained-padded">
              <div className="flex h-screen justify-center items-center">
                <div className="text-white space-y-6 text-center">
                  <h1 className="font-display font-bold lg:text-5xl text-3xl ">
                    Bio Medical Maintenance
                  </h1>
                  <p className="lg:text-base text-sm max-w-md mx-auto">
                    Excellence in medical device maintenance, trusted for
                    performance and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="constrained-padded py-8 space-y-10">
          <div className="">
            <h3 className="font-display lg:text-2xl text-xl mb-4">
              Bio Medical Maintenance
            </h3>
            <p>
              We&apos;re a leading company specializing in medical device
              maintenance. With skilled technicians, we offer comprehensive
              solutions for optimal performance and reliability. Our commitment
              to excellence has made us a trusted healthcare industry partner.
            </p>
          </div>
          <div className="">
            <h3 className="font-display lg:text-2xl text-xl ">Services</h3>
          </div>
        </div>
        <div className="constrained-padded">
          <div className="mb-20 space-y-4">
            {services.map((service, index) => (
              <Accordion
                key={index}
                index={index}
                openIndex={openIndex}
                service={service}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
        <CustomerCTA />
        <Footer />
      </motion.section>
    </AnimatePresence>
  );
}
