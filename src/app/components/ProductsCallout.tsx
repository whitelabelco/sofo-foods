"use client";

import React from 'react';
import { useRouter } from 'next/navigation'

import Text from './Text';
import Button from './Button';

interface ProductsCalloutProps {
    variant?: 'single' | 'double';
    firstButtonRoute?: string;
    secondButtonRoute?: string;
    title: string;
    paragraph: string;
    firstButtonText?: string;
    secondButtonText?: string;
    firstButtonVariant?: 'red' | 'blue' | 'green' | 'redText' | 'blackText' | 'blueText' | 'transparentBlack' | 'transparentWhite' | 'product';
    secondButtonVariant?: 'red' | 'blue' | 'green' | 'redText' | 'blackText' | 'blueText' | 'transparentBlack' | 'transparentWhite' | 'product';
}

const ProductsCallout: React.FC<ProductsCalloutProps> = ({ variant = "single", firstButtonRoute = "/", secondButtonRoute = "/", title, paragraph, firstButtonText, secondButtonText, firstButtonVariant, secondButtonVariant }) => {
    const router = useRouter()

    const common = (
        <div className="flex flex-col justify-center items-center text-center gap-4">
            <Text variant="headlineXl" className={variant === "double" ? "text-white" : ""}>{title}</Text>
            <Text variant="paragraph" className={variant === "double" ? "text-white" : "text-darkest/70"}>{paragraph}</Text>
        </div>
    )

    const firstButton = (
        <span className="inline-flex">
            <Button onClick={() => router.push(`${firstButtonRoute}`)} variant={firstButtonVariant}>{firstButtonText}</Button>
        </span>
    )

    const secondButton = (
        <span className="inline-flex">
            <Button onClick={() => router.push(`${secondButtonRoute}`)} variant={secondButtonVariant}>{secondButtonText}</Button>
        </span>
    )

    return (
        <>
        { variant === 'single' && (
            <section className="flex flex-col justify-center items-center overflow-hidden">
                <div className="bg-products-callout bg-cover bg-top w-full h-[140px] md:h-[282px] lg:h-[520px] xl:h-[700px] z-0"></div>
                <div className="flex flex-col justify-center items-center gap-8 w-[342px] sm:w-[450px] md:w-[914px] z-10">
                    {common}
                    <div className="flex flex-row justify-center items-center gap-6">
                        {firstButton}
                    </div>
                </div>
            </section>
        )}
        { variant === 'double' && (
            <section className="flex flex-col gap-12 justify-center items-center h-[564px] md:h-[622px] mt-4 md:mt-0 overflow-hidden bg-products-hero bg-cover bg-right">
            <div className="flex flex-col w-[342px] md:w-[674px] justify-center items-center gap-8">
                {common}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    {firstButton}
                    {secondButton}
                </div>
            </div>
            </section>
        )}
        </>
    );
};

export default ProductsCallout;