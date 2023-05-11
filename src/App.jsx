import React, { useState } from "react";
import logo from "./logo.png";

import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Section 1 */}
      <section
        className="bg-white   w-full flex flex-col items-center justify-between tails-selected-element"
        false
      >
        <div className="relative mt-8  bg-white flex items-center justify-between top-0 w-full max-w-6xl mx-auto px-8">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="py-8 mt-6 px-8 mx-auto max-w-6xl sm:text-center lg:py-16 lg:px-12">
          <h1 className="mb-7 lg:mb-9 text-4xl font-extrabold tracking-tight leading-none text-gray-900 lg:text-5xl xl:text-6xl">
            We're Building Something Magical
          </h1>
          <p className="mb-8 lg:mb-10 text-lg font-normal max-w-3xl lg:max-w-4xl mx-auto text-gray-500 lg:text-2xl lg:leading-9">
            We're in the process of renovating our online presence. Check back
            soon for our revamped website!
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
