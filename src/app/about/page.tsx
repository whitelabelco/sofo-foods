"use client";

import React from "react";
import { useRouter } from 'next/navigation'

import CareersCallout from "../components/CareersCallout";
import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Text from "../components/Text";
import Button from "../components/Button";
import Image from "next/image";

export default function About() {
  const router = useRouter()

  const aboutParagraph = "Going strategies identify in framework evolved keeping day offline. Mentality indicators your robust agile inside devops."

  const aboutSofo = (
    <section className="flex justify-center items-center h-[250px] md:h-[413px] overflow-hidden my-8">
      <div className="flex flex-col w-[342px] md:w-[764px] justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center text-center gap-8">
          <Text variant="headlineXl">About Sofo</Text>
          <span className="md:hidden flex flex-col gap-8">
            <Text variant="paragraph" className="text-darkest/70">{aboutParagraph}</Text>
          </span>
          <span className="hidden md:flex flex-col gap-8">
            <Text variant="paragraphL" className="text-darkest/70">{aboutParagraph}</Text>
          </span>
        </div>
        <div className="flex flex-row gap-6">
          <span className="inline-flex">
            <Button onClick={() => router.push('/products')} variant="red">Our products</Button>
          </span>
        </div>
      </div>
    </section>
  )

  const aboutSofoHeroImage = (
    <section className="flex justify-center items-center overflow-hidden my-4">
      <Image className="lg:max-w-screen" src="/images/corporate-office.webp" alt="Corporate office" width={1920} height={1080} />
    </section>
  )

    return (
      <div>
      <Header />
        {aboutSofo}
        {aboutSofoHeroImage}
      <ContactCallout />
      <CareersCallout />
      <Footer />
    </div>
    );
  }