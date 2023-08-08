import Head from "next/head";
import React, { useState } from "react";

import PageHead from "@/src/components/PageHead";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ContactModal from "@/src/components/ContactModal";
import { appsApi } from "@/src/utils/api";
import { getUrl, parseUrl } from "@/src/utils/common";

export default function ServicePage({ data, seo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  //   const TermsAndConditions = data?.cms[0];
  const serviceData = data;
  if (!serviceData?.title) return null;

  return (
    <>
      <PageHead seo={seo} structuredData={serviceData.googleSchema} />
      <main className="bg-black min-h-screen max-w-[1921px] scroll-smooth">
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
            <h1 className="font-benzgrotesk text-black font76-16 py-16 sm:pb-36 font-extrabold whitespace-nowrap">
              {serviceData.title}
            </h1>
            {/* description */}
            <div>{serviceData.description}</div>
          </div>
        </div>
        <Footer setIsOpen={setIsOpen} />
      </main>
    </>
  );
}
export const getStaticPaths = async () => {
  let paths = [];
  const response = await appsApi.get("getAllData");
  if (response.status === 200) {
    paths = response?.data?.serviceSection?.map((d) => getUrl(d.title));
  }

  return {
    paths: paths.map((path) => ({
      params: {
        service: path,
      },
    })),
    fallback: true, //false or "blocking"
  };
};

export async function getStaticProps({ params }) {
  let data = {};
  const response = await appsApi.get("getALLData");
  if (response.status === 200) {
    data = response.data?.serviceSection?.find(
      (d) => getUrl(d.title) === params.service,
    );
  }
  const seo = response?.data?.seo.find((d) => d.page === "SERVICES");
  return {
    props: {
      data: data,
      seo,
    },
  };
}
