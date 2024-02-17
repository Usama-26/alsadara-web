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
          <div className="flex justify-between items-center ">
            <div className="">
              <Image
                src={"/alsadarah-logo.png"}
                width={426}
                height={162}
                alt="Alsadarah Logo"
                className="w-32"
              />
            </div>
            <div className="lg:block hidden">
              <Navbar />
            </div>
          </div>
          <div className="flex gap-x-3 my-10">
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

      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        speed={1000}
        arrows={false}
        cssEase="cubic-bezier(.44,.71,.48,.89)"
      >
        {images.map((image, index) => (
          <section key={index}>
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className="relative hero-bg"
            >
              <div className="relative constrained-padded">
                <div className="flex justify-between py-48">
                  <div className="text-white space-y-6">
                    <h1 className="font-display font-bold  lg:text-5xl text-3xl ">
                      <b className="text-primary">alsadara</b> power <br />
                      solutions
                    </h1>
                    <p className="lg:text-base text-sm">
                      We deliver top-notch expertise in every project, meeting
                      minimum <br />
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
