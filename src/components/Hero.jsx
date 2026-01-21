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
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-12 bg-black text-white">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        {/* Image container */}
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

        {/* Text Content */}
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
              <h1 className="text-4xl font-bold mb-4">
                Hi, I am <span className="text-indigo-400">JUSTIN ADAME</span>
              </h1>
              <p className="text-xl mb-6 max-w-xl">
                I specialize in{" "}
                <span className="text-indigo-400 font-semibold">{text}</span>
                <span className="blinking-cursor">|</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
