import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Slider from "react-slick";

import Header from "@/components/Header";

const images = [
  "/images/home/carousel/hero-1.jpg",
  "/images/home/carousel/hero-2.jpg",
  "/images/home/carousel/hero-3.jpg",
];

export default function Hero({}) {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <>
      <div className="relative constrained-padded">
        <div className="constrained-padded z-10 absolute w-full h-full py-10 left-0">
          <Header />
          <div className="flex gap-x-3 my-16">
            <button
              type="button"
              onClick={previous}
              className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              onClick={next}
              className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
            >
              <FaArrowRight />
            </button>
          </div>
          <div className="text-end">
            <div className="inline-block">
              <div className="flex flex-col gap-y-3">
                <Link
                  href={"https://twitter.com/alsadaraco"}
                  target="_blank"
                  className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href={"https://www.linkedin.com/company/alsadara/"}
                  target="_blank"
                  className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href={
                    "https://www.instagram.com/alsadaraco?igsh=MXFzejlqaXMxMHlybA=="
                  }
                  target="_blank"
                  className="p-2 rounded-full border border-gray-100 text-gray-100 hover:bg-gray-100/10 transition-colors"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        speed={3000}
        arrows={false}
        fade
        autoplaySpeed={5000}
        autoplay
        cssEase="cubic-bezier(.44,.71,.48,.89)"
      >
        {images.map((image, index) => (
          <section key={index}>
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className="relative  hero-bg"
            >
              <div className="relative constrained-padded">
                <div className="flex justify-between py-48">
                  <div className="text-white space-y-6 mt-5">
                    <h1 className="font-display font-bold  lg:text-5xl text-3xl ">
                      <b className="text-primary">alsadara</b> power <br />
                      solutions
                    </h1>
                    <p className="pr-10">
                      We deliver top-notch expertise in every project, meeting
                      minimum <br className="hidden lg:block" />
                      standards as fundamental client commitments.
                    </p>
                    <Link
                      className="inline-flex  items-center gap-x-2 px-6 py-2 rounded-full border border-gray-100 hover:bg-gray-100/10 text-gray-100 transition-colors group"
                      href={"#"}
                    >
                      <span className="lg:text-base text-sm">Contact Us</span>
                      <span className="group-hover:translate-x-3 transition-all">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </Slider>
    </>
  );
}
