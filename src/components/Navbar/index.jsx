import Link from "next/link";
import { useRef } from "react";

export default function Navbar() {
  const selectorRef = useRef(null);
  const menuItemRefs = [];

  const navItems = [
    { label: "About Us", link: "aboutus" },
    { label: "Services", link: "#" },
    { label: "Projects", link: "#" },
    { label: "Partners", link: "#" },
    { label: "Contact Us", link: "#" },
  ];

  const handleMouseEnter = (item) => {
    const width = item.offsetWidth;
    selectorRef.current.style.width = `${width}px`;
    selectorRef.current.style.transform = `translateX(${item.offsetLeft}px)`;
  };

  const handleMouseLeave = () => {
    const navbarWidth = selectorRef.current.parentNode.offsetWidth;
    selectorRef.current.style.width = `${navbarWidth}px`;
    selectorRef.current.style.transform = `translateX(0px)`;
  };

  return (
    <nav className="navbar" onMouseLeave={handleMouseLeave}>
      <div ref={selectorRef} className="selector"></div>
      <ul className="menu">
        {navItems.map((item, index) => (
          <li key={index} ref={(el) => (menuItemRefs[index] = el)}>
            <Link
              href={item.link}
              onMouseEnter={() => handleMouseEnter(menuItemRefs[index])}
              className=""
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
