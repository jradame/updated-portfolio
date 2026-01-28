import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const roles = ["Frontend Developer", "UI/UX Designer"];

const Hero = ({ loading }) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = deleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const nextLength = charIndex + 1;
        setText(currentRole.slice(0, nextLength));
        setCharIndex(nextLength);

        if (nextLength === currentRole.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const nextLength = charIndex - 1;
        setText(currentRole.slice(0, nextLength));
        setCharIndex(nextLength);

        if (nextLength === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 bg-black text-white">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-40 h-40 flex-shrink-0">
          {loading ? (
            <Skeleton circle height={160} width={160} />
          ) : (
            <img
              src="/images/justin3.png"
              alt="Justin Adame"
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
          )}
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          {loading ? (
            <>
              <Skeleton height={60} width="80%" />
              <Skeleton height={30} width="90%" className="mt-4" />
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <Skeleton width={150} height={50} />
                <Skeleton width={150} height={50} />
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-bold mb-3">
                Hi, I am{" "}
                <span className="text-indigo-400">JUSTIN ADAME</span>
              </h1>

              {/* Typing line */}
              <p className="text-xl mb-2">
                I&apos;m a{" "}
                <span className="text-indigo-400 font-semibold">
                  {text}
                </span>
                <span className="blinking-cursor">|</span>
              </p>

              {/* Static supporting sentence */}
              <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
                I design and build responsive, production-ready interfaces in
                React with a heavy focus on layout, typography, and polish.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
