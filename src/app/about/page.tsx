"use client";

import React from "react";
import { useRouter } from 'next/navigation'
import Image from "next/image";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Text from "../components/Text";
import Button from "../components/Button";
import Tag from "../components/Tag";

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

  const aboutTagSection = (
    <section className="flex md:flex-row justify-center items-center my-4 md:h-[566px] overflow-hidden">
      <div className="flex flex-col sm:flex-row lg:max-w-screen-xl gap-8 sm:gap-0 lg:gap-32">

          <div className="flex mx-2 items-center justify-center">
            <Image className="max-w-none rounded-lg object-cover w-[350px] sm:w-[373px] lg:w-[500px]" src="/images/group-about.webp" alt="Pizza" width={800} height={800} />
          </div>

          <div className="flex flex-col gap-8 mx-8 md:mx-2 items-center justify-center">
            <div className="flex flex-col gap-4 md:gap-8">
                <div className="flex flex-row justify-start">
                    <Tag>About Sofo</Tag>
                </div>
                <Text variant="headlineXl">Headline about Sofo</Text>
                <span className="flex flex-col gap-8">
                <Text variant="paragraph" className="text-darkest/70">
                  In the late 1920’s, Antonio Sofo made the journey from Italy to New York City aboard the Dante Alighieri. 
                  At just 14 years old, he worked as a furnace attendant shoveling coal for the E.W. Bliss Company, a machine manufacturer based in Brooklyn, New York. 
                  Eventually work was contracted out across the country and Antonio was moved to Toledo, Ohio.
                </Text>
                </span>
            </div>
          </div>
      </div>
    </section>
  )

    return (
      <div>
      <Header />
        {aboutSofo}
        {aboutSofoHeroImage}
        {aboutTagSection}
      <Footer />
    </div>
    );
  }