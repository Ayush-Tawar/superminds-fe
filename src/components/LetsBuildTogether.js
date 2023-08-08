import React from "react";
import Image from "next/image";

const LetsBuildTogether = ({ styles, setIsOpen }) => {
  return (
    <div
      className={`flex justify-around items-center gap-[20%] cursor-pointer width395-297 height39-65 rounded-full bg-greenBg font10-20 font-semibold border-2 border-greenBg filled ${styles}`}
      onClick={() => setIsOpen(true)}>
      <div className="">
        <p className="default-text">THREE MAGIC WORDS</p>
        <p className="text-greenBg hover-text">LET&apos;S BUILD TOGETHER</p>
      </div>
      <svg
        viewBox="0 0 19 19"
        fill="none"
        className="z-10 width10-19 height10-19"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.949219 2.1875L2.94922 0.1875L18.9492 16.1875L16.9492 18.1875L0.949219 2.1875ZM10.9492 2.1875L11.9492 0.1875L12.9492 2.1875L14.9492 3.1875L12.9492 4.1875L11.9492 6.1875L10.9492 4.1875L8.94922 3.1875L10.9492 2.1875ZM2.94922 12.1875L3.94922 10.1875L4.94922 12.1875L6.94922 13.1875L4.94922 14.1875L3.94922 16.1875L2.94922 14.1875L0.949219 13.1875L2.94922 12.1875ZM1.94922 6.1875L2.94922 7.1875L1.94922 8.1875L0.949219 7.1875L1.94922 6.1875ZM15.9492 7.1875L16.9492 8.1875L15.9492 9.1875L14.9492 8.1875L15.9492 7.1875Z"
          fill="black"
          className="magic-wand"
        />
      </svg>
    </div>
  );
};

export default LetsBuildTogether;
