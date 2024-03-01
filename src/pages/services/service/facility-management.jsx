import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Hero/ServicesHero";
import { ItemCard } from "@/components/Card";
import PartnerCTA from "@/components/PartnerCTA";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import Header from "@/components/Header";
import CustomerCTA from "@/components/CustomerCTA";
import { useState } from "react";

const services = [
  {
    heading: "Hospitality Solutions",
    details:
      "We elevate guest experiences with top-notch hospitality solutions, ensuring satisfaction and memorable stays.",
  },
  {
    heading: "Housekeeping Solutions",
    details:
      "We offer tailored Housekeeping Solutions for a spotless, organized, and inviting space. Trust us for a clean, comfortable environment.",
  },
  {
    heading: "Integrated Facility Management Services",
    details:
      "We specialize in Integrated Facility Management, handling operations, maintenance, security, and sustainability. Trust us for efficient, cost-effective, and comprehensive facility care.",
  },
];

export default function FacilityManagement() {
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
          <div className="h-screen relative facility-management-hero-bg">
            <div className="relative constrained-padded">
              <div className="flex h-screen justify-center items-center">
                <div className="text-white space-y-6 text-center">
                  <h1 className="font-display font-bold lg:text-5xl text-3xl ">
                    Facility Management
                  </h1>
                  <p className="lg:text-base text-sm max-w-md mx-auto">
                    alsadara, Delivering excellence in Asset Management with
                    ethical operations and tailored solutions for unparalleled
                    client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="constrained-padded py-8 space-y-10">
          <div className="">
            <h3 className="font-display lg:text-2xl text-xl mb-4">
              Facility Management
            </h3>
            <p>
              alsadara is dedicated to exceptional services, project success,
              client satisfaction, and value for money. Specializing in Asset
              Management, we operate ethically with unwavering principles. From
              strategic development to operational management, we customize
              plans to meet client needs. As a leading Facilities Management
              partner, we excel in diverse requirements.
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
