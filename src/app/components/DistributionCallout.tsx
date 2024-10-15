"use client";

import React from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

import Text from './Text';
import Button from './Button';
import Tag from './Tag';

const DistributionCallout = () => {
    const router = useRouter()

  return (
    <section className="flex lg:flex-row justify-center items-center bg-lightest-blue h-[611px] md:h-[542px] overflow-hidden lg:my-20">
        <div className="flex flex-col lg:flex-row lg:max-w-screen-2xl gap-12">

            <div className="flex lg:hidden items-center">
                <Image className="max-w-none rounded-lg object-cover w-[340px] sm:w-[600px] md:w-[450px]" src="/images/map.webp" alt="Distribution Map" width={800} height={800} />
            </div>

            <div className="flex flex-col gap-8 mx-8 md:mx-4">
            <div className="flex flex-col gap-8">
                <div className="flex flex-row justify-start">
                    <Tag>Distribution</Tag>
                </div>
                <Text variant="headlineXl">Distribution</Text>
                <span className="flex flex-col gap-8">
                <Text variant="paragraph" className="text-darkest/70">Content TBD...</Text>
                </span>
            </div>
            <div className="flex flex-row">
                <span className="inline-flex">
                    <Button onClick={() => router.push('/distribution')} variant="blueText">Distribution</Button>
                </span>
            </div>
            </div>

            <div className="hidden lg:flex justify-center items-center lg:mb-2">
                <Image className="max-w-none rounded-lg object-cover lg:w-[800px]" src="/images/map.webp" alt="Distribution Map" width={800} height={800} />
            </div>
        </div>
    </section>
  );
};

export default DistributionCallout;