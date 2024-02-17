import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
export function ProjectCard({ project }) {
  return (
    <div className=" relative border rounded-xl hover:shadow-xl transition-shadow duration-150 shadow-gray-700">
      <div className="relative">
        <Image
          width="386"
          height="237"
          src={`/images/projects/jubail.jpg`}
          alt={`Offer`}
          className="w-full rounded-xl"
        />
      </div>
      <div className="bg-white rounded-xl p-4 space-y-2">
        <h1 className=" font-display text-xl text-primary font-semibold">
          {project.name}
        </h1>
        <p className="line-clamp-2 text-gray-500">{project.desc}</p>
        <Link
          href={"#"}
          className="group text-primary tracking-wider inline-flex gap-x-2 items-center font-bold"
        >
          <span>Learn More</span>
          <span className="group-hover:translate-x-2 transition-all">
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
