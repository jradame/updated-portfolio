import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

const techStack = [
  { icon: faHtml5, label: "HTML5", color: "text-[#E44D26]" },
  { icon: faCss3Alt, label: "CSS3", color: "text-[#1572B6]" },
  { icon: faJs, label: "JavaScript", color: "text-[#F0DB4F]" },
  { icon: faReact, label: "React", color: "text-[#61DAFB]" },
  { icon: faFigma, label: "Figma", color: "text-[#A259FF]" },
];

const Modal = ({ isOpen, onClose, modalType }) => {
  const [isClosing, setIsClosing] = useState(false);

  // If not open and not playing close animation, don’t render
  if (!isOpen && !isClosing) return null;

  const isContact = modalType === "contact";

  const startClose = () => {
    setIsClosing(true);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      startClose();
    }
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      setIsClosing(false);
      onClose();
    }
  };

  const animationClass = (() => {
    if (isClosing) {
      // Exit directions
      return isContact
        ? "animate-slide-out-left"
        : "animate-slide-out-right";
    }
    // Enter directions
    return isContact
      ? "animate-slide-in-right"
      : "animate-slide-in-left";
  })();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={handleBackdropClick}
    >
      <div
        className={`
          relative w-full max-w-xl bg-gray-900 text-white rounded-xl
          p-8 shadow-2xl min-h-[420px] flex
          ${animationClass}
        `}
        onAnimationEnd={handleAnimationEnd}
      >
        {/* Close button */}
        <button
          onClick={startClose}
          className="absolute top-4 right-4 text-white text-2xl leading-none"
          aria-label="Close"
        >
          &times;
        </button>

        {isContact ? (
          // CONTACT CARD
          <div className="flex flex-col h-full w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Let&apos;s work together
            </h2>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-6">
              If you&apos;re looking for a frontend developer who cares about
              details, performance, and clean UI, drop a message below and
              we&apos;ll get something on the calendar.
            </p>

            <form className="space-y-4 mt-auto">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me a little about the project or role..."
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-semibold"
              >
                Send message
              </button>
            </form>
          </div>
        ) : (
          // ABOUT CARD
          <div className="flex flex-col h-full w-full">
            <h2 className="text-3xl font-bold mb-4">About me</h2>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-4">
              I&apos;m Justin Adame, a frontend developer and UI/UX designer
              focused on clean, responsive interfaces and production-ready React
              builds.
            </p>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-4">
              I care a lot about spacing, typography, and the small details that
              make a layout feel intentional rather than generic.
            </p>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Most of my work leans on React, JavaScript, and modern CSS, with
              an emphasis on smooth flows, readable code, and interfaces that
              feel good to use on both desktop and mobile.
            </p>

            {/* Tech icons at bottom */}
            <div className="grid grid-cols-5 gap-4 justify-items-center mt-8 md:mt-10 pt-4 border-t border-gray-800 mt-auto">
              {techStack.map(({ icon, label, color }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 p-2 bg-gray-800 rounded-lg"
                >
                  <FontAwesomeIcon icon={icon} className={`${color} text-3xl`} />
                  <span className="text-xs font-medium text-gray-100">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
