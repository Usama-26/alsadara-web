import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA({}) {
  const leftVariants = {
    hidden: { x: -100, y: 100, scale: 0.9, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };
  const rightVariants = {
    hidden: { x: 100, y: 100, scale: 0.9, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <section className="my-10 lg:translate-y-40 translate-y-20">
      <div className="constrained-padded flex ">
        <motion.div
          initial={"hidden"}
          variants={leftVariants}
          whileInView={"visible"}
          className="lg:block hidden lg:basis-1/2 shadow-lg rounded-l-3xl"
        >
          <Image
            src={"/images/contactus/contactus.jpg"}
            width={650}
            height={800}
            alt="Contact Us"
            className=" rounded-l-3xl"
          />
        </motion.div>
        <motion.div
          initial={"hidden"}
          variants={rightVariants}
          whileInView={"visible"}
          className="lg:basis-1/2 bg-gray-100 lg:rounded-r-3xl lg:rounded-none rounded-3xl shadow-lg"
        >
          <div className="py-6">
            <h1 className="font-display text-3xl text-center capitalize">
              Get in Touch
            </h1>
            <form className="lg:px-8 px-4 my-4 space-y-4 ">
              <input
                type="text"
                name="full_name"
                id="fullName"
                placeholder="Full Name"
                className="w-full rounded-full py-4 px-6 border border-gray-200 bg-white "
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                className="w-full rounded-full py-4 px-6 border border-gray-200 bg-white "
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="w-full rounded-full py-4 px-6 border border-gray-200 bg-white "
              />
              <select
                name="subject"
                id="subject"
                placeholder="Subject"
                className="w-full rounded-full py-4 px-6 border border-gray-200 bg-white "
              >
                <option value="select">Subject</option>
              </select>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                rows={10}
                className="w-full rounded-2xl px-6 py-4 border border-gray-200 bg-white resize-none "
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block font-bold rounded-full bg-primary-light text-white p-4 px-8 mx-auto tracking-wider"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
