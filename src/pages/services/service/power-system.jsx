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

const services = [
  {
    heading: "Motor Starting Studies",
    details:
      "Lorem ipsum dolor sit amet consectetur. Felis rhoncus non tempus pulvinar enim justo sed.",
  },
  {
    heading: "Volt-VAR Network Optimization Study",
    details:
      "Lorem ipsum dolor sit amet consectetur. Felis rhoncus non tempus pulvinar enim justo sed.",
  },
  {
    heading: "Short Circuit Study",
    details:
      "Lorem ipsum dolor sit amet consectetur. Felis rhoncus non tempus pulvinar enim justo sed.",
  },
  {
    heading: "ARC Flash Study",
    details:
      "Lorem ipsum dolor sit amet consectetur. Felis rhoncus non tempus pulvinar enim justo sed.",
  },
  {
    heading: "Dynamic Transient Circuit Analysis",
    details:
      "Lorem ipsum dolor sit amet consectetur. Felis rhoncus non tempus pulvinar enim justo sed.",
  },
  {
    heading: "Insulation Coordination Studies",
    details:
      "Lorem ipsum dolor sit amet consectetur. Felis rhoncus non tempus pulvinar enim justo sed.",
  },
  {
    heading: "Unit Commitment and Economic Dispatch Study Services",
    details:
      "Lorem ipsum dolor sit amet consectetur. Felis rhoncus non tempus pulvinar enim justo sed.",
  },
];

export default function ServicePowerSystem() {
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
            <div className="flex justify-between items-center ">
              <motion.div
                initial={"hidden"}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1,
                    },
                  },
                }}
                viewport={{ once: true }}
                whileInView={"visible"}
                className=""
              >
                <Link href={"/"}>
                  <Image
                    src={"/alsadarah-logo.png"}
                    width={426}
                    height={162}
                    alt="Alsadarah Logo"
                    className="w-32"
                  />
                </Link>
              </motion.div>
              <motion.div
                initial={"hidden"}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1,
                    },
                  },
                }}
                viewport={{ once: true }}
                whileInView={"visible"}
                className="lg:block hidden"
              >
                <Navbar />
              </motion.div>
            </div>

            <div className="lg:mt-48 mt-10 text-end">
              <div className="inline-block">
                <div className="flex flex-col gap-y-3">
                  <button
                    type="button"
                    className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
                  >
                    <FaXTwitter />
                  </button>
                  <button
                    type="button"
                    className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
                  >
                    <FaLinkedinIn />
                  </button>
                  <button
                    type="button"
                    className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
                  >
                    <FaInstagram />
                  </button>
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
        <div className="constrained-padded py-10 space-y-10">
          <div className="">
            <h3 className="font-display lg:text-2xl text-sm max-w-3xl">
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
            <h3 className="font-display lg:text-2xl text-sm max-w-3xl">
              Services
            </h3>
          </div>
        </div>
        <div className="constrained-padded py-10">
          <div className="flex flex-col flex-wrap h-screen gap-4">
            {services.map((service, index) => (
              <Accordion key={index} index={index} service={service} />
            ))}
          </div>
        </div>
        <PartnerCTA />
        <Footer />
      </motion.section>
    </AnimatePresence>
  );
}
