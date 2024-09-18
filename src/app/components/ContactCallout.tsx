"use client";

import React from 'react';

import Text from './Text';
import Button from './Button';

const ContactCallout = () => {
  return (
    <div className="bg-contact-callout bg-cover w-[320px] h-[530px] md:w-[834px] md:h-[434px] lg:w-[69vw] xl:w-[75vw] flex flex-col items-center justify-center gap-8 md:gap-6 text-center md:rounded-2xl xl:rounded-none">
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
            <Button onClick={() => console.log("top clicked")} variant="blueText">Get in touch</Button>
            <Button onClick={() => console.log("bottom clicked")} variant="transparentWhite">Place an order</Button>
        </div>
    </div>
  );
};

export default ContactCallout;
