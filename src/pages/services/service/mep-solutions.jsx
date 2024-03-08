import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Header from "@/components/Header";
import CustomerCTA from "@/components/CustomerCTA";
import { useState } from "react";
import Accordion from "@/components/Accordion";
import Link from "next/link";

const services = [
  {
    heading: "Building and Fabric Maintenance",
    details:
      "Our company offers professional Building and Fabric Maintenance services. We specialize in preserving the structural integrity and aesthetics of buildings and fabrics. Trust us for expert care and maintenance to ensure your property remains in pristine conditio",
  },

  {
    heading: "Building Management System (BMS)",
    details:
      "Our expertise includes the implementation of Building Management Systems (BMS). BMS allows for efficient control and monitoring of building systems, including HVAC, lighting, security, and more. We ensure that your facility operates optimally, enhancing comfort, energy efficiency, and security. Trust us for seamless BMS integration and management.",
  },
  {
    heading: "Security Systems Maintenance",
    details:
      "Our company offers comprehensive security systems maintenance services, covering CCTV, access control, PA (Public Address) systems, and AV (Audio-Visual) systems. We ensure the reliability and effectiveness of your security infrastructure, enhancing safety and peace of mind. Trust us for expert maintenance to keep your systems in top condition.",
  },
  {
    heading: "PV System Installation and Testing",
    details:
      "Our company specializes in the installation and testing of Photovoltaic (PV) systems. We provide expert services to set up solar power systems and rigorously test them to ensure optimal performance and safety. Count on us for reliable PV system installation and thorough testing to harness clean, renewable energy efficiently.",
  },
  {
    heading: "Fire Detection and Protection Systems Maintenance",
    details:
      "Our company offers specialized maintenance services for fire detection and protection systems. We ensure the reliability and functionality of your fire safety equipment, providing peace of mind and enhanced protection. Trust us for expert maintenance to safeguard lives and property.",
  },
  {
    heading: "HVAC and Refrigeration Services",
    details:
      "Our company specializes in Heating, Ventilation, and Air Conditioning (HVAC) and refrigeration services. We provide expert solutions for the installation, maintenance, and repair of HVAC and refrigeration systems. Trust us to keep your indoor environment comfortable and your refrigeration equipment operating efficiently.",
  },
  {
    heading: "Plumbing and Sanitary Systems",
    details:
      "Our company specializes in plumbing and sanitary systems. We offer a comprehensive range of services, including installation, maintenance, and repair of plumbing and sanitary systems. Trust us to ensure the proper functioning and hygiene of your water and sanitation infrastructure.",
  },
  {
    heading: "Water Treatment",
    details:
      "Our company provides comprehensive Water Treatment Solutions. We specialize in treating water to meet quality standards and address specific needs, ensuring safe and efficient water usage for various applications. Count on us for expert water treatment services to safeguard health and resources",
  },
];

export default function MEPSolutions() {
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
        className="bg-white"
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
          <div className="h-screen relative mep-solutions-hero-bg">
            <div className="relative constrained-padded">
              <div className="flex h-screen justify-center items-center">
                <div className="text-white space-y-6 text-center">
                  <h1 className="font-display font-bold lg:text-5xl text-3xl ">
                    MEP Solutions
                  </h1>
                  <p className="lg:text-base text-sm max-w-md mx-auto">
                    alsadara, delivers end-to-end MEP solutions across various
                    sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="constrained-padded py-10 space-y-10">
          <div className="">
            <h3 className="font-display lg:text-2xl text-xl mb-4">
              MEP Solutions
            </h3>
            <p>
              alsadara MEP, our subsidiary, specializes in delivering
              high-quality services across multiple sectors. We excel in the
              design, engineering, supply, installation, and commissioning of
              all Mechanical, Electrical, and Plumbing (MEP) works. Our
              expertise spans industrial, commercial, residential, tower, and
              hospital projects, ensuring seamless MEP solutions for a wide
              range of needs.
            </p>
          </div>
          <div className="">
            <h3 className="font-display lg:text-2xl text-xl">Services</h3>
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
