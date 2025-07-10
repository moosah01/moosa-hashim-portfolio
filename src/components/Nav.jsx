import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Will reference the menu container <div>
  const hamburgerRef = useRef(null); // Will reference the hamburger button <div>

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    //This function is run every time the user clicks somewhere on the document
    const handleClickOutside = (event) => {
      // Only run this if the menu is open
      if (
        isMenuOpen && // Menu is open
        menuRef.current && // Menu DOM node is available
        hamburgerRef.current && // Hamburger button DOM node is available
        !menuRef.current.contains(event.target) && // Click did NOT happen inside the menu
        !hamburgerRef.current.contains(event.target) // Click did NOT happen on the hamburger icon
      ) {
        setIsMenuOpen(false); //if the click happened outisde menu & hamburger, close t he menu
      }
    };

    document.addEventListener("mousedown", handleClickOutside); //click event listener to whole doc
    return () => document.removeEventListener("mousedown", handleClickOutside); //
  }, [isMenuOpen]); //effect re runs when isMenuOpen value changes

  return (
    <header className="padding-x py-8 absolute z-30 w-full bg-blue-300">
      <nav className="flex justify-between items-center max-container">
        <a></a>
        {/* max-lg:hidden means hide thsi element on screen sizes < 1024px */}
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black transition-discrete"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger Icon (Mobile only) */}
        {/* lg hidden means => hide this on large screens i.e. >= 1024px */}
        <div className="lg:hidden" ref={hamburgerRef}>
          <img
            src={hamburger}
            alt="menu"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute top-full left-0 w-full bg-white px-8 py-4 z-40 shadow-lg"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block font-montserrat text-base text-slate-gray hover:text-black transition py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
