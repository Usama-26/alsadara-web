import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs({}) {
  const leftVariants = {
    hidden: { x: -100, scale: 0.9, opacity: 0 },
    visible: {
      x: 0,

      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };
  const rightVariants = {
    hidden: { x: 100, scale: 0.9, opacity: 0 },
    visible: {
      x: 0,

      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };
  const containerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <section>
      <motion.div
        initial={"hidden"}
        variants={containerVariants}
        whileInView={"visible"}
        className="constrained-padded my-20"
      >
        <h1 className="font-display text-3xl text-center">
          Why Choose Alsadara
        </h1>
        <div className="my-10">
          <div className="flex">
            <motion.div
              initial={"hidden"}
              variants={leftVariants}
              whileInView={"visible"}
              className="lg:block hidden basis-1/2"
            >
              <div className="">
                <Image
                  src={"/images/whychooseus/engineer.png"}
                  width={450}
                  height={604}
                  alt="Why Choose Us Image"
                  className="w-96 mx-auto rounded-[2rem]"
                />
              </div>
            </motion.div>
            <motion.div
              initial={"hidden"}
              variants={rightVariants}
              whileInView={"visible"}
              className="lg:basis-1/2 lg:space-y-0 space-y-8"
            >
              <div className="flex lg:flex-row flex-col lg:text-left text-center">
                <div className="basis-1/6 lg:mr-4 flex-shrink-0">
                  <Image
                    src={"/icons/fast-delivery.svg"}
                    width={100}
                    height={100}
                    alt="Fast Delivery Logo"
                    className="w-16 h-16 lg:ml-auto mx-auto"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-primary text-primary my-4">
                    Punctual Delivery Time
                  </h4>
                  <p className="mt-1 text-sm text-gray-700 lg:text-justify text-center">
                    At alsadara, punctuality is at the core of our service
                    commitment. We consistently meet and exceed deadlines,
                    ensuring prompt delivery of your valuable projects. Trust
                    alsadara for reliable and timely service that fosters
                    lasting client satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col lg:text-left text-center">
                <div className="basis-1/6 lg:mr-4 flex-shrink-0">
                  <Image
                    src={"/icons/quality-service.svg"}
                    width={100}
                    height={100}
                    alt="Fast Delivery Logo"
                    className="w-12 h-12 lg:ml-auto mx-auto"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-primary text-primary my-4">
                    Quality Work
                  </h4>
                  <p className="mt-1 text-sm text-gray-700 lg:text-justify text-center">
                    At alsadara, we embody quality work as our signature. Our
                    commitment to precision and dedication ensures that every
                    project surpasses expectations, delivering an unmatched
                    standard of excellence.
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col lg:text-left text-center">
                <div className="basis-1/6 lg:mr-4 flex-shrink-0">
                  <Image
                    src={"/icons/shield-check.svg"}
                    width={100}
                    height={100}
                    alt="Fast Delivery Logo"
                    className="w-10 h-10 lg:ml-auto mx-auto mt-4"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-primary text-primary my-4">
                    Safety
                  </h4>
                  <p className="mt-1 text-sm text-gray-700 lg:text-justify text-center">
                    Safety is our top priority. At alsadara, we adhere to
                    rigorous standards, implementing comprehensive measures to
                    ensure the well-being of our team and clients. Your security
                    is our commitment.
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col lg:text-left text-center">
                <div className="basis-1/6 lg:mr-4 flex-shrink-0">
                  <Image
                    src={"/icons/workers-group.svg"}
                    width={100}
                    height={100}
                    alt="Fast Delivery Logo"
                    className="w-12 h-12 lg:ml-auto mx-auto mt-2"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-primary text-primary my-4">
                    Team of Professionals
                  </h4>
                  <p className="mt-1 text-sm text-gray-700 lg:text-justify text-center">
                    Our success is driven by a dedicated team of professionals.
                    With expertise across various domains, we are committed to
                    delivering exceptional results, ensuring your satisfaction
                    with every project.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
