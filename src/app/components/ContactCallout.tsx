"use client";

import React from 'react';
import { useRouter } from 'next/navigation'

import Text from './Text';
import Button from './Button';

const ContactCallout = () => {
    const router = useRouter()

  return (
    <section className="flex justify-center items-center overflow-hidden sm:mx-4 sm:my-20">
        <div className="bg-contact-callout bg-cover w-screen h-[530px] md:h-[434px] lg:max-w-screen-2xl flex flex-col items-center justify-center gap-8 md:gap-6 text-center md:rounded-2xl">
            <div className="flex flex-col gap-4 mx-4 w-4/5 sm:w-4/5 lg:w-1/2">
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
