import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  FaArrowRight,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";

export default function AboutHero({}) {
  return (
    <>
      <div className="relative constrained-padded">
        <div className="constrained-padded z-10 absolute w-full h-full py-10 left-0">
          <div className="flex justify-between items-center ">
            <motion.div
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
              viewport={{ once: true }}
              whileInView={"visible"}
              className=""
            >
              <Link href={"/"}>
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
                hidden: { opacity: 0, x: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 1,
                  },
                },
              }}
              viewport={{ once: true }}
              whileInView={"visible"}
              className="lg:block hidden"
            >
              <Navbar />
            </motion.div>
          </div>

          <div className="lg:mt-40 mt-10 text-end">
            <div className="inline-block">
              <div className="flex flex-col gap-y-3">
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
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className=" relative about-hero-bg">
          <div className="relative constrained-padded">
            <div className="py-60 lg:h-screen flex justify-center items-center">
              <div className="text-white space-y-6 text-center">
                <h1 className="font-display font-bold lg:text-5xl text-3xl ">
                  About us
                </h1>
                <p className="lg:text-base text-sm">
                  With over 11 years of passion, we&apos;ve consistently <br />{" "}
                  delivered quality work, exceeding customer <br />{" "}
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}