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
    heading: "Motor Starting Studies",
    details:
      "Ensure seamless motor operation with our analysis of voltage, current, and equipment compatibility for optimized performance and extended lifespan.",
  },

  {
    heading: "Short Circuit Study",
    details:
      "Address potential electrical short circuits with our comprehensive assessment of vulnerabilities, fault currents, and protective measures for enhanced safety and prevention of disruptions.",
  },
  {
    heading: "ARC Flash Study",
    details:
      "Safeguard personnel and equipment with our assessment of arc flash hazards, fault currents, and recommended protective measures, prioritizing electrical safety.",
  },
  {
    heading: "MV, HV Cables Sizing / Thermal Analysis Services",
    details:
      "Ensure safe and efficient power transmission with our assessment of cable sizing requirements, thermal performance analysis, and recommended solutions for medium and high voltage cables.",
  },
  {
    heading: "Dynamic Transient Circuit Analysis",
    details:
      "Evaluate electrical systems dynamically with our in-depth assessment of transient events, system responses, and recommended measures for enhanced stability and reliability.",
  },
  {
    heading: "Optimal Power Flow & Contingency Power Flow",
    details:
      "Optimize power systems and ensure reliability with our detailed analysis of power flow contingencies and tailored solutions for increased efficiency and resilience.",
  },
  {
    heading: "Volt-VAR Network Optimization Study",
    details:
      "Enhance network operation efficiency with our analysis of network parameters, optimization strategies, and recommended solutions for optimal voltage and reactive power.",
  },
  {
    heading: "Insulation Coordination Studies",
    details:
      "Prioritize electrical system safety with our assessment of insulation requirements, coordination strategies, and recommended measures for ensuring system reliability. ",
  },
  {
    heading: "Power Quality and Harmonic Analysis",
    details:
      "Prioritize electrical system integrity with our analysis of power quality issues, harmonic distortions, and recommended measures for a stable and efficient electrical environment.",
  },
  {
    heading: "Load Flow Study",
    details:
      "Ensure optimal electrical system operation with our analysis of voltage levels, current flows, and system performance, identifying and mitigating potential issues.",
  },
  {
    heading: "Unit Commitment and Economic Dispatch Study Services",
    details:
      "Optimize energy production and minimize costs with our analysis of unit commitment strategies and economic dispatch, ensuring efficient energy generation.",
  },
  {
    heading: "Load Forecast Studies",
    details:
      "Plan for future energy demand with our analysis of historical data, load patterns, and accurate forecasts for efficient resource allocation and energy supply planning.",
  },
  {
    heading: "Grid Compliance Study",
    details:
      "Ensure adherence to regulatory and grid standards with our assessment of compliance requirements, system performance analysis, and recommended measures for meeting grid compliance criteria.",
  },
  {
    heading: "Grid Integration Studies",
    details:
      "Seamlessly integrate renewable energy sources into the grid with our assessment of grid compatibility, system stability analysis, and recommended solutions for optimized integration.",
  },
];

export default function PowerSystem() {
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
          <div className="h-screen relative power-system-hero-bg">
            <div className="relative constrained-padded">
              <div className="flex h-screen justify-center items-center">
                <div className="text-white space-y-6 text-center">
                  <h1 className="font-display font-bold lg:text-5xl text-3xl ">
                    Power System
                  </h1>
                  <p className="lg:text-base text-sm">
                    Shaping the future of global energy systems with a{" "}
                    <br className="hidden lg:block" /> decade of power system
                    expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="constrained-padded py-8 space-y-10">
          <div className="">
            <h3 className="font-display lg:text-2xl text-xl mb-4  max-w-3xl">
              Power System
            </h3>
            <p>
              With a decade of experience in power system studies and
              operations, alsadara specializes in technical network codes,
              advanced software simulations, and tailored solutions for a
              diverse client base. Our expertise has contributed to power system
              advancements globally, positioning us as the go-to partner for
              shaping future energy systems.{" "}
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
