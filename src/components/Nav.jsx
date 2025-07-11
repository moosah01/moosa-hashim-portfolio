import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";
import { hamburger, homeIcon } from "../assets/icons";
import { motion, AnimatePresence } from "framer-motion";

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
    <>
      {/* ----- Desktop Nav with Pill Style (visible md and up) ----- */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-30 max-lg:hidden md:flex justify-center w-[90%] max-w-7xl bg-white/95 backdrop-blur rounded-full shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] px-10 py-4">
        <nav className="flex justify-between items-center w-full">
          {/* Home Icon Button */}
          <a
            href="/"
            className="flex items-center justify-center text-slate-gray hover:text-black transition"
          >
            <img src={homeIcon} alt="Home Icon" className="w-5 h-5" />
          </a>

          {/* Centered nav links */}
          <ul className="flex items-center gap-7">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block text-center font-montserrat text-leading text-base transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                    item.label === "Portfolio"
                      ? "bg-neutral-800 text-white px-5 py-2 rounded-md hover:bg-neutral-700 text-2xl "
                      : "text-slate-gray hover:text-black text-2xl "
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Empty placeholder to balance layout */}
        </nav>
      </header>

      {/* ----- Mobile Bottom Nav (only on md and below) ----- */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden w-[92%]">
        <div className="flex justify-between items-center bg-white/95 backdrop-blur shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] rounded-full px-6 py-3">
          {/* Home Button */}
          <a
            href="/"
            className="flex items-center gap-2 text-slate-gray hover:text-black transition font-montserrat"
          >
            <img src={homeIcon} alt="home" className="w-5 h-5" />
            <span className="text-sm">Moosa</span>
          </a>

          {/* More Button */}
          <button
            ref={hamburgerRef}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`flex items-center gap-1 px-3 py-1 rounded-2xl text-sm transition
                          shadow-md                   
                          ${
                            isMenuOpen
                              ? "bg-black text-white hover:bg-white hover:text-black " // active: slate-gray
                              : "bg-white text-gray-600 hover:bg-gray-200"
                          }   // inactive: white
                        `}
          >
            More
            <span className="text-lg">☰</span>
          </button>
        </div>
      </div>

      {/* ----- Mobile Full Menu (Drawer style) ----- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed bottom-24 left-4 right-4 z-50 p-6 mx-auto max-w-xl rounded-2xl bg-white/90 backdrop-blur shadow-2xl md:hidden"
          >
            <ul className="flex flex-col gap-3 font-montserrat">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      item.label === "Portfolio"
                        ? "bg-neutral-800 text-white font-semibold hover:bg-neutral-700 hover:text-white  transition-transform duration-300 ease-in-out justify-center"
                        : "text-slate-800 hover:bg-neutral-800 hover:text-white"
                    }`}
                  >
                    <span className="text-base">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
