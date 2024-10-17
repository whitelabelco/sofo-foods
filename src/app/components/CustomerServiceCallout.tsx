"use client";

import React from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

import Text from './Text';
import Button from './Button';
import Tag from './Tag';

const CustomerServiceCallout = () => {
    const router = useRouter()

  return (
    <section className="flex md:flex-row justify-center items-center bg-tan h-[645px] md:h-[566px] overflow-hidden">
        <div className="flex flex-col md:flex-row max-w-screen-2xl gap-12">

            <div className="flex justify-center items-center row-span-1 lg:mb-2">
                <Image className="ml-4 max-w-none rounded-lg w-[342px] lg:w-[600px]" src="/images/delivery-driver.png" alt="Pizza" width={800} height={800} />
            </div>

            <div className="flex flex-col gap-8 mx-8 md:mx-2">
            <div className="flex flex-col gap-8">
                <div className="flex flex-row justify-start">
                    <Tag>Customer Service</Tag>
                </div>
                <Text variant="headlineXl">Serving Excellence, Delivering Satisfaction</Text>
                <span className="flex flex-col gap-8">
                <Text variant="paragraph" className="text-darkest/70">
                    At Sofo Foods, we go beyond distribution, providing unparalleled customer service to ensure your culinary success.
                </Text>
                </span>
            </div>
            <div className="flex flex-row">
                <span className="inline-flex">
                    <Button onClick={() => router.push('/contact')} variant="red">Give us a call</Button>
                </span>
            </div>
            </div>
        </div>
    </section>
  );
};

export default CustomerServiceCallout;