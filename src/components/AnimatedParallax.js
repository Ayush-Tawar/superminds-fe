import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { MEDIA_URL } from "../utils/api";

// gsap.registerPlugin(ScrollTrigger);
export default function AnimatedParallex({ Data }) {
  const [currentIndex, setCurrentIndex] = useState(1);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const headingRef = useRef(null);
  //   const userAgent =
  //   typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
  // const isMobile =
  //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //     userAgent,
  //   );
  useLayoutEffect(() => {
    // if (typeof window !== "undefined") {
    //   gsap.registerPlugin(ScrollTrigger);
    // }
    gsap.registerPlugin(ScrollTrigger);
    const pin = gsap.to(sectionRef.current, {
      x: () => {
        // for scrolling horizontally for mobile devices upto 420px
        if (window.innerWidth < 420) {
          return -(sectionRef.current.offsetWidth - window.innerWidth) / 1.12;
        }
        // for scrolling horizontally for mobile devices from  420px to 576px
        else if (window.innerWidth < 576) {
          return -(sectionRef.current.offsetWidth - window.innerWidth) / 1.2;
        }
        // for tablet and small laptops
        else if (window.innerWidth > 900) {
          return -(sectionRef.current.offsetWidth - window.innerWidth) / 1.5;
        } else {
          return -(sectionRef.current.offsetWidth - window.innerWidth) / 1.3;
        }
      },
      ease: "power1.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "1500 center",
        scrub: 0.5,
        pin: true,
        // onUpdate prop used for getting current index of the element
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.ceil(progress * Data?.length);
          setCurrentIndex(index);
        },
      },
    });
    // for scrolling heading
    const headingPin = gsap.fromTo(
      headingRef.current,
      {
        translateX: 0,
      },

      {
        translateX: "-150px",
        ease: "power1.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1500 center",
          scrub: 0,
        },
      },
    );
    return () => {
      pin.kill();
      headingPin.kill();
    };
  }, []);
  // useEffect(() => {
  //   ScrollTrigger.refresh();
  // }, []);

  return (
    <>
      <div className="section-parallex" ref={triggerRef}>
        <div className="section-parallex-headings">
          <span className="section-parallex-counting">
            {currentIndex}/{Data?.length}
          </span>
          <p className="section-parallex-p">Step-by-Step magic</p>
        </div>
        <div className="animated-parallex-container">
          <section className="scroll-section-outer">
            <h2 className="parallex-animated-heading" ref={headingRef}>
              THE PROCESS
            </h2>
            <div ref={sectionRef} className="scroll-section-inner" id="">
              {Data?.map((item, index) => (
                <div
                  className="scroll-section width214-460 height214-460 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                  key={index}>
                  <div className="relative width214-460 height214-460">
                    <Image
                      src={`${MEDIA_URL}/${item.ourProcessSectionImage}`}
                      className=""
                      alt={`${MEDIA_URL}/${item.imgAltText}`}
                      fill
                    />
                  </div>
                  <p className="parallex-image-label">{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
