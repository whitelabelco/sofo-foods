"use client";

import React from 'react';

import Image from "next/image";
import CareersCallout from "../components/CareersCallout";
import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Text from "../components/Text";
import Form from "../components/Form";

export default function Contact() {

    const heroTitle = "Get in Touch"
    const heroParagraph = "Give us a call and talk to a person."

    const contactFormSection = (
      <section className="flex flex-col md:flex-row items-center justify-center py-32 md:py-40">
        <div className="flex flex-col gap-12 md:gap-0 md:flex-row md:justify-between w-screen lg:w-1/2">
          <div className="flex md:hidden">
            <Image className="w-screen" src="/images/contact.webp" alt="Contact Portrait" width={1200} height={1200} />
          </div>
          <div className="flex flex-col px-2 md:w-1/2">
            <div className="border-b border-2 border-darkest/10 w-full mb-8 pb-4">
              <Text variant="mainNav" className="text-darkest uppercase">Send us a message</Text>
            </div>
            <Form />
          </div>
          <div className="hidden md:flex pr-2">
            <Image className="w-[350px] lg:w-[500px] object-cover rounded-xl" src="/images/contact.webp" alt="Contact Portrait" width={1200} height={1200} />
          </div>
        </div>
      </section>
    )

    return (
      <div>
        <Header />
        <Hero variant="single" title={heroTitle} paragraph={heroParagraph} firstButtonText="Online order signup" firstButtonVariant="red" firstButtonRoute="/order" />
          {contactFormSection}
        <div className="md:py-32">
          <ContactCallout />
        </div>
        <CareersCallout />
        <Footer />
      </div>
    );
  }