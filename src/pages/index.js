import Head from "next/head";
import Image from "next/image";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { appsApi } from "../utils/api";

import PageHead from "../components/PageHead";
import Navbar from "../components/Navbar";
import MainHeading from "../components/MainHeading";
import Services from "../components/Services";
import Insights from "../components/Insights";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import AnimatedParallax from "../components/AnimatedParallax";
import ContactModal from "../components/ContactModal";

export default function Home({ data, seo }) {
  const [visibleSection, setVisibleSection] = useState("");
  const [visibleSectionTime, setVisibleSectionTime] = useState(0);
  const [displayNav1, setDisplayNav1] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  // data from api
  // console.log(data);
  const faqdata = data?.faq;
  const parallaxData = data?.ourProcessSection;
  const serviceData = data?.serviceSection;
  const insightsData = data?.insightSection;
  const mainHeadingData = data?.heroSection;
  const testimonialData = data?.testimonial;
  // console.log(testimonialData);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", path: "#" },
        { id: "services", path: "/#services" },
        { id: "process", path: "/#process" },
        { id: "blogs", path: "/#blogs" },
        { id: "testimonials", path: "/#testimonials" },
        { id: "faqs", path: "/#faqs" },
        { id: "footer", path: "/#footer" },
      ];

      const visibleSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight + 50;
        }
        return false;
      });

      if (visibleSection && visibleSection.id !== visibleSectionTime) {
        setVisibleSection(visibleSection.id);
        setVisibleSectionTime(Date.now());
      }
      // Hide or display the navbar based on scroll direction
      const prevScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      window.addEventListener("scroll", () => {
        const currentScrollPos =
          window.pageYOffset || document.documentElement.scrollTop;
        if (prevScrollPos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "0";
          if (window.pageYOffset > 0) {
            setDisplayNav1(false);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substr(1); // Remove the leading '#'

      if (hash !== visibleSection) {
        setVisibleSection(hash);
        setVisibleSectionTime(Date.now());
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleSection && Date.now() - visibleSectionTime >= 200) {
        const hash = `#${visibleSection}`;
        if (window.location.hash !== hash) {
          const scrollY =
            window.pageYOffset || document.documentElement.scrollTop;
          window.location.hash = hash;
          restoreScrollPosition(scrollY); // Restore the scroll position
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [visibleSection, visibleSectionTime]);

  const restoreScrollPosition = (scrollY) => {
    if (scrollY !== undefined) {
      setTimeout(() => {
        window.scrollTo(0, scrollY);
      }, 0);
    }
  };

  // ...

  return (
    <>
      {/* <Head>
        <title>Super Minds</title>

        <meta name="description" content="Web Services for all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head> */}
      <PageHead seo={seo} />
      <main className="bg-black min-h-screen w-full max-width scroll-smooth main-section">
        <div
          className="flex w-full fixed top-0 transition-all duration-500 z-10"
          id="navbar">
          <Navbar
            setIsOpen={setIsOpen}
            displayNav1={displayNav1}
            currentHash={currentHash}
          />
        </div>
        {isOpen && (
          <ContactModal
            setIsOpen={setIsOpen}
            styles={"inset-0"}
            Data={serviceData}
          />
        )}
        <section id="home">
          <MainHeading Data={mainHeadingData} />
        </section>
        <section id="services">
          <Services setIsOpen={setIsOpen} Data={serviceData} />
        </section>
        <section id="process">
          <AnimatedParallax Data={parallaxData} />
        </section>
        <section id="blogs">
          <Insights Data={insightsData} />
        </section>
        <section id="testimonials">
          <Testimonials Data={testimonialData} />
        </section>
        <section id="faqs">
          <FAQ Data={faqdata} />
        </section>
        <section id="footer">
          <Footer setIsOpen={setIsOpen} />
        </section>
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
  const seo = data?.seo.find((d) => d.page === "HOME");
  return { props: { data: data, seo } };
  // return { props: { data: data } };
}
