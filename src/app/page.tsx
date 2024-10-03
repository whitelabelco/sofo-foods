"use client";

import React from "react";
import { useRouter } from 'next/navigation'

import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";
import Text from "./components/Text";

export default function Home() {
  const router = useRouter()

  const hero = (
    <section className="relative flex justify-center items-center h-[200px] md:h-[435px] mb-12 overflow-hidden">
      <div className="flex flex-col relative z-20 my-auto gap-8 -mr-14 md:mr-[10rem] lg:mr-[20rem] xl:mr-[35rem]">
          <span className="inline-flex w-[400px] md:w-[673px]">
            <Text variant="headlineXxl" className="text-white">Quality Ingredients, Dependable Service</Text>
          </span>
          <div className="flex flex-row">
            <span className="inline-flex px-2">
                <Button onClick={() => router.push('/contact')} variant="redText">Get in touch</Button>
            </span>
            <span className="hidden lg:inline-flex px-2">
                <Button onClick={() => router.push('/products')} variant="redText">Our products</Button>
            </span>
          </div>
        </div>              
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-screen"
        >
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />
          Video not supported by browser.
        </video>
    </section>
  );

  return (
    <div>
      <Header />
        {hero}
        <div className="flex items-center justify-center text-3xl my-32">next section...</div>
      <Footer />
    </div>
  );
}
