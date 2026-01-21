import { useEffect, useState } from "react";

const Modal = ({ isOpen, modalType, onClose }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      setIsVisible(false);
      const timeout = setTimeout(() => setShouldRender(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      {/* Container */}
      <div
        className="relative w-full max-w-5xl h-[500px] flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-indigo-400 transition z-50"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* LEFT PANEL — ABOUT */}
        <div
          className={`w-1/2 h-full bg-zinc-900 text-white p-8 flex flex-col justify-center
            ${isVisible ? "animate-slide-in-left" : ""}`}
        >
          {modalType === "about" && (
            <>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-300 mb-6">
                I’m a frontend developer focused on building clean, responsive,
                and user‑friendly interfaces using modern tools like React,
                Tailwind, and Vite.
              </p>

              <div className="flex gap-4 flex-wrap">
                <span className="px-3 py-1 rounded bg-indigo-500/20 text-indigo-400">
                  React
                </span>
                <span className="px-3 py-1 rounded bg-indigo-500/20 text-indigo-400">
                  Tailwind
                </span>
                <span className="px-3 py-1 rounded bg-indigo-500/20 text-indigo-400">
                  JavaScript
                </span>
                <span className="px-3 py-1 rounded bg-indigo-500/20 text-indigo-400">
                  UI/UX
                </span>
              </div>
            </>
          )}
        </div>

        {/* RIGHT PANEL — CONTACT */}
        <div
          className={`w-1/2 h-full bg-zinc-800 text-white p-8 flex flex-col justify-center
            ${isVisible ? "animate-slide-in-right" : ""}`}
        >
          {modalType === "contact" && (
            <>
              <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-zinc-900 border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:border-indigo-400"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-zinc-900 border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:border-indigo-400"
                />
                <textarea
                  rows="4"
                  placeholder="Your message"
                  className="bg-zinc-900 border border-zinc-700 rounded px-4 py-2 focus:outline-none focus:border-indigo-400"
                />
                <button
                  type="submit"
                  className="mt-2 bg-indigo-500 hover:bg-indigo-600 transition rounded px-6 py-2 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
