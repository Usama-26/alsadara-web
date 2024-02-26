import { ItemCard, ProjectCard } from "@/components/Card";
import { motion } from "framer-motion";
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
          <h6 className="text-center text-primary-light font-display">
            Our Projects
          </h6>
          <h1 className="font-display lg:text-3xl text-xl text-center capitalize">
            Have a Look at Our Projects
          </h1>
          <p className="text-center max-w-2xl  mx-auto text-sm lg:text-base">
            {
              "Explore our portfolio of innovative projects, showcasing our expertise, creativity, and the impactful solutions we've delivered to different businesses like yours."
            }
          </p>
        </div>
        <div className="my-10">
          <motion.div
            initial={"hidden"}
            variants={containerVariants}
            whileInView={"visible"}
            className="grid lg:grid-cols-3 grid-cols-1 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                custom={index}
                initial={"hidden"}
                whileInView={"visible"}
                variants={itemVariants}
                key={index}
              >
                <ItemCard item={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
