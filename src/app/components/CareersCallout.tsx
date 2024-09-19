"use client";

import React from 'react';

import Text from './Text';
import Button from './Button';
import Tag from './Tag';

const CareersCallout = () => {
  return (
    <div className="flex flex-row justify-center items-center px-0 lg:px-20 pt-[448px] pb-10 gap-20 isolate order-2 flex-none grow-0 relative w-[320px] h-[1070px] md:h-[893px] md:w-[1440px] bg-darkest">
        <div className="absolute bg-careers-callout bg-cover w-[320px] h-[476px] bg-center top-[-2px] md:w-[1440px] md:h-[893px] md:-top-[150px] left-1/2 transform -translate-x-1/2 lg:-top-[250px] z-0"></div>
            <div className="flex flex-col justify-center items-center m-14 gap-8 bg-darkest/30 backdrop-blur-[58px] md:rounded-2xl order-1 z-1">
                <div className="flex flex-col items-center p-8 gap-8 w-[272px] md:w-[690px] lg:w-[814px] text-center">
                    <Tag>Now Hiring</Tag>
                    <Text variant="headlineXl" className="text-white">
                        Start Your New Career
                    </Text>
                    <Text variant="paragraph" className="text-white/70">
                        Our pride and dedication to quality Italian foods led us to create our own family
                        of brands which we have been developing over the decades. Each of our family brands
                        represents a commitment to quality, flavor and consistency.
                    </Text>
                </div>
                <div className="flex flex-row items-start gap-6 w-[137px] h-[47px]">
                    <Button onClick={() => console.log("clicked")} variant="blackText">Apply now</Button>
                </div>
        </div>
     </div>
  );
};

export default CareersCallout;
