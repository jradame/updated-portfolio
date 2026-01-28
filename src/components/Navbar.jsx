import React from "react";

const Navbar = ({ openModal }) => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src="/images/justin3.png"
            alt="Justin Adame"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-lg font-bold tracking-wide">
            Justin Adame
          </span>
        </div>

        {/* Navigation */}
        <nav className="space-x-6 text-sm font-medium">
          <button
            onClick={() => openModal("about")}
            className="hover:text-indigo-400 transition"
          >
            About
          </button>
          <a
            href="#projects"
            className="hover:text-indigo-400 transition"
          >
            Projects
          </a>
          <button
            onClick={() => openModal("contact")}
            className="hover:text-indigo-400 transition"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
