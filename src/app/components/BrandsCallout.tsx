"use client";

import React from 'react';
import { useRouter } from 'next/navigation'

import Text from './Text';
import Button from './Button';
import Image from 'next/image';

const BrandsCallout = () => {
    const router = useRouter()

    const brandsParagraph = `Our pride and dedication to quality Italian foods led us to create our own family of brands which we have been developing over the decades. 
    Each of our family brands represents a commitment to quality, flavor and consistency.`

    const featuredBrands = [
        "/house-brands/antonio.webp",
        "/house-brands/antoniooldworld.webp",
        "/house-brands/athenafarms.webp",
        "/house-brands/belmontdairy.webp",
        "/house-brands/gina.webp",
        "/house-brands/josepes.webp",
        "/house-brands/mistodoro.webp",
    ]

    return (
        <section className="flex flex-col gap-12 justify-center items-center h-[564px] md:h-[622px] mt-4 md:mt-0 overflow-hidden">
            <div className="flex flex-col w-[342px] md:w-[674px] justify-center items-center gap-8">
                <div className="flex flex-col justify-center items-center text-center gap-4">
                <Text variant="headlineXl">Brands</Text>
                <Text variant="paragraph" className="text-darkest/70">{brandsParagraph}</Text>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <span className="inline-flex">
                    <Button onClick={() => router.push('/brands')} variant="red">More about brands</Button>
                </span>
                <span className="inline-flex">
                    <Button onClick={() => router.push('/order')} variant="transparentBlack">Start your first order</Button>
                </span>
                </div>
            </div>

            <div className="flex flex-row w-full max-w-screen-2xl">
                <div className="grid grid-cols-7 gap-44 md:gap-24">
                    {featuredBrands.map((brand, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <Image className="max-w-none" src={brand} alt="Brand" width={172} height={172} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsCallout;