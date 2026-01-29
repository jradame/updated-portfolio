import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Modal from "./components/Modal";
import Projects from "./components/Projects";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
  };

  return (
    <>
      <Navbar openModal={openModal} />
      <main className="pt-16">
        <Hero loading={false} />
        <Projects /> {/* hero on top, row of 4 cards right below */}
      </main>
      <Modal
        isOpen={modalOpen}
        modalType={modalType}
        onClose={closeModal}
      />
    </>
  );
}

export default App;
