// src/components/Footer.jsx
import React from "react";

const Footer = ({ openModal }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-900 bg-black text-gray-400">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 md:justify-between">
        <div>
          <p className="text-sm font-semibold text-white mb-2">
            Justin Adame • Frontend Developer & UI/UX Designer
          </p>
          <nav
            className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em]"
            aria-label="Footer navigation"
          >
            <button
              type="button"
              onClick={() => openModal && openModal("about")}
              className="hover:text-indigo-400 transition"
            >
              About
            </button>
            <a href="#projects" className="hover:text-indigo-400 transition">
              Projects
            </a>
            <button
              type="button"
              onClick={() => openModal && openModal("contact")}
              className="hover:text-indigo-400 transition"
            >
              Contact
            </button>
          </nav>
        </div>

        <p className="text-[11px] tracking-wide text-gray-500">
          © {year} Justin Adame. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
