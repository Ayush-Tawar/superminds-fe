import Head from "next/head";
import React, { useState } from "react";

import PageHead from "@/src/components/PageHead";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import FAQ from "@/src/components/FAQ";
import ContactModal from "@/src/components/ContactModal";
// import { faqData } from "@/src/utils/faqdata";
import { appsApi } from "@/src/utils/api";

export default function FaqPage({ data, seo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const faqData = data?.faq;
  const serviceData = data?.serviceSection;
  // console.log(data.results);
  const mainEntity = faqData?.map((item) => {
    return {
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    };
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mainEntity,
  };

  return (
    <>
      <PageHead structuredData={structuredData} seo={seo} />
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
        <div className="pt-8">
          <h1 className="hidden">Faq</h1> <FAQ Data={faqData} isPage />
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
  const seo = data?.seo.find((d) => d.page === "FAQ");
  return { props: { data: data, seo } };
  // return { props: { data: data } };
}
