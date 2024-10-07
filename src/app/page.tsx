"use client";

import React from "react";
import { useRouter } from 'next/navigation'

import BrandsCallout from "./components/BrandsCallout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";
import Text from "./components/Text";

export default function Home() {
  const router = useRouter()

  const hero = (
    <section className="relative flex justify-center items-center h-[200px] md:h-[435px] overflow-hidden">
      <div className="flex flex-col relative z-20 my-auto gap-8 -mr-14 md:mr-[10rem] lg:mr-[20rem] xl:mr-[35rem]">
          <span className="inline-flex w-[400px] md:w-[673px]">
            <Text variant="headlineXxl" className="text-white">Quality Ingredients, Dependable Service</Text>
          </span>
          <div className="flex flex-row gap-4">
            <span className="inline-flex">
                <Button onClick={() => router.push('/contact')} variant="redText">Get in touch</Button>
            </span>
            <span className="hidden lg:inline-flex">
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

  const welcomeParagraph = `With over 75 years of experience, Sofo Foods is one of the Midwest's largest family-owned foodservice distributor. 
              Our deep roots in Italian cuisine have expanded over the decades, allowing us to supply a diverse range of top-quality food products to restaurants of all kinds. 
              As a family-operated business, our dedication to exceptional quality and service is unmatched in the industry.`
  
  const welcome = (
    <section className="flex justify-center items-center bg-tan h-[467px] md:h-[603px] overflow-hidden">
      <div className="flex flex-col w-[342px] md:w-[764px] justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center text-center gap-8">
          <Text variant="paragraphSans" className="text-red uppercase font-bold">Welcome</Text>
          <Text variant="headline" className="uppercase">- Hello from Sofo -</Text>
          <span className="md:hidden flex flex-col gap-8">
            <Text variant="paragraph" className="text-darkest/70">{welcomeParagraph}</Text>
          </span>
          <span className="hidden md:flex flex-col gap-8">
            <Text variant="paragraphL" className="text-darkest/70">{welcomeParagraph}</Text>
          </span>
        </div>
        <div className="flex flex-row gap-6">
          <span className="inline-flex">
            <Button onClick={() => router.push('/about')} variant="transparentBlack">About sofo</Button>
          </span>
          <span className="inline-flex">
            <Button onClick={() => router.push('/history')} variant="transparentBlack">Our history</Button>
          </span>
        </div>
      </div>
    </section>
  )

  return (
    <div>
      <Header />
        {hero}
        {welcome}
        <BrandsCallout />
        <div className="flex items-center justify-center text-3xl my-32">next section...</div>
      <Footer />
    </div>
  );
}
