"use client";

import React from 'react';
import { useRouter } from 'next/navigation'

import Text from './Text';
import Button from './Button';

const ProductsCallout = () => {
    const router = useRouter()

    return (
        <section className="flex flex-col justify-center items-center overflow-hidden ">
            <div className="bg-products-callout bg-cover bg-top w-full h-[140px] md:h-[282px] lg:h-[650px] z-0"></div>
            <div className="flex flex-col justify-center items-center gap-8 w-[342px] md:w-[914px] z-10">
                <div className="flex flex-col justify-center items-center text-center gap-4">
                <Text variant="headlineXl">Products</Text>
                <Text variant="paragraph" className="text-darkest/70">
                    Our pride and dedication to quality Italian foods led us to create our own family of brands which we have been developing over the decades. 
                    Each of our family brands represents a commitment to quality, flavor and consistency.
                </Text>
                </div>
                <div className="flex flex-row justify-center items-center gap-6">
                <span className="inline-flex">
                    <Button onClick={() => router.push('/products')} variant="red">All products</Button>
                </span>
                </div>
            </div>
        </section>
    );
};

export default ProductsCallout;