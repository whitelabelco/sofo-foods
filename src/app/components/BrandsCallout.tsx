"use client";

import React from 'react';
import { useRouter } from 'next/navigation'

import Text from './Text';
import Button from './Button';
import Image from 'next/image';

interface BrandsCalloutProps {
    backgroundImage?: boolean;

}

const BrandsCallout: React.FC<BrandsCalloutProps> = ({ backgroundImage = false }) => {
    const router = useRouter()

    const brandsParagraph = `Our passion for quality Italian foods inspired us to create our own family of brands, carefully developed over the years with restaurant owners in mind. Each of our brands reflects our dedication to delivering the best in flavor, quality, and consistency that you can rely on.`

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
        <section className={backgroundImage ? "flex flex-col gap-12 justify-center items-center h-[564px] md:h-[622px] overflow-hidden bg-brands-hero bg-cover bg-right" : "flex flex-col gap-12 justify-center items-center h-[564px] md:h-[622px] my-24 overflow-hidden"}>
            <div className="flex flex-col w-[342px] md:w-[674px] justify-center items-center gap-8">
                <div className="flex flex-col justify-center items-center text-center gap-4">
                <Text variant="headlineXl" className={backgroundImage ? "text-white" : ""}>Brands</Text>
                <Text variant="paragraph" className={backgroundImage ? "text-white" : "text-darkest/70"}>{brandsParagraph}</Text>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <span className="inline-flex">
                    <Button onClick={() => router.push('/brands')} variant={backgroundImage ? "blackText" : "red"}>More about brands</Button>
                </span>
                <span className="hidden md:inline-flex">
                    <Button onClick={() => router.push('/order')} variant={backgroundImage ? "transparentWhite" : "transparentBlack"}>Start your first order</Button>
                </span>
                </div>
            </div>
            { !backgroundImage && (
                <div className="flex flex-row w-full max-w-screen-2xl">
                    <div className="grid grid-cols-7 gap-44 md:gap-40 lg:gap-24">
                        {featuredBrands.map((brand, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <Image className="max-w-none" src={brand} alt="Brand" width={172} height={172} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default BrandsCallout;