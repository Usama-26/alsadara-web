import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaLocationDot,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.2 } },
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
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
    <footer className=" lg:pt-40 pt-20 bg-primary-dark text-white">
      <motion.div
        initial={"hidden"}
        variants={containerVariants}
        whileInView={"visible"}
        viewport={{ margin: "50px" }}
        className="py-10 container mx-auto text-sm px-6 lg:px-8"
      >
        <div className="flex md:flex-row flex-col gap-6">
          <motion.div variants={list} className="basis-1/5 pr-4">
            <motion.div variants={itemVariants}>
              <Link href={"/"}>
                <Image
                  src={"/alsadarah-logo.png"}
                  width="486"
                  height="162"
                  alt="Kafu Discounts Logo"
                  className="w-40"
                />
              </Link>
            </motion.div>
            <motion.p variants={itemVariants} className="my-4">
              Alsadara, where commitment meets excellence. Our unwavering
              dedication and professional expertise converge to deliver
              outstanding solutions tailored to your needs.
            </motion.p>

            <motion.h4 variants={itemVariants} className=" font-bold mb-4">
              Follow us
            </motion.h4>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-x-4 text-base"
            >
              <Link href={"#"}>
                <FaXTwitter className="w-6 h-6 fill-white" />
              </Link>
              <Link href="#">
                <FaFacebook className="w-6 h-6 fill-white" />
              </Link>
              <Link href="#">
                <FaInstagram className="w-6 h-6 fill-white" />
              </Link>
              <Link href="#">
                <FaLinkedinIn className="w-6 h-6 fill-white" />
              </Link>
            </motion.div>
          </motion.div>
          <div className="basis-3/5">
            <div className="flex flex-wrap">
              <div className="lg:basis-1/3 basis-1/2">
                <h4 className="block font-bold tracking-widest uppercase mb-2">
                  Useful Links
                </h4>
                <span className="inline-block border-t-4 border-white w-10"></span>
                <motion.ul
                  initial="hidden"
                  variants={list}
                  whileInView={"visible"}
                  className="mt-4 space-y-2"
                >
                  <motion.li variants={itemVariants}>
                    <Link
                      href={"/"}
                      className=" block hover:underline underline-offset-2"
                    >
                      Home
                    </Link>
                  </motion.li>

                  <motion.li variants={itemVariants}>
                    <Link
                      href={"/"}
                      className=" block hover:underline underline-offset-2"
                    >
                      About us
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link
                      href={"/"}
                      className=" block hover:underline underline-offset-2"
                    >
                      Projects
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link
                      href={"/"}
                      className=" block hover:underline underline-offset-2"
                    >
                      Become a Partner
                    </Link>
                  </motion.li>
                </motion.ul>
              </div>
              <div className="lg:basis-1/3 basis-1/2">
                <h4 className="block font-bold tracking-widest uppercase mb-2">
                  Services
                </h4>
                <span className="inline-block border-t-4 border-white w-10"></span>
                <motion.ul
                  initial="hidden"
                  variants={list}
                  whileInView={"visible"}
                  className="mt-4 space-y-2"
                >
                  <motion.li variants={itemVariants}>
                    <Link
                      href={"/"}
                      className=" block hover:underline underline-offset-2"
                    >
                      Power System
                    </Link>
                  </motion.li>

                  <motion.li variants={itemVariants}>
                    <Link
                      href={"/"}
                      className=" block hover:underline underline-offset-2"
                    >
                      MEP Solutions
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link
                      href={"/"}
                      className=" block hover:underline underline-offset-2"
                    >
                      Electrical Installation
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link
                      href={"/"}
                      className=" block hover:underline underline-offset-2"
                    >
                      Facility Management
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link
                      href={"/"}
                      className=" block hover:underline underline-offset-2"
                    >
                      Electrical Testing & Commissioning
                    </Link>
                  </motion.li>
                </motion.ul>
              </div>
              <div className="lg:basis-1/3 basis-1/2">
                <h4 className="block font-bold tracking-widest uppercase mb-2">
                  Services
                </h4>
                <span className="inline-block border-t-4 border-white w-10"></span>
                <motion.ul
                  initial="hidden"
                  variants={list}
                  whileInView={"visible"}
                  className="mt-4 space-y-2"
                >
                  <motion.li variants={itemVariants}>
                    <Link
                      href={"/"}
                      className=" block hover:underline underline-offset-2"
                    >
                      Operation & Maintenance Solution
                    </Link>
                  </motion.li>

                  <motion.li variants={itemVariants}>
                    <Link
                      href={"/"}
                      className=" block hover:underline underline-offset-2"
                    >
                      Bio Medical Maintenance
                    </Link>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                    <Link
                      href={"/"}
                      className=" block hover:underline underline-offset-2"
                    >
                      IT Solutions
                    </Link>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
          <div className="basis-1/5 ">
            <h4 className="block font-bold uppercase mb-2">Contact Us</h4>
            <span className="inline-block border-t-4 border-white w-10"></span>

            <motion.ul
              initial="hidden"
              variants={list}
              whileInView={"visible"}
              className="mt-4 space-y-2"
            >
              <motion.li variants={itemVariants}>
                <Link
                  href={"#"}
                  className="inline-flex gap-x-2 items-center hover:underline underline-offset-2"
                >
                  <FaEnvelope className="w-5 h-5" />
                  <span>info@alsadara.com</span>
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  href={"#"}
                  className="inline-flex gap-x-2 items-center hover:underline underline-offset-2"
                >
                  <FaPhone className="w-5 h-5" />
                  <span>+93456578945</span>
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  href={"#"}
                  className="inline-flex gap-x-2 items-center hover:underline underline-offset-2"
                >
                  <FaLocationDot className="w-5 h-5" />
                  <span>Riyadh, Saudia Arabia</span>
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={"hidden"}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={"visible"}
        className="constrained-padded border-t py-4 text-center text-sm"
      >
        <h6>Copyright © 2024 alsadara. All right reserved.</h6>
      </motion.div>
    </footer>
  );
}
