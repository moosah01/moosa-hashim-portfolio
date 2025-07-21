import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";
import { hamburger, homeIcon } from "../assets/icons";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        hamburgerRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      {/* ----- Desktop Nav with Glassmorphism ----- */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-30 max-lg:hidden md:flex justify-center w-[90%] max-w-7xl bg-white/10 backdrop-filter backdrop-blur-lg border border-white/20 rounded-full px-10 py-4 shadow-lg shadow-black/10">
        <nav className="flex justify-between items-center w-full">
          {/* Home Icon Button */}
          <a
            href="/"
            className="flex items-center justify-center text-black transition-colors duration-300 hover:text-gray-600"
          >
            <img src={homeIcon} alt="Home Icon" className="w-5 h-5" />
          </a>

          {/* Centered nav links */}
          <ul className="flex items-center gap-7">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block text-center font-montserrat text-leading text-base transition-all duration-300 ease-in-out ${
                    item.label === "Portfolio"
                      ? "bg-neutral-800 text-white px-5 py-2 rounded-md hover:bg-blue-400 text-2xl"
                      : "text-black text-2xl relative group"
                  }`}
                >
                  {item.label}
                  {item.label !== "Portfolio" && (
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="hidden md:block h-30" aria-hidden="true" />

      {/* ----- Mobile Bottom Nav with Glassmorphism ----- */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden w-[92%]">
        <div className="flex justify-between items-center bg-white/10 backdrop-filter backdrop-blur-lg border border-white/20 shadow-lg shadow-black/10 rounded-full px-6 py-3">
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
            className={`flex items-center gap-1 px-3 py-1 rounded-2xl text-sm transition shadow-md ${
              isMenuOpen
                ? "bg-black text-white hover:bg-white hover:text-black"
                : "bg-white/20 backdrop-filter backdrop-blur-sm text-gray-800 hover:bg-white/30"
            }`}
          >
            More
            <span className="text-lg">☰</span>
          </button>
        </div>
      </div>

      {/* ----- Mobile Full Menu with Glassmorphism ----- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed bottom-24 left-4 right-4 z-50 p-6 mx-auto max-w-xl rounded-2xl bg-white/10 backdrop-filter backdrop-blur-lg border border-white/20 shadow-2xl md:hidden"
          >
            <ul className="flex flex-col gap-3 font-montserrat">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      item.label === "Portfolio"
                        ? "bg-neutral-800 text-white font-semibold hover:bg-blue-400 hover:text-white transition-transform duration-300 ease-in-out justify-center"
                        : "text-slate-800 hover:bg-white/20 hover:backdrop-blur-sm"
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
