import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/Hero/ServicesHero";
import { ItemCard } from "@/components/Card";
import PartnerCTA from "@/components/PartnerCTA";
import CustomerCTA from "@/components/CustomerCTA";

const services = [
  {
    name: "Power System",
    desc: "With a decade of experience in power system studies and operations, alsadara specializes in technical network codes,",
    href: "/services/service/power-system",
    img: "/images/services/power-system.jpg",
  },
  {
    name: "Electrical Installation",
    desc: "Improper installation poses safety risks and reduces functionality. alsadara excels in industry-leading electrical installations,",
    href: "/services/service/electrical-installation",
    img: "/images/services/electrical-installation.jpg",
  },
  {
    name: "MEP Solutions",
    desc: "alsadara MEP, our subsidiary, specializes in delivering high-quality services across multiple sectors. We excel in the design, engineering",
    href: "/services/service/mep-solutions",
    img: "/images/services/mep-solutions.jpg",
  },
  {
    name: "Operation And Maintenance Solution",
    desc: "Alsadara's dedicated team provides advanced maintenance services for electrical equipment using a data-driven",
    href: "/services/service/operation-maintenance",
    img: "/images/services/operation-maintenance.jpg",
  },
  {
    name: "Electrical Testing & Commissioning",
    desc: "alsadara features a highly skilled team specializing in testing and commissioning services for diverse power systems",
    href: "/services/service/electrical-testing",
    img: "/images/services/electrical-testing.jpg",
  },
  {
    name: "Facility Management",
    desc: "alsadara is dedicated to exceptional services, project success, client satisfaction, and value for money. Specializing in Asset Management.",
    href: "/services/service/facility-management",
    img: "/images/services/facility-management.jpg",
  },
  {
    name: "Bio Medical Maintenance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non leo quis purus semper cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/services/service/bio-medical-maintenance",
    img: "/images/services/bio-medical-maintenance.jpg",
  },
  {
    name: "IT Solutions",
    desc: "We're a leading company specializing in medical device maintenance. With skilled technicians, we offer comprehensive solutions for optimal performance",
    href: "/services/service/it-solutions",
    img: "/images/services/it-solutions.jpg",
  },
];

export default function Services() {
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
        <ServicesHero />
        <div className="constrained-padded flex">
          <div className="py-8 px-4">
            <h3 className="font-display lg:text-2xl text-lg max-w-3xl">
              Services alsadara offers
            </h3>
          </div>
        </div>
        <div className="mb-20">
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            variants={list}
            className="constrained-padded flex flex-wrap  justify-center"
          >
            {services.map((service, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className="lg:basis-1/3 basis-full p-4 h-full"
              >
                <ItemCard item={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <CustomerCTA />
        <Footer />
      </motion.section>
    </AnimatePresence>
  );
}
