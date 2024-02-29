import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Header from "@/components/Header";
import CustomerCTA from "@/components/CustomerCTA";
import { useState } from "react";
import Accordion from "@/components/Accordion";
import Link from "next/link";

const services = [
  {
    heading: "High-Voltage Power Solutions",
    details:
      "Specializing in 13.8kV / 33kV electrical reticulation, transformers, and RMU installations.",
  },

  {
    heading: "240V / 400V Complete Electrical Installations",
    details:
      "Comprehensive installations covering low-voltage (240V) to medium-voltage (400V)",
  },
  {
    heading: "Servicing & Maintenance",
    details: "General servicing for safe and efficient commercial properties.",
  },
  {
    heading: "Lightning & Surge Protection",
    details:
      "Expertise in lightning and surge protection, offering testing, design, and installation services.",
  },
  {
    heading: "Full Electrical Construction Services",
    details:
      "End-to-end electrical construction services, handling design, installation, testing, and certification for a seamless and compliant outcome.",
  },
  {
    heading: "Cable splicing (Joint) and Terminations    ",
    details:
      "We offer professional cable jointing and termination services, including both hot and cold methods, to ensure reliable and efficient power transmission. Our skilled technicians excel in preparing, connecting, insulating, and testing electrical cables for optimal performance and durability.",
  },
  {
    heading: "Busbar Installations",
    details:
      "Comprehensive training sessions covering a wide range of electrical topics.",
  },
  {
    heading: "Single Phase to Masters Compliance Certificates (CoC’s)",
    details:
      "Providing compliance certificates for single-phase and master electrical systems, ensuring regulatory standards and operational safety.",
  },
];

export default function ElectricalInstallation() {
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
        className="bg-white w-screen h-screen"
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="h-screen relative electrical-installation-hero-bg">
            <div className="relative constrained-padded">
              <div className="flex h-screen justify-center items-center">
                <div className="text-white space-y-6 text-center">
                  <h1 className="font-display font-bold lg:text-5xl text-3xl ">
                    Electrical Installation
                  </h1>
                  <p className="lg:text-base text-sm max-w-md mx-auto">
                    Shaping the future of global energy systems with a{" "}
                    <br className="hidden lg:block" /> decade of power system
                    expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="constrained-padded py-10 space-y-10">
          <div className="">
            <h3 className="font-display lg:text-2xl text-sm max-w-3xl">
              Electrical Installation
            </h3>
            <p>
              Improper installation poses safety risks and reduces
              functionality. alsadara excels in industry-leading electrical
              installations, prioritizing safety and efficiency in every
              project.
            </p>
          </div>
          <div className="">
            <h3 className="font-display lg:text-2xl text-sm max-w-3xl">
              Services
            </h3>
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
