import Link from "next/link";

import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Header from "../Header";

export default function PortfolioHero({}) {
  return (
    <>
      <div className="relative constrained-padded">
        <div className="constrained-padded z-10 absolute w-full h-full py-10 left-0">
          <Header />

          <div className="lg:mt-40 mt-10 text-end">
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

      <section>
        <div className=" relative portfolio-hero-bg">
          <div className="relative constrained-padded">
            <div className="py-72 lg:h-screen flex justify-center items-center">
              <div className="text-white space-y-6 text-center">
                <h1 className="font-display font-bold lg:text-5xl text-3xl ">
                  Portfolio
                </h1>
                <p className="lg:text-base text-sm max-w-md">
                  Portfolio Discover our innovative projects. Each one
                  demonstrates our expertise and the impactful solutions we’ve
                  delivered to businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
