import React from "react";
import Image from "next/image";
import { useState } from "react";

import LetsBuildTogether from "./LetsBuildTogether";
import { getUrl } from "../utils/common";
const Services = ({ setIsOpen, Data }) => {
  const [elements, setElements] = useState(Data);
  // for changing indexing of the array data
  const handleNext = () => {
    setElements((prevState) => [prevState[1], prevState[2], prevState[0]]);
  };

  const handlePrev = () => {
    setElements((prevState) => [prevState[2], prevState[0], prevState[1]]);
  };
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-bgURL md:py-8 sm:px-8 lg:px-16 sm:mt-[2%] md:mt-[7%]">
      <div className="flex flex-row-reverse sm:flex-col items-center justify-between lg:h-[870px] w-11/12 sm:w-1/4 gap-4 sm:gap-[6rem] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-greenBg">
        <div className="custom-rotate ">
          <Image
            src={"/images/services.svg"}
            height={140}
            width={140}
            className="object-cover w-auto h-auto"
            alt="services"
          />
        </div>
        <div className="flex flex-col justify-between items-center">
          <div className="text-black sm:-rotate-90 whitespace-nowrap text-[22px] sm:text-[1.5rem] sm:mb-[40%] font-glancyrMedium font-medium">
            <p>LETS MAKE</p>
            <p>MAGIC TOGETHER</p>
          </div>
          {/* <p className="text-black whitespace-nowrap hidden sm:block font-glancyrMedium">
            NEXT NEXTEXT
          </p> */}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-auto py-6 sm:py-8 px-8 sm:px-16 w-[85%] sm:w-[75%]">
        <div className="w-full sm:w-4/5 flex flex-col justify-center items-center h-auto py-6 sm:py-8">
          <h3 className="font-benzgrotesk tracking-[19%] text-greenBg font76-16 font-extrabold text-center">
            {elements[0]?.title}
          </h3>
          <span className="text-white font-14-20 font-glancyrThin tracking-wider opacity-70 mt-[5%] mb-[10%] px-4 sm:px-0">
            {elements[0]?.description}
          </span>
          <LetsBuildTogether styles="mt-6 sm:mt-8" setIsOpen={setIsOpen} />
        </div>
        <div className="flex justify-center gap-[45%] w-full mt-[5%]">
          <div className="flex flex-col items-center xl:w-[25%]">
            <h3
              data-text={`${elements[2]?.title}`}
              className="hidden sm:block text-transparent sm:w-[85%] xl:w-[80%] 2xl:w-[185px] max-w-[185px] min-h-[104px] tracking-[19%] uppercase font14-26 font-extrabold hover:opacity-100 font-glancyrMedium transition-all duration-500 opacity-70 filling">
              {elements[2]?.title}
            </h3>
            <div
              className="flex gap-6 mt-[5%] cursor-pointer "
              onClick={handlePrev}>
              <Image
                src={"/images/previous.svg"}
                height={10}
                width={7}
                className="w-auto h-auto"
                alt="previous"
              />
              <p className="text-white font-glancyrMedium font-medium ">
                Previous
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center  xl:w-[25%]">
            <h3
              data-text={`${elements[1]?.title}`}
              className="hidden sm:block text-transparent sm:w-[85%] xl:w-[80%] 2xl:w-[185px] max-w-[185px] min-h-[104px] tracking-[19%] uppercase font14-26 font-extrabold hover:opacity-100 font-glancyrMedium transition-all duration-500 opacity-70 filling">
              {elements[1]?.title}
            </h3>
            <div
              className="flex gap-6 mt-[5%] cursor-pointer"
              onClick={handleNext}>
              <p className="text-white font-glancyrMedium font-medium ">Next</p>
              <Image
                src={"/images/next.svg"}
                height={10}
                width={7}
                alt="next"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {Data.map((v) => {
        return (
          <a
            key={v.title}
            href={`services/${getUrl(v.title)}`}
            className="hidden">
            {v.title}
          </a>
        );
      })}
    </div>
  );
};

export default Services;
