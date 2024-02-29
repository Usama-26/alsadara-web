import { ItemCard, ProjectCard } from "@/components/Card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const projects = [
  {
    name: "Jubail 2020",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non leo quis purus semper cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "/images/projects/jubail.jpg",
    href: "/",
  },
  {
    name: "Riyadh 2021",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non leo quis purus semper cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "/images/projects/mecca.jpg",
    href: "/",
  },
  {
    name: "Makkah 2023",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non leo quis purus semper cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "/images/projects/riyadh.jpg",
    href: "/",
  },
];

export default function OurProjects() {
  const containerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      viewport={{ margin: "50px" }}
      className="py-20"
    >
      <div className="constrained-padded">
        <div className="space-y-2">
          <h1 className="font-display lg:text-3xl text-xl text-center capitalize">
            Our Portfolio
          </h1>
          <p className="text-center max-w-2xl  mx-auto text-sm lg:text-base">
            {
              "Explore our portfolio of innovative projects, showcasing our expertise, creativity, and the  impactful solutions we've delivered to different businesses  like yours."
            }
          </p>
        </div>
        <div className="my-10">
          <motion.div
            initial={"hidden"}
            variants={containerVariants}
            whileInView={"visible"}
            className="grid lg:grid-cols-3 grid-cols-1 gap-4"
          >
            <motion.div
              variants={itemVariants}
              custom={1}
              className="flex flex-col gap-4"
            >
              <img src={"/images/portfolio/portfolio-section-4.png"} />
              <img src={"/images/portfolio/portfolio-section-1.png"} />
            </motion.div>
            <motion.div
              variants={itemVariants}
              custom={2}
              className="flex flex-col gap-4"
            >
              <img src={"/images/portfolio/portfolio-section-6.png"} />
              <img src={"/images/portfolio/portfolio-section-5.png"} />
            </motion.div>
            <motion.div
              variants={itemVariants}
              custom={3}
              className="flex flex-col gap-4"
            >
              <img src={"/images/portfolio/portfolio-section-3.png"} />
              <img src={"/images/portfolio/portfolio-section-2.png"} />
            </motion.div>
          </motion.div>
          <div className="text-center mt-8">
            <Link
              href={"/portfolio"}
              className="px-8 py-2 rounded-full bg-primary hover:bg-primary-light text-white font-medium"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
