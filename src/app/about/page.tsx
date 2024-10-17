"use client";

import React from "react";
import { useRouter } from 'next/navigation'
import Image from "next/image";

import CareersCallout from "../components/CareersCallout";
import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Text from "../components/Text";
import Button from "../components/Button";
import Tag from "../components/Tag";
import Hero from "../components/Hero";

export default function About() {
  const router = useRouter()

  const heroTitle = "About Sofo"
  const heroParagraph = "Going strategies identify in framework evolved keeping day offline. Mentality indicators your robust agile inside devops."

  const aboutSofoHeroImage = (
    <section className="flex justify-center items-center overflow-hidden mb-20">
      <Image className="lg:max-w-screen" src="/images/corporate-office.webp" alt="Corporate office" width={1920} height={1080} />
    </section>
  )

  const aboutTagSection = (
    <section className="flex md:flex-row justify-center items-center my-4 md:h-[566px] overflow-hidden">
      <div className="flex flex-col sm:flex-row lg:max-w-screen-2xl gap-8 sm:gap-0 lg:gap-32 border-b border-darkest/10">

          <div className="flex mx-2 items-center justify-center mb-12">
            <Image className="max-w-none rounded-lg object-cover w-[350px] sm:w-[373px] lg:w-[500px]" src="/images/group-about.webp" alt="Pizza" width={800} height={800} />
          </div>

          <div className="flex flex-col gap-8 mx-8 md:mx-2 items-center justify-center my-12">
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

  const historicalVideo = (
    <section className="flex justify-center items-center bg-tan overflow-hidden py-8">
      <iframe
        className="h-[194px] sm:h-[380px] md:h-[620px] lg:h-[840px]"
        width="1280"
        height="841"
        src="https://www.youtube.com/embed/n_XeCn3B630?si=u5smnZr0FM8O5VsU"
        title="Sofo History Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
    </section>
  )

  const historyTagSection = (
    <section className="flex md:flex-row justify-center items-center my-4 md:h-[566px] overflow-hidden">
      <div className="flex flex-col sm:flex-row lg:max-w-screen-2xl gap-8 sm:gap-0 lg:gap-32 border-b border-darkest/10">

          <div className="flex flex-col gap-8 mx-8 md:mx-2 items-center justify-center my-12">
            <div className="flex flex-col gap-4 md:gap-8">
                <div className="flex flex-row justify-start">
                    <Tag>History</Tag>
                </div>
                <Text variant="headlineXl">A Taste of Italy in Toledo: The Rise of Sofo Foods</Text>
                <span className="flex flex-col gap-8">
                <Text variant="paragraph" className="text-darkest/70">
                  Antonio Sofo&apos;s journey from Italy to Toledo in the 1920s sparked a family legacy that transformed from 
                  selling authentic Italian foods to establishing Sofo Foods, a major wholesale distributor and retailer of Italian
                  products across the Midwest, built on a foundation of quality, innovation, and family tradition.
                </Text>
                </span>
                <span className="inline-flex">
                  <Button onClick={() => router.push('/history')} variant="transparentBlack">Our history</Button>
                </span>
            </div>
          </div>

          <div className="flex mx-2 items-center justify-center mb-12">
            <Image className="max-w-none rounded-lg object-cover w-[350px] sm:w-[373px] lg:w-[500px]" src="/images/group-history.webp" alt="Pizza" width={800} height={800} />
          </div>
      </div>
    </section>
  )

  const team = [
    {name: "Name", title: "President, CEO"},
    {name: "Name", title: "President, CEO"},
    {name: "Name", title: "President, CEO"},
    {name: "Name", title: "President, CEO"},
    {name: "Name", title: "President, CEO"},
    {name: "Name", title: "President, CEO"},
    {name: "Name", title: "President, CEO"},
    {name: "Name", title: "President, CEO"}
  ]

  const teamParagraph = "Approaches generation derive line in additional focusing empowerment. Up generated runway domination devops start grow deep collaborative from strategies provide from."

  const teamSection = (
    <>
      <section className="flex justify-center items-center h-[250px] overflow-hidden my-8">
        <div className="flex flex-col w-[342px] md:w-[764px] justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center text-center gap-8">
            <Text variant="headlineXl">Our Team</Text>
            <span className="md:hidden flex flex-col gap-8">
              <Text variant="paragraph" className="text-darkest/70">{teamParagraph}</Text>
            </span>
            <span className="hidden md:flex flex-col gap-8">
              <Text variant="paragraphL" className="text-darkest/70">{teamParagraph}</Text>
            </span>
          </div>
        </div>
      </section>
      
      <div className="flex flex-col items-center justify-center my-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 max-w-screen-xl">
            {team.map((member, index) => (
                <div key={index} className="grid grid-cols-1 justify-center items-center">
                  <div className="mx-2">
                    <Image className="w-[200px] sm:w-[250px] lg:w-full rounded-lg md:rounded-2xl" src="/images/team-placeholder.png" alt="Team member" width={800} height={800} />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                  <Text variant="mainNav">{member.name}</Text>
                  <Text variant="paragraph" className="!font-roboto-condensed !text-blue !text-base">{member.title}</Text>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )

    return (
      <div>
      <Header />
      <Hero variant="single" title={heroTitle} paragraph={heroParagraph} firstButtonText="Our products" firstButtonVariant="red" firstButtonRoute="/products" />
        {aboutSofoHeroImage}
        {aboutTagSection}
        {historicalVideo}
        {historyTagSection}
        {teamSection}
      <ContactCallout />
      <CareersCallout />
      <Footer />
    </div>
    );
  }