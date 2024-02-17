import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Services({}) {
  return (
    <section className="py-20">
      <div className="constrained-padded">
        <div className="services-bg">
          <div className="bg-primary/90 py-10 px-4 text-white">
            <div className="grid lg:grid-cols-3 grid-cols-1 text-sm">
              <div className="lg:px-12 px-4 py-4 border-b lg:border-r border-gray-400">
                <div className="space-y-4">
                  <h1 className="font-display font-bold text-2xl uppercase tracking-wider">
                    Services
                  </h1>
                  <span className="inline-block border-b border-t-4 border-white w-10 h-1"></span>
                  <p className="text-gray-200 leading-relaxed">
                    Over 24 years experience & knowledge of international
                    industrial systems, dedicated to provide the best economical
                    solutions.
                  </p>
                  <div>
                    <Link
                      href={"#"}
                      className="group tracking-wider font-bold uppercase inline-flex gap-x-2 items-center"
                    >
                      <span>View All Services</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:px-12 px-4 py-4 border-b lg:border-r border-gray-400">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/bolt.svg"}
                      width={100}
                      height={100}
                      alt="Power System Studies Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-gray-600">01</h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Power System Studies
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    Denouncing pleasure and praising pain was born give you a
                    complete...
                  </p>
                  <div>
                    <Link
                      href={"#"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:px-12 px-4 py-4 border-b border-gray-400">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/config.svg"}
                      width={100}
                      height={100}
                      alt="Facility 
                        Management Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-gray-600">02</h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Facility Management
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    Denouncing pleasure and praising pain was born give you a
                    complete...
                  </p>
                  <div>
                    <Link
                      href={"#"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:px-12 px-4 py-4 lg:border-r lg:border-b-0 border-b border-gray-400">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/capacitor.svg"}
                      width={100}
                      height={100}
                      alt="Facility 
                        Management Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-gray-600">03</h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Operation & Maintenance Solution
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    Denouncing pleasure and praising pain was born give you a
                    complete...
                  </p>
                  <div>
                    <Link
                      href={"#"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:px-12 px-4 py-4 lg:border-r lg:border-b-0 border-b border-gray-400">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/cog.svg"}
                      width={100}
                      height={100}
                      alt="Facility 
                        Management Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-gray-600">04</h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    MEP Solution
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    Denouncing pleasure and praising pain was born give you a
                    complete...
                  </p>
                  <div>
                    <Link
                      href={"#"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:px-12 px-4 py-4 border-gray-400">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <Image
                      src={"/icons/services/electric-points.svg"}
                      width={100}
                      height={100}
                      alt="Facility 
                        Management Logo"
                      className="w-10 h-10"
                    />
                    <h1 className="text-2xl font-bold text-gray-600">05</h1>
                  </div>
                  <h2 className="font-display font-bold text-lg ">
                    Electrical Installation
                  </h2>
                  <p className="text-gray-200 leading-relaxed">
                    Denouncing pleasure and praising pain was born give you a
                    complete...
                  </p>
                  <div>
                    <Link
                      href={"#"}
                      className="group tracking-wider inline-flex gap-x-2 items-center"
                    >
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-2 transition-all">
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
