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

export default function Footer() {
  return (
    <footer className=" lg:pt-40 pt-20 bg-primary-dark text-white">
      <div className="py-10 container mx-auto text-sm px-6 lg:px-8">
        <div className="flex md:flex-row flex-col gap-6">
          <div className="basis-1/5 pr-4">
            <Link href={"/"}>
              <Image
                src={"/alsadarah-logo.png"}
                width="486"
                height="162"
                alt="Kafu Discounts Logo"
                className="w-40"
              />
            </Link>
            <p className="my-4">
              Alsadara, where commitment meets excellence. Our unwavering
              dedication and professional expertise converge to deliver
              outstanding solutions tailored to your needs.
            </p>

            <h4 className=" font-bold mb-4">Follow us</h4>
            <div className="flex items-center gap-x-4 text-base">
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
            </div>
          </div>
          <div className="basis-3/5">
            <div className="flex flex-wrap">
              <div className="lg:basis-1/3 basis-1/2">
                <h4 className="block font-bold tracking-widest uppercase mb-2">
                  Useful Links
                </h4>
                <span className="inline-block border-t-4 border-white w-10"></span>
                <div className="mt-4 space-y-2">
                  <Link
                    href={"/"}
                    className=" block hover:underline underline-offset-2"
                  >
                    Home
                  </Link>
                  <Link
                    href={"/"}
                    className=" block hover:underline underline-offset-2"
                  >
                    About us
                  </Link>
                  <Link
                    href={"/"}
                    className=" block hover:underline underline-offset-2"
                  >
                    Projects
                  </Link>
                  <Link
                    href={"/"}
                    className=" block hover:underline underline-offset-2"
                  >
                    Become a Partner
                  </Link>
                </div>
              </div>
              <div className="lg:basis-1/3 basis-1/2">
                <h4 className="block font-bold tracking-widest uppercase mb-2">
                  Services
                </h4>
                <span className="inline-block border-t-4 border-white w-10"></span>

                <div className="mt-4 space-y-2">
                  <Link
                    href={"/"}
                    className=" block hover:underline underline-offset-2"
                  >
                    Power system
                  </Link>
                  <Link
                    href={"/"}
                    className=" block hover:underline underline-offset-2"
                  >
                    MEP Solutions
                  </Link>
                  <Link
                    href={"/"}
                    className=" block hover:underline underline-offset-2"
                  >
                    Electrical Installation
                  </Link>
                  <Link
                    href={"/"}
                    className=" block hover:underline underline-offset-2"
                  >
                    Facility Management
                  </Link>
                  <Link
                    href={"/"}
                    className=" block hover:underline underline-offset-2"
                  >
                    Electrical Testing & Commissioning
                  </Link>
                </div>
              </div>
              <div className="lg:basis-1/3 basis-1/2">
                <h4 className="block font-bold tracking-widest uppercase mb-2">
                  Services
                </h4>
                <span className="inline-block border-t-4 border-white w-10"></span>

                <div className="mt-4 space-y-2">
                  <Link
                    href={"/"}
                    className=" block hover:underline underline-offset-2"
                  >
                    Operation & Maintenance Solution
                  </Link>
                  <Link
                    href={"/"}
                    className=" block hover:underline underline-offset-2"
                  >
                    Bio Medical Maintenance
                  </Link>
                  <Link
                    href={"/"}
                    className=" block hover:underline underline-offset-2"
                  >
                    IT Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/5 ">
            <h4 className="block font-bold uppercase mb-2">Contact Us</h4>
            <span className="inline-block border-t-4 border-white w-10"></span>

            <div className="mt-4 space-y-2">
              <Link
                href={"#"}
                className="inline-flex gap-x-2 items-center hover:underline underline-offset-2"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>info@alsadara.com</span>
              </Link>
              <Link
                href={"#"}
                className="inline-flex gap-x-2 items-center hover:underline underline-offset-2"
              >
                <FaPhone className="w-5 h-5" />
                <span>+93456578945</span>
              </Link>
              <Link
                href={"#"}
                className="inline-flex gap-x-2 items-center hover:underline underline-offset-2"
              >
                <FaLocationDot className="w-5 h-5" />
                <span>Riyadh, Saudia Arabia</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="constrained-padded border-t py-4 text-center text-sm">
        <h6>Copyright © 2024 alsadara. All right reserved.</h6>
      </div>
    </footer>
  );
}
