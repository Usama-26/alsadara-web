import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRouter } from "next/router";

export default function AboutUs({}) {
  const router = useRouter();
  const pathname = router?.pathname || "";
  const { scrollYProgress } = useScroll();
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
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
          y: [0, -50],
          opacity: 1,
          transition: { duration: 1, delay: 0.5 },
        }}
        // viewport={{ once: true }}
        className="bg-white constrained-padded w-full rounded-3xl shadow-lg px-8 py-10 "
      >
        <div className="py-4 flex lg:flex-row flex-col gap-x-10 gap-y-16">
          <div className="basis-3/5">
            <div className="text-primary space-y-2">
              <h6 className="text-primary font-medium">About us</h6>
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
                          duration: 1,
                          delay: i * 0.2,
                        },
                      },
                    }}
                    whileInView={"visible"}
                    // viewport={{ once: true }}
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
                      duration: 1,
                    },
                  },
                }}
                // viewport={{ once: true }}
                whileInView={"visible"}
                className="font-display lg:text-lg"
              >
                Providing best industrial solution for our customers business{" "}
                <br className="hidden lg:block" /> growing in the field.
              </motion.p>
            </div>
            <div className="space-y-2 my-4 mb-6 text-sm">
              <motion.p
                initial={"hidden"}
                whileInView={"visible"}
                // viewport={{ once: true }}
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
                // viewport={{ once: true }}
                variants={textVariants}
              >
                Our client-centric approach ensures that we deliver services that are in line with our clients’ strategic objectives. 
                We view our clients as partners and work collaboratively with them to create value and drive growth. Our commitment 
                to excellence and our unwavering focus on client satisfaction sets us apart in <br /> the industry.
              </motion.p>
              <motion.p
                initial={"hidden"}
                whileInView={"visible"}
                // viewport={{ once: true }}
                variants={textVariants}
              >
                As your partner in Energy & Facilities Management, alsadara is dedicated to fostering growth 
                and sustainability in your operations. We are here to help you excel in your industry, 
                ensuring your success is our success.
              </motion.p>
            </div>
            {pathname.includes("aboutus") ? null : (
              <Link
                href={"aboutus"}
                className="rounded-full px-6 py-2 text-white hover:bg-primary bg-primary-light lg:text-base text-sm font-medium"
              >
                Read More
              </Link>
            )}
          </div>
          <div className="basis-2/5 relative">
            <Image
              src={"/images/home/aboutus/image-6.png"}
              width={1200}
              height={1119}
              alt="About us Image 1"
              className="ml-auto relative rounded-xl"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
