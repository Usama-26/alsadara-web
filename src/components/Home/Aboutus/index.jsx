import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";

export default function AboutUs({}) {
  const { scrollYProgress } = useScroll();
  const textVariants = {
    hidden: { opacity: 0, lineHeight: "200%" },
    visible: {
      opacity: 1,
      lineHeight: "150%",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="aboutUs" className="relative">
      <motion.div
        variants={{
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 1 } },
        }}
        initial={"hidden"}
        animate={{
          y: [0, -150],
          opacity: 1,
          transition: { duration: 1, delay: 1 },
        }}
        viewport={{ once: true }}
        className="bg-gray-100 constrained-padded w-full rounded-3xl shadow-lg px-8 py-20 -translate-y-24"
      >
        <div className="py-4 flex lg:flex-row flex-col gap-6">
          <div className="basis-3/5">
            <div className="text-primary space-y-2">
              <h6 className="text-primary">About us</h6>
              <h1 className="text-primary font-display lg:text-3xl text-2xl">
                {"Welcome to alsadara".split(" ").map((word, i) => (
                  <motion.span
                    initial={"hidden"}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.5,
                          delay: i * 0.1,
                        },
                      },
                    }}
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    key={i}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </h1>
              <span className="inline-block border-b border-t-4 border-primary w-10 h-1"></span>
              <motion.p
                initial={"hidden"}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
                viewport={{ once: true }}
                whileInView={"visible"}
                className="font-display lg:text-lg"
              >
                Providing best industrial solution for our customers <br />{" "}
                business growing in last 11+ years.
              </motion.p>
            </div>
            <div className="space-y-2 my-4 text-sm">
              <motion.p
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}
                variants={textVariants}
              >
                alsadara is a premier provider of Energy & Facilities Management
                solutions, committed to delivering performance-based services
                that assist clients in achieving their financial, operational,
                and environmental objectives.
              </motion.p>
              <motion.p
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}
                variants={textVariants}
              >
                The firm, established in 2013 by a team of experienced
                engineers, originated in Egypt, offering energy solutions and
                advisory services to hotels, resorts, and high-rises.
              </motion.p>
              <motion.p
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}
                variants={textVariants}
              >
                In 2018, we extended our services to Saudi Arabia, India
                positioning us as a leading engineering services provider and
                solutions creator.
              </motion.p>
            </div>
            <Link
              href={"#"}
              className="rounded-full px-6 py-2 text-white bg-primary-light font-display"
            >
              Read More
            </Link>
          </div>
          <div className="basis-2/5 relative">
            <Image
              src={"/images/home/aboutus/image-1.jpg"}
              width={498}
              height={327}
              alt="About us Image 1"
              className="ml-auto relative rounded-xl"
            />
            <Image
              src={"/images/home/aboutus/image-2.jpg"}
              width={362}
              height={238}
              alt="About us Image 2"
              className=" rounded-xl relative bottom-0"
            />
            <div className="rounded-xl py-2 px-2 w-1/4 block ml-auto relative text-center text-white bg-primary">
              <span className="font-bold lg:text-2xl font-display">11+</span>
              <p className="lg:text-base text-sm">Years of experience</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
