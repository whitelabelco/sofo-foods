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

            <div className="grid grid-rows-2 grid-cols-2 mx-8 md:mx-2 md:gap-x-4 gap-y-2">
                <div className="flex justify-center items-center row-span-1 lg:mb-2">
                    <Image className="max-w-none rounded-lg object-cover w-[140px] md:w-[240px]" src="/images/cs-1.png" alt="Pizza" width={800} height={800} />
                </div>
                <div className="flex justify-center items-center row-span-2 lg:mb-1">
                    <Image className="max-w-none rounded-lg h-full object-cover w-[140px] md:w-[160px] lg:w-[200px] h-[200px] md:h-[280px] lg:h-[350px]" src="/images/cs-3.png" alt="Pizza" width={800} height={800} />
                </div>
                <div className="flex justify-center items-center row-span-2">
                    <Image className="max-w-none rounded-lg object-cover w-[140px] md:w-[240px]" src="/images/cs-2.png" alt="Tomato" width={800} height={800} />
                </div>
            </div>

            <div className="flex flex-col gap-8 mx-8 md:mx-2">
            <div className="flex flex-col gap-8">
                <div className="flex flex-row justify-start">
                    <Tag>Customer Service</Tag>
                </div>
                <Text variant="headlineXl">Customer Service Headline</Text>
                <span className="flex flex-col gap-8">
                <Text variant="paragraph" className="text-darkest/70">Content TBD...</Text>
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