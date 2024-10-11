"use client";

import React from 'react';
import { useRouter } from 'next/navigation'

import Text from './Text';
import Button from './Button';

interface HeroProps {
    variant: 'base' | 'single' | 'double';
    firstButtonRoute?: string;
    secondButtonRoute?: string;
    title: string;
    paragraph?: string;
    firstButtonText?: string;
    secondButtonText?: string;
    firstButtonVariant?: 'red' | 'blue' | 'green' | 'redText' | 'blackText' | 'blueText' | 'transparentBlack' | 'transparentWhite' | 'product';
    secondButtonVariant?: 'red' | 'blue' | 'green' | 'redText' | 'blackText' | 'blueText' | 'transparentBlack' | 'transparentWhite' | 'product';
}


const Hero: React.FC<HeroProps> = ({ variant = 'base', firstButtonRoute = "/", secondButtonRoute = "/", title, paragraph, firstButtonText, secondButtonText, firstButtonVariant, secondButtonVariant }) => {
    const router = useRouter()

    const common = (
        <div className="flex flex-col justify-center items-center text-center gap-4">
            <Text variant="headlineXl">{title}</Text>
            <span className="md:hidden flex flex-col gap-8">
                <Text variant="paragraph" className="text-darkest/70">{paragraph}</Text>
            </span>
            <span className="hidden md:flex flex-col gap-8">
                <Text variant="paragraphL" className="text-darkest/70">{paragraph}</Text>
            </span>
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
            { variant === 'base' && (
                <section className="flex flex-col justify-center items-center h-[350px] md:h-[400px] mt-4 md:mt-0 overflow-hidden">
                    <div className="flex flex-col w-[342px] md:w-[674px] justify-center items-center gap-8">
                        {common}
                    </div>
                </section>
            )}

            { variant === 'single' && (
                <section className="flex flex-col justify-center items-center h-[350px] md:h-[500px] mt-4 md:mt-0 overflow-hidden">
                    <div className="flex flex-col w-[342px] md:w-[674px] justify-center items-center gap-8">
                        {common}
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                            {firstButton}
                        </div>
                    </div>
                </section>
            )}

            { variant === 'double' && (
                <section className="relative flex justify-center items-center h-[200px] md:h-[600px] overflow-hidden">
                    <div className="flex flex-col relative z-20 my-auto gap-8 -mr-14 sm:mr-32 md:mr-[4rem] lg:mr-[20rem] xl:mr-[35rem]">
                        <span className="inline-flex w-[400px] md:w-[673px]">
                            <Text variant="headlineXxl" className="text-white">{title}</Text>
                        </span>
                        <div className="flex flex-row gap-4">
                            {firstButton}
                        <span className="hidden lg:inline-flex">
                            {secondButton}
                        </span>
                        </div>
                        </div>              
                        <video
                        autoPlay
                        loop
                        muted
                        className="absolute z-10 w-screen"
                        >
                        <source
                            src="/videos/hero.mp4"
                            type="video/mp4"
                        />
                        Video not supported by browser.
                        </video>
                </section>
            )}
        </>
    );
};

export default Hero;