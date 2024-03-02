import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
export default function BackToTop({}) {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <button
      onClick={scrollToTop}
      className={`absolute lg:top-0 bottom-10 lg:bottom-auto right-5 p-2 rounded-full bg-white hover:bg-transparent border border-white  text-primary hover:text-white  transition duration-300 shadow z-50`}
    >
      <BsArrowUp className="lg:w-6 lg:h-6 w-4 h-4" />
    </button>
  );
}
