"use client";
import Hero from "./hero-section/Hero";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";
import { ScrollerMotion } from "scroller-motion";
import PreLoader from "./animations/PreLoader/PreLoader";
import { initialBlobityOptions } from "./utils/BlobityConfig";
import NavBar from "./navbar/NavBar";

import dynamic from "next/dynamic";
const Work = dynamic(() => import("./work-section/Work"));
const About = dynamic(() => import("./about-section/About"));
const Contact = dynamic(() => import("./contact-section/Contact"));
const Footer = dynamic(() => import("./footer/Footer"));

export default function Home() {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <PreLoader />

      <NavBar />

      {/* <ScrollerMotion> */}
      <main className="flex flex-col items-center justify-center">
        <Hero />
        <Work />
        <About />
        <Contact />
        <Footer />
      </main>
      {/* </ScrollerMotion> */}
    </>
  );
}
