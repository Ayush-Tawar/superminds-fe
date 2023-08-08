import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import PageHead from "@/src/components/PageHead";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { appsApi } from "@/src/utils/api";
import GCaptcha from "@/src/components/GCaptcha";
import { SITE_DOMAIN } from "@/src/utils/api";
// import { forwardRef } from "react";
// import { useImperativeHandle } from "react";

// import InputField from "./InputField";
import InputField from "@/src/components/InputField";
import useContactForm from "@/src/components/useContactForm";
// import useContactForm from "./useContactForm";

export default function ContactPage({ data, seo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const serviceData = data?.serviceSection;
  const serviceOptions = serviceData.map((value) => value.title);
  // console.log(serviceOptions);
  //   const serviceData = data.serviceSection;
  // console.log(data.results);
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
  const router = useRouter();
  const canonicalURL = `${SITE_DOMAIN}${
    router?.asPath !== "/" ? router?.asPath : ""
  }`;

  return (
    <>
      <PageHead seo={seo} />
      {/* <Head>
        <link rel="canonical" href={canonicalURL} />
        <title>{seo?.pageTitle || "SuperMinds IT"}</title>
        <link rel="icon" href="/images/favicon.svg" />
        <meta name="title" content={seo?.seoTitle || "SuperMinds IT"} />
        <meta
          name="description"
          content={seo?.seoDescription || "SuperMinds IT"}
        />
      </Head> */}
      <main className="bg-black min-h-screen max-width scroll-smooth">
        <div
          className="flex justify-center w-full fixed top-0 transition-all duration-500 z-10"
          id="navbar">
          <Navbar
            setIsOpen={setIsOpen}
            displayNav1={false}
            currentHash={currentHash}
          />
        </div>
        {/* <div>
          {" "}
          <ContactModal
            setIsOpen={setIsOpen}
            styles={"relative bottom-12 bg-transparent"}
          />
        </div> */}
        /
        <div
          className={`flex items-center justify-center bg-bgURL p-8 sm:pt-[8%] sm:px-8 lg:px-16 z-50 bg-black bg-opacity-70 bg-transparent`}>
          <div className="flex flex-col gap-2 sm:gap-4 p-[5%] lg:p-[3%] h-[610px] xl:h-[660px] 2xl:h-[760px] width1710-270 aspect-[1710/790] bg-ContactModalBg ">
            <div className="flex items-center justify-between height1-10">
              <div className="flex items-center justify-center gap-4 sm:gap-8">
                <h1 className="font-benzgrotesk leading-[120px] font22-76 text-greenBg font-[850] uppercase">
                  Contact
                </h1>
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
              {/* <div
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
              </div> */}
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-[2%] sm:gap-[3%] lg:gap-[10%] w-full sm:w-[80%] lg:w-[75%]">
              <InputField type={"text"} placeholder={"NAME"} {...nameProps} />
              <InputField
                type={"text"}
                placeholder={"COMPANY NAME"}
                {...companyProps}
              />
              <InputField
                type={"text"}
                placeholder={"EMAIL ID"}
                {...emailProps}
              />
              <InputField
                type={"tel"}
                placeholder={"CONTACT"}
                {...contactProps}
              />
              <InputField
                options={serviceOptions}
                type={"select"}
                placeholder={"INTERESTED IN"}
                // {...interestedInProps}
              />
              <InputField
                type={"textArea"}
                placeholder={"MESSAGE"}
                {...messageProps}
              />
              <GCaptcha
                onChange={handleCaptchaToken}
                errorText={captchaError}
              />

              {/* <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded">
            <LetsBuildTogether
              styles="mt-6 sm:mt-12 lg:mt-16 ml-auto"
              setIsOpen={setIsOpen}
            />
          </button> */}
            </form>
            <div
              onClick={validate}
              style={{
                height: "auto",
                width: "10rem",
                marginRight: "0px",
                marginLeft: "auto",
              }}>
              <div
                className={`flex justify-around items-center gap-[10%] cursor-pointer w-[10rem] h-10 rounded-full bg-greenBg text-base font-semibold border-2 border-greenBg mt-16 mr-auto sm:mr-0 ml-auto filledSubmit`}>
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
        <Footer setIsOpen={setIsOpen} />
      </main>
    </>
  );
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );
  let data = {};
  const response = await appsApi.get("getALLData");
  if (response.status === 200) {
    data = response.data;
  }
  const seo = data?.seo.find((d) => d.page === "CONTACT US");
  return { props: { data: data, seo } };
  // return { props: { data: data } };
}
