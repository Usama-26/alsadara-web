import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
export function ItemCard({ item }) {
  return (
    <motion.div className="h-full relative border rounded-xl hover:shadow-xl transition-shadow duration-150 shadow-gray-700">
      <div className="relative">
        <Image
          width="386"
          height="237"
          src={item.img}
          alt={`Offer`}
          className="w-full rounded-xl"
        />
      </div>
      <div className="bg-white rounded-xl p-4 space-y-2">
        <h1 className=" font-display text-xl text-primary font-semibold">
          {item.name}
        </h1>
        <p className="line-clamp-3 text-gray-500">{item.desc}</p>
        <a
          href={item.href}
          className="group text-primary tracking-wider inline-flex gap-x-2 items-center font-bold"
        >
          <span>Learn More</span>
          <span className="group-hover:translate-x-2 transition-all">
            <FaArrowRight />
          </span>
        </a>
      </div>
    </motion.div>
  );
}
