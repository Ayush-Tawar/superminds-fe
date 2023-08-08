import Head from "next/head";
import React, { useState } from "react";

import PageHead from "@/src/components/PageHead";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ContactModal from "@/src/components/ContactModal";
import { appsApi } from "@/src/utils/api";

export default function TermsAndConditionsPage({ data, seo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const TermsAndConditions = data?.cms[0];
  const serviceData = data?.serviceSection;

  return (
    <>
      <PageHead seo={seo} />
      <main className="bg-black min-h-screen max-width scroll-smooth">
        {isOpen && (
          <ContactModal
            setIsOpen={setIsOpen}
            styles={"inset-0"}
            Data={serviceData}
          />
        )}
        <div
          className="flex justify-center w-full fixed top-0 transition-all duration-500 z-10"
          id="navbar">
          <Navbar
            setIsOpen={setIsOpen}
            displayNav1={false}
            currentHash={currentHash}
          />
        </div>
        {/* <FAQ Data={faqData} /> */}
        <div className="flex w-full bg-bgURL sm:py-16 px-8 sm:px-16 bg-greenBg max-width">
          <div className="flex w-full flex-col justify-start items-center h-auto py-6 sm:py-8 px-1 sm:px-16">
            <h2 className="font-benzgrotesk text-black font76-16 py-16 sm:pb-36 font-extrabold whitespace-nowrap">
              {`${TermsAndConditions.title}`}
              {/* title */}
            </h2>
            {/* privacy policy description */}
            <div
              className="text-start text-xl"
              dangerouslySetInnerHTML={{
                __html: TermsAndConditions.content,
              }}></div>
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
  const seo = data?.seo.find((d) => d.page === "TERMS AND CONDITIONS");
  return { props: { data: data, seo } };
  // return { props: { data: data } };
}
