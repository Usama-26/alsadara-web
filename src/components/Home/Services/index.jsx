import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const itemVariants = {
  visible: (i) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: i * 0.1 },
  }),
  hidden: { y: 20, x: 20, opacity: 0 },
};

export default function Services({}) {
  return (
    <section className="py-20">
      <div className="constrained-padded">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3, margin: "50px", once: true }}
          className="services-bg"
        >
          <div className="bg-primary/90 py-10 px-4 text-white">
            <div className="grid lg:grid-cols-3 grid-cols-1 text-sm">
              <motion.div
                initial={"hidden"}
                custom={0}
                whileInView={"visible"}
                variants={itemVariants}
                // viewport={{ once: true }}
                className="relative group lg:px-12 px-4 py-4 border-b lg:border-r border-gray-400"
              >
                <div className="group-hover:bg-[#575757] absolute w-full h-full top-0 left-0 transition-all ease-out duration-500 origin-bottom scale-y-75 group-hover:scale-100"></div>
                <div className="space-y-4 relative">
                  <h1 className="font-display font-bold text-2xl uppercase tracking-wider">
                    Services
                  </h1>
                  <span className="inline-block border-b border-t-4 border-white w-10 h-1"></span>
                  <p className="text-gray-200 leading-relaxed">
                    Over 11 years experience & knowledge of international
                    industrial systems, dedicated to provide the best power
                    solutions.
                  </p>
                  <div>
                    <a
                      href={"/services"}
                      className="group tracking-wider font-bold uppercase inline-flex gap-x-2 items-center"
                    >
                      <span>View All Services</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                custom={1}
                whileInView={"visible"}
                variants={itemVariants}
                // viewport={{ once: true }}
                className="relative group lg:px-12 px-4 py-4 border-b lg:border-r border-gray-400"
              >
                <div className="group-hover:bg-[#575757] absolute w-full h-full top-0 left-0 transition-all ease-out duration-500 origin-bottom scale-y-75 group-hover:scale-100"></div>
                <div className="space-y-4 relative">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/bolt.svg"}
                      width={100}
                      height={100}
                      alt="Power System Studies Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-[#565656] group-hover:text-white">
                      01
                    </h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Power System Studies
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    With a decade of experience in power system studies and
                    operations...
                  </p>
                  <div>
                    <a
                      href={"/services/service/power-system"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                custom={2}
                whileInView={"visible"}
                variants={itemVariants}
                // viewport={{ once: true }}
                className="relative group lg:px-12 px-4 py-4 border-b border-gray-400"
              >
                <div className="group-hover:bg-[#575757] absolute w-full h-full top-0 left-0 transition-all ease-out duration-500 origin-bottom scale-y-75 group-hover:scale-100"></div>
                <div className="space-y-4 relative">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/config.svg"}
                      width={100}
                      height={100}
                      alt="Facility 
                        Management Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-[#565656] group-hover:text-white">
                      02
                    </h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Facility Management
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    With a decade of experience in power system studies and
                    operations...
                  </p>
                  <div>
                    <a
                      href={"/services/service/facility-management"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                custom={3}
                whileInView={"visible"}
                variants={itemVariants}
                // viewport={{ once: true }}
                className="relative group lg:px-12 px-4 py-4 border-b lg:border-r border-gray-400"
              >
                <div className="group-hover:bg-[#575757] absolute w-full h-full top-0 left-0 transition-all ease-out duration-500 origin-bottom scale-y-75 group-hover:scale-100"></div>
                <div className="space-y-4 relative">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/capacitor.svg"}
                      width={100}
                      height={100}
                      alt="Facility 
                        Management Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-[#565656] group-hover:text-white">
                      03
                    </h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Operation & Maintenance Solution
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    alsadara&apos;s dedicated team provides advanced maintenance
                    services...
                  </p>
                  <div>
                    <a
                      href={"/services/service/operation-maintenance"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                custom={4}
                whileInView={"visible"}
                variants={itemVariants}
                // viewport={{ once: true }}
                className="relative group lg:px-12 px-4 py-4 border-b lg:border-r border-gray-400"
              >
                <div className="group-hover:bg-[#575757] absolute w-full h-full top-0 left-0 transition-all ease-out duration-500 origin-bottom scale-y-75 group-hover:scale-100"></div>
                <div className="space-y-4 relative">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/cog.svg"}
                      width={100}
                      height={100}
                      alt="Facility 
                        Management Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-[#565656] group-hover:text-white">
                      04
                    </h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    MEP Solution
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    alsadara MEP, our subsidiary, specializes in delivering
                    high-quality services...
                  </p>
                  <div>
                    <a
                      href={"/services/service/mep-solutions"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                custom={5}
                whileInView={"visible"}
                variants={itemVariants}
                // viewport={{ once: true }}
                className="relative group lg:px-12 px-4 py-4 border-b border-gray-400"
              >
                <div className="group-hover:bg-[#575757] absolute w-full h-full top-0 left-0 transition-all ease-out duration-500 origin-bottom scale-y-75 group-hover:scale-100"></div>
                <div className="space-y-4 relative">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/electric-points.svg"}
                      width={100}
                      height={100}
                      alt="Facility 
                        Management Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-[#565656] group-hover:text-white">
                      05
                    </h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Electrical Installation
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    Improper installation poses safety risks and reduces
                    functionality....
                  </p>
                  <div>
                    <a
                      href={"/services/service/electrical-installation"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                custom={6}
                whileInView={"visible"}
                variants={itemVariants}
                // viewport={{ once: true }}
                className="relative group lg:px-12 px-4 py-4 lg:border-r lg:border-b-0 border-b border-gray-400"
              >
                <div className="group-hover:bg-[#575757] absolute w-full h-full top-0 left-0 transition-all ease-out duration-500 origin-bottom scale-y-75 group-hover:scale-100"></div>
                <div className="space-y-4 relative">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/electric-testing.svg"}
                      width={100}
                      height={100}
                      alt="Facility 
                        Management Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-[#565656] group-hover:text-white">
                      06
                    </h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Electrical Testing & Commissioning
                  </h2>
                  <p className="text-gray-200 leading-relaxed line-clamp-2">
                    alsadara features a highly skilled team specializing in
                    testing and commissioning services...
                  </p>
                  <div>
                    <a
                      href={"/services/service/electrical-installation"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                custom={7}
                whileInView={"visible"}
                variants={itemVariants}
                // viewport={{ once: true }}
                className="relative group lg:px-12 px-4 py-4 lg:border-r lg:border-b-0 border-b border-gray-400"
              >
                <div className="group-hover:bg-[#575757] absolute w-full h-full top-0 left-0 transition-all ease-out duration-500 origin-bottom scale-y-75 group-hover:scale-100"></div>
                <div className="space-y-4 relative">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/bio-medical.svg"}
                      width={100}
                      height={100}
                      alt="Bio Medical Maintenance Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-[#565656] group-hover:text-white">
                      07
                    </h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Bio Medical Maintenance
                  </h2>
                  <p className="text-gray-200 leading-relaxed line-clamp-2">
                    We&apos;re a leading company specializing in medical device
                    maintenance...
                  </p>
                  <div>
                    <a
                      href={"/services/service/electrical-installation"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                custom={8}
                whileInView={"visible"}
                variants={itemVariants}
                // viewport={{ once: true }}
                className="relative group lg:px-12 px-4 py-4 "
              >
                <div className="group-hover:bg-[#575757] absolute w-full h-full top-0 left-0 transition-all ease-out duration-500 origin-bottom scale-y-75 group-hover:scale-100"></div>
                <div className="space-y-4 relative">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/it-solutions.svg"}
                      width={100}
                      height={100}
                      alt="IT Solutions Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-[#565656] group-hover:text-white">
                      08
                    </h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    IT Solutions
                  </h2>
                  <p className="text-gray-200 leading-relaxed line-clamp-2">
                    alsadara, a top IT solutions provider, empowers businesses
                    with innovative digital solutions...
                  </p>
                  <div>
                    <a
                      href={"/services/service/electrical-installation"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
