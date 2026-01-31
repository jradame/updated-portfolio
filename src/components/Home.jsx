// src/components/Home.jsx
import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Modal from "./Modal";
import Footer from "./Footer";

const Home = () => {
  const [modalType, setModalType] = useState(null); // "about" | "contact" | null

  const openModal = (type) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <>
      <Navbar openModal={openModal} />
      <Hero />
      <Projects />
      <Footer openModal={openModal} />

      <Modal
        isOpen={modalType !== null}
        modalType={modalType}
        onClose={closeModal}
      />
    </>
  );
};

export default Home;
