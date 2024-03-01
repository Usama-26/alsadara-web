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
    heading: "Subcontractor Management",
    details:
      "alsadara ensures efficient subcontractor management, guaranteeing quality alignment for projects. Trust us for reliable solutions.",
  },

  {
    heading: "Power Factor Correction",
    details:
      "We focus on power factor correction for enhanced energy efficiency and reduced operational costs.",
  },
  {
    heading: "Plant Outages, Turnaround Management, and Execution",
    details:
      "alsadara excels in efficiently planning and executing industrial plant outages, ensuring optimal performance and minimal downtime. Trust Alsadara for expert turnaround solutions.",
  },
  {
    heading: "AC Motor Maintenance",
    details:
      "The scope of work for AC motor maintenance at a site typically includes the following tasks: Visual Inspection, Lubrication, Replacement of Components, Cleaning, Mechanical Testing, Alignment and Balancing, Electrical Testing,Tightening and Fastening,Performance Optimization, Documentation and Reporting.",
  },
  {
    heading: "UPS and Batteries",
    details:
      "We have specialized team for Maintenance of UPS, DC charging systems & Batteries, UPS Troubleshooting /feasibilities, installation, Testing & Commissioning",
  },
  {
    heading: "Preventive Maintenance ",
    details:
      "We implement preventive maintenance programs to proactively identify and address issues, ensuring the continuous and efficient operation of your assets.",
  },
  {
    heading: "Asset Maintenance Strategy",
    details:
      "alsadara helps you develop and implement effective asset maintenance strategies, aligning maintenance efforts with your business goals and operational needs.",
  },
  {
    heading: "Zero hours’ maintenance (overhaul)",
    details:
      "We offer zero-hours maintenance services, including complete overhauls of equipment and systems, ensuring they operate at peak performance.",
  },
  {
    heading: "Detailed Planning Estimating & Scheduling",
    details:
      "alsadara provides precise planning, cost estimation, and scheduling services for efficient project management. Specializing in power-saving studies and solutions, Alsadara helps reduce energy consumption and operational costs.",
  },
  {
    heading: "Power Saving Studies & Solutions",
    details:
      "alsadara specializes in power saving studies and solutions, helping you reduce energy consumption and lower operational costs.",
  },
  {
    heading: "Materials Planning and Optimization",
    details:
      "alsadara streamlines inventory management, reduces costs, and ensures material availability through planning and optimization services.",
  },
  {
    heading: "Multi-discipline Maintenance Execution",
    details:
      "Alsadara offers diverse maintenance execution for efficient and reliable facility operation.",
  },
  {
    heading: "Specialty Operations Maintenance Services",
    details:
      "We excel in specialized operations maintenance, offering tailored solutions for unique challenges to ensure equipment and systems' reliability and efficiency. Trust Alsadara for expert support in maintaining smooth operations.",
  },
  {
    heading: "Maintenance Performance &Productivity Analysis and Reporting",
    details:
      "Our experts analyse maintenance performance and productivity, providing detailed reports and insights to optimize your maintenance strategies.",
  },
  {
    heading: "Assessment & Inspection of Electrical Power Supply",
    details:
      "We conduct thorough assessments and inspections of electrical power supply systems to identify issues and ensure reliable performance.",
  },
];

export default function OperationsAndMaintenance() {
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
          <div className="h-screen relative operation-maintenance-hero-bg">
            <div className="relative constrained-padded">
              <div className="flex h-screen justify-center items-center">
                <div className="text-white space-y-6 text-center">
                  <h1 className="font-display font-bold lg:text-5xl text-3xl ">
                    Operation & Maintenance Solutions
                  </h1>
                  <p className="lg:text-base text-sm max-w-md mx-auto">
                    alsadara optimizes electrical infrastructure with
                    data-driven, condition-based maintenance services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="constrained-padded py-10 space-y-10">
          <div className="">
          <h3 className="font-display lg:text-2xl text-xl mb-4">
              Operation & Maintenance Solutions
            </h3>
            <p>
              Alsadara&apos;s dedicated team provides advanced maintenance
              services for electrical equipment using a data-driven,
              conditioned-based approach. Tailoring upkeep to actual equipment
              conditions maximizes reliability and efficiency, minimizing
              downtime. Trust us for cutting-edge strategies optimizing your
              electrical infrastructure.
            </p>
          </div>
          <div className="">
          <h3 className="font-display lg:text-2xl text-xl ">
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
