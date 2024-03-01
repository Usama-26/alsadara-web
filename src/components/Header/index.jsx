import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/aboutus" },
  { label: "Services", link: "/services" },
  { label: "Portfolio", link: "/portfolio" },
  { label: "Partners", link: "/partner" },
  { label: "Contact Us", link: "/contact" },
];

export default function Header({}) {
  const [show, setShow] = useState(false);

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0, transition: { when: "afterChildren" } },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex justify-between items-center">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            variants={menuVariants}
            exit={"hidden"}
            className="lg:hidden block fixed inset-0 w-full h-full bg-primary overflow-hidden"
          >
            <motion.div className="h-full flex flex-col justify-center items-center px-8">
              <motion.ul className=" text-2xl space-y-8 text-white">
                {navItems.map((item, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <Link
                      href={item.link}
                      className="w-full inline-block text-3xl text-center "
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li variants={itemVariants}>
                  <div className="flex justify-center mt-12 mb-4 gap-x-3">
                    <button
                      type="button"
                      className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
                    >
                      <FaXTwitter />
                    </button>
                    <button
                      type="button"
                      className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
                    >
                      <FaLinkedinIn />
                    </button>
                    <button
                      type="button"
                      className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
                    >
                      <FaInstagram />
                    </button>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={"hidden"}
        variants={{
          hidden: {
            opacity: 0,
            x: -20,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          },
        }}
        viewport={{
          once: true,
        }}
        whileInView={"visible"}
        className=""
      >
        <Link href={"/"} className="relative z-20">
          <Image
            src={"/alsadarah-logo.png"}
            width={426}
            height={162}
            alt="Alsadarah Logo"
            className="w-32"
          />
        </Link>
      </motion.div>
      <motion.div
        initial={"hidden"}
        variants={{
          hidden: {
            opacity: 0,
            x: 20,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          },
        }}
        viewport={{
          once: true,
        }}
        whileInView={"visible"}
      >
        <div className="lg:hidden block">
          <button
            className="relative z-20"
            type="button"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <XMarkIcon className="w-8 h-8 text-white" />
            ) : (
              <Bars3Icon className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
        <div className="lg:block hidden">
          <Navbar />
        </div>
      </motion.div>
    </div>
  );
}
