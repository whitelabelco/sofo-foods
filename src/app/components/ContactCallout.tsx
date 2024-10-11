"use client";

import React from 'react';
import { useRouter } from 'next/navigation'

import Text from './Text';
import Button from './Button';

const ContactCallout = () => {
    const router = useRouter()

  return (
    <section className="flex justify-center items-center overflow-hidden md:my-40">
        <div className="bg-contact-callout bg-cover w-full h-[530px] md:w-[834px] md:h-[434px] lg:w-[69vw] xl:w-screen-2xl flex flex-col items-center justify-center gap-8 md:gap-6 text-center md:rounded-2xl">
            <div className="w-[256px] md:w-[774px] md:h-[171px] lg:w-[732px] flex flex-col gap-4">
                <Text variant="headlineXl" className="text-white">
                    Give us a Call
                </Text>
                <Text variant="paragraph" className="text-white/70">
                    Our pride and dedication to quality Italian foods led us to create our own family
                    of brands which we have been developing over the decades. Each of our family brands
                    represents a commitment to quality, flavor and consistency.
                </Text>
            </div>
            <div className="w-[256px] h-[110px] md:w-[351px] md:h-[47px] flex flex-col md:flex-row gap-4 md:gap-6">
                <Button onClick={() => router.push('/contact')} variant="blueText">Get in touch</Button>
                <Button onClick={() => router.push('/order')} variant="transparentWhite">Place an order</Button>
            </div>
        </div>
    </section>
  );
};

export default ContactCallout;
