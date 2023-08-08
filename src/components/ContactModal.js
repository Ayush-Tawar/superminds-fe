import React, { useEffect } from "react";
import Image from "next/image";

import { forwardRef } from "react";
import { useImperativeHandle } from "react";

import InputField from "./InputField";
import useContactForm from "./useContactForm";
// import LetsBuildTogether from "./LetsBuildTogether";
import GCaptcha from "./GCaptcha";

const ContactModal = forwardRef(({ setIsOpen, styles, Data }, ref) => {
  const serviceOptions = Data?.map((value) => value.title);
  // console.log(serviceOptions);
  useEffect(() => {
    // Add a class to the body to prevent scrolling while the modal is open
    document.body.classList.add("modal-open");

    // Remove the class when the modal is closed
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     handleSubmit(event);
  //   }
  // };

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => (document.body.style.overflow = "unset");
  // }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        show,
        hide,
      };
    },
    [],
  );

  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  const {
    nameProps,
    emailProps,
    companyProps,
    // geoInterestedProps,
    interestedInProps,
    // trafficTypesProps,
    // productInterestedProps,
    contactProps,
    messageProps,
    isSubmitting,
    validate,
    handleCaptchaToken,
    captchaError,
    resetEveryError,
  } = useContactForm(hide);
  // const commonClass =
  //   "appearance-none bg-transparent font-glancyrThin font-[200] tracking-[0.75em] w-full uppercase text-white mr-3 py-1 px-2 leading-tight focus:outline-none border-white border-opacity-[30%] border-b-[1px]";

  return (
    <div
      className={`fixed flex items-center justify-center bg-bgURL p-8 sm:py-8 sm:px-8 lg:px-16 z-50 bg-black bg-opacity-70 ${styles}`}>
      <div className="flex flex-col gap-2 sm:gap-4 p-[5%] lg:p-[3%] min-h-[620px] h-fit xl:h-[660px] 2xl:h-[700px] width1710-270 aspect-[1710/790] bg-ContactModalBg ">
        <div className="flex items-center justify-between height1-10">
          <div className="flex items-center justify-center gap-4 sm:gap-8">
            <h2 className="font-benzgrotesk leading-[120px] font22-76 text-greenBg font-[850] uppercase">
              Contact
            </h2>
            <div className="relative width16-53 -mt-[2%]">
              <Image
                src={"/images/contact.svg"}
                height={53}
                width={53}
                alt="contact us"
                className="object-cover"
              />
            </div>
          </div>
          <div
            className="relative width16-53 aspect-square cursor-pointer"
            onClick={() => {
              hide();
              resetEveryError();
            }}>
            <Image
              src={"/images/cross.svg"}
              height={53}
              width={53}
              alt="contact us"
              className="object-cover"
            />
          </div>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-[3%] lg:gap-[10%] w-full sm:w-[80%] lg:w-[75%]">
          <InputField type={"text"} placeholder={"NAME"} {...nameProps} />
          <InputField
            type={"text"}
            placeholder={"COMPANY NAME"}
            {...companyProps}
          />
          <InputField type={"text"} placeholder={"EMAIL ID"} {...emailProps} />
          <InputField type={"tel"} placeholder={"CONTACT"} {...contactProps} />
          <InputField
            options={serviceOptions}
            type={"select"}
            placeholder={"INTERESTED IN"}
            {...interestedInProps}
          />
          <InputField
            type={"textArea"}
            placeholder={"MESSAGE"}
            {...messageProps}
          />
          <GCaptcha onChange={handleCaptchaToken} errorText={captchaError} />
        </form>
        <div
          onClick={validate}
          style={{
            height: "auto",
            width: "10rem",
            marginRight: "0px",
            marginLeft: "auto",
          }}>
          {/* submit button */}
          <div
            className={`flex justify-around items-center gap-[10%] cursor-pointer w-[10rem] h-10 rounded-full bg-greenBg text-base font-semibold border-2 border-greenBg mt-[45%] sm:mt-12 mr-auto sm:mr-0 ml-auto filledSubmit`}>
            <div className="">
              <p className="default-text uppercase">LET&apos;S GO</p>
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
        </div>
      </div>
    </div>
  );
});

ContactModal.displayName = "ContactModal";
export default ContactModal;
