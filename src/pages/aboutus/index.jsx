import { motion, AnimatePresence } from "framer-motion";
import CTA from "@/components/Home/CTA";
import Footer from "@/components/Footer";
import AboutHero from "@/components/Hero/AboutHero";
import AboutUs from "@/components/Home/Aboutus";
import Image from "next/image";
import Link from "next/link";
import PartnerCTA from "@/components/PartnerCTA";

const values = [
  {
    icon: "workers-group.svg",
    value: "People",
    desc: "Our clients, stakeholders, and communities are our top priority, and we treat them with the utmost respect.",
  },
  {
    icon: "integrity.svg",
    value: "Integrity",
    desc: "It's crucial that all representatives of the organization prioritize acting with strong ethics, in line with the company's values and principles.",
  },
  {
    icon: "bulb.svg",
    value: "Innovation",
    desc: "Our objective is to approach each project with a commitment to innovation, ensuring we provide the most suitable and cost-effective solutions.",
  },
  {
    icon: "efficiency.svg",
    value: "Efficiency",
    desc: "We are fully dedicated to the timely and budget-friendly delivery of our services while maintaining the highest quality standards",
  },
];
export default function Aboutus() {
  const containerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.2 } },
  };
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

  const xSlideVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, x: 20 },
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
        <AboutHero />
        <AboutUs />
        <motion.div
          initial={"hidden"}
          variants={list}
          whileInView={"visible"}
          className="constrained-padded p-8 bg-primary/80 "
        >
          <div className="bg-primary p-4 rounded-2xl">
            <div className="flex lg:flex-row flex-col text-white text-justify">
              <div className="lg:basis-1/2 p-4 space-y-4">
                <motion.h1
                  variants={itemVariants}
                  className="uppercase text-lg font-bold"
                >
                  Our Mission
                </motion.h1>
                <div className="space-y-4 lg:pr-8 pb-8 lg:border-r lg:border-b-0 border-b border-gray-400">
                  <motion.p variants={itemVariants}>
                    To deliver superior and pioneering engineering and energy
                    solutions and project management services, ensuring customer
                    contentment and long-term benefits.
                  </motion.p>
                  <motion.p variants={itemVariants}>
                    Our success hinges on the commitment of our employees as we
                    actively engage, empower, and foster their growth.
                  </motion.p>
                </div>
              </div>
              <div className="lg:basis-1/2 p-4 space-y-4">
                <motion.h1
                  variants={itemVariants}
                  className="uppercase text-lg font-bold"
                >
                  Our Vision
                </motion.h1>
                <div className="space-y-4 border-gray-300">
                  <motion.p variants={itemVariants}>
                    Our primary objective is to establish ourselves as the
                    leading service provider in Engineering and Energy.
                  </motion.p>
                  <motion.p variants={itemVariants}>
                    By prioritizing customer service and innovative solutions,
                    we aim to exceed our clients expectations and deliver
                    exceptional value.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="constrained-padded my-20">
          <h4 className="lg:px-0 px-4 text-xl font-bold">Our Core Values</h4>
          <motion.div
            initial={"hidden"}
            variants={list}
            whileInView={"visible"}
            className="grid lg:grid-cols-4 grid-cols-1 lg:divide-x divid-y"
          >
            {values.map((value, index) => (
              <motion.div
                variants={xSlideVariants}
                key={index}
                className="p-4 space-y-1"
              >
                <Image
                  src={`/icons/values/${value.icon}`}
                  height={40}
                  width={40}
                  className="h-16"
                  alt={value.value}
                />
                <h1 className="text-lg font-bold text-primary">
                  {value.value}
                </h1>
                <p className="">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={"hidden"}
          variants={containerVariants}
          whileInView={"visible"}
          className="constrained-padded my-10"
        >
          <h4 className="lg:px-0 px-4 text-xl font-bold">Our Achievements</h4>
        </motion.div>
        <motion.div
          initial={"hidden"}
          variants={containerVariants}
          whileInView={"visible"}
          className="py-10 bg-gray-50"
        >
          <div className="constrained-padded">
            <motion.div
              initial={"hidden"}
              variants={list}
              whileInView={"visible"}
              className="grid lg:grid-cols-3 grid-cols-1 text-center"
            >
              <motion.div variants={xSlideVariants} className="space-y-4 p-4">
                <Image
                  src={`/images/achievements/environment-management.jpg`}
                  height={498}
                  width={385}
                  alt="Enivronment Management"
                  className="shadow-md object-contain"
                />
                <p className="font-medium">
                  ISO 14001:2015 <br />
                  Environmental Managment System
                </p>
              </motion.div>
              <motion.div variants={xSlideVariants} className="space-y-4 p-4">
                <Image
                  src={`/images/achievements/quality-management.jpg`}
                  height={498}
                  width={385}
                  alt="Quality Management"
                  className="shadow-md object-contain"
                />
                <p className="font-medium">
                  ISO 45001:2018 <br /> Occupational Health & Safety <br />{" "}
                  Management System
                </p>
              </motion.div>
              <motion.div variants={xSlideVariants} className="space-y-4 p-4">
                <Image
                  src={`/images/achievements/safety-management.jpg`}
                  height={498}
                  width={385}
                  alt="Safety Management"
                  className="shadow-md object-contain"
                />
                <p className="font-medium">
                  IISO 9001:2015 <br /> Quality Management System
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <PartnerCTA />
        <CTA />
        <Footer />
      </motion.section>
    </AnimatePresence>
  );
}
