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
    heading: "GIS Testing Services",
    details:
      "Expert testing for Gas-Insulated Switchgear (GIS) across various voltage levels.",
  },

  {
    heading: "Energy Meter Testing and Calibration",
    details:
      "Precise testing and calibration services ensuring accurate energy measurement.",
  },
  {
    heading: "Outdoor Switchgear Testing",
    details:
      "Meticulous testing for reliable, safe, and optimal outdoor switchgear performance..",
  },
  {
    heading: "Calibration of Temperature Gauges",
    details:
      "Providing temperature gauge calibration services for accurate temperature monitoring.",
  },
  {
    heading: "Testing of Relays of All Types and Makes",
    details:
      "Specialized testing ensuring proper functioning and accuracy of critical protection devices.",
  },
  {
    heading: "Measurement of Overhead Line Parameters",
    details:
      "Accurate measurements of overhead line parameters for efficient power transmission.",
  },
  {
    heading: "In-Field or On-Shop Repairing/Reconditioning:",
    details:
      "Skilled repairs and reconditioning to restore optimal performance.",
  },
  {
    heading: "OLTC and Fan Tests",
    details:
      "Thorough tests on On-Load Tap Changers (OLTC) and fans for efficient operation.",
  },
  {
    heading: "Testing of ACDBs, DCDBs, Auxiliary Transformers, NERs, and RMUs",
    details:
      "Comprehensive testing on various electrical components, ensuring reliability and safety.",
  },
  {
    heading: "Testing of Transformers, Shunt Reactors, and Capacitor Banks",
    details:
      "Precise testing for critical components, identifying potential issues and ensuring reliability.",
  },
  {
    heading: "Factory Testing of Panels",
    details:
      "Thorough factory testing ensuring stringent quality and performance standards are met.",
  },
  {
    heading: "On-Load Measurements",
    details:
      "Conducting precise on-load measurements to assess performance and efficiency.",
  },
  {
    heading: "Vacuum Services",
    details:
      "Offering vacuum services for maintaining and extending the life of vacuum-based electrical equipment.",
  },
  {
    heading: "Measurement of Harmonics",
    details:
      "Conducting harmonics measurements to assess and mitigate distortions in electrical systems.",
  },
  {
    heading: "Tan Delta Test",
    details:
      "Conducting precise Tan Delta tests to evaluate insulation condition in transformers and cables.",
  },
  {
    heading: "Frequency Response Measurement",
    details:
      "Performing measurements to analyze electrical circuit behavior over a range of frequencies.",
  },
  {
    heading: "Smart Grounding Measurements",
    details:
      "Assessing grounding system effectiveness and safety for enhanced facility safety.",
  },
  {
    heading: "Testing of Fault Recorder and Sequence of Event Recorders:",
    details:
      "Meticulous testing ensuring accuracy and functionality of critical components.",
  },
  {
    heading: "Scheme and Function Testing for Protection & Control Panels",
    details:
      "Thorough scheme and function testing for effective protection and control of electrical systems.",
  },
  {
    heading: "Testing of 13.8kV and 33kV Switchgears",
    details:
      "Precise testing for the reliability and optimal performance of high-voltage switchgear systems.",
  },
  {
    heading: "On-Site and In-Factory Trainings",
    details:
      "Comprehensive training sessions covering a wide range of electrical topics.",
  },
  {
    heading:
      "Testing of Primary Injections, Busbars, and Transformer Stability",
    details:
      "Precise testing of primary injections, busbars, and transformer stability for reliability and safety.",
  },
  {
    heading: "Measurement of Inrush Current",
    details:
      "Precise measurements of inrush current to prevent equipment damage.",
  },
  {
    heading:
      "Oil Filtration for Power Transformers, Shunt Reactors, and Capacitor Banks",
    details:
      "Conducting oil filtration services to maintain dielectric strength and overall health.",
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
          <div className="h-screen relative electrical-testing-hero-bg ">
            <div className="relative constrained-padded">
              <div className="flex h-screen justify-center items-center">
                <div className="text-white space-y-6 text-center">
                  <h1 className="font-display font-bold lg:text-5xl text-3xl ">
                    Electrical Testing and Commissioning
                  </h1>
                  <p className="lg:text-base text-sm max-w-md mx-auto">
                    alsadara precision in power system testing for optimal
                    performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="constrained-padded py-10 space-y-10">
          <div className="">
            <h3 className="font-display lg:text-2xl text-xl">
              Electrical Testing and Commissioning
            </h3>
            <p>
              alsadara features a highly skilled team specializing in testing
              and commissioning services for diverse power systems, including
              intricate 380kV Extra High Voltage (EHV) substations. Our core
              competence lies in the meticulous testing and commissioning of
              crucial components, guaranteeing the reliability and optimal
              performance of power systems.
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
