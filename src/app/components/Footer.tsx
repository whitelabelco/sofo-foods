"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import Link from './FooterLink';
import Text from './Text';
import FormField from './InputForm';

const Footer = () => {
    const [value, setValue] = useState("");

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setValue(event.target.value)
    }

    const company = (
        <Text variant="mainNav" className="text-white uppercase pt-8 md:pt-4">Company</Text>
    )

    const companyLinks = [
        <Link key={0} href="/">Home</Link>,
        <Link key={1} href="/about">About Us</Link>,
        <Link key={2} href="/brands">Brands</Link>,
        <Link key={3} href="/products">Products</Link>,
        <Link key={4} href="/careers">Careers</Link>,
        <Link key={5} href="/order">Online Ordering Signup</Link>
    ]

    const external = (
        <Text variant="mainNav" className="text-white uppercase pt-4">External</Text>
    )

    const externalLinks = [
        <Link key={0} href="https://www.shopsofos.com/" external>Retail Store</Link>,
        <Link key={1} href="https://order.sofofoods.com/" external>Customer Login</Link>,
        <Link key={2} href="https://order.sofofoods.com/" external>A&M Cheese</Link>,
        <Link key={3} href="https://order.sofofoods.com/" external>Great Lakes Box Company</Link>,
    ]

    const footerLogo = {
        mobile: <a href="/"><Image src="/images/logo-horizontal-white.svg" alt="logo" width={288} height={32} className="mb-2 w-48"/></a>,
        tablet: <a href="/"><Image src="/images/logo-horizontal-white.svg" alt="logo" width={288} height={48} className="my-4 w-72"/></a>,
        desktop: <a href="/"><Image src="/images/logo-vertical.svg" alt="logo" width={288} height={48} className="my-4 w-40"/></a>
    }

    const subscribeForm = (
        <>
            <Text variant="mainNav" className="text-white uppercase pt-4 md:pt-0 xl:pt-4">Subscribe to our newsletter</Text>
            <Text variant="paragraph" className="text-white/70">The latest news, articles, and resources, sent to your inbox weekly.</Text>
                <div className="flex justify-start">
                    <FormField placeholder="Enter your email" onChange={handleChange}  value={value} onClick={() => console.log("clicked")} buttonText="Subscribe" buttonVariant="transparentWhite" inputVariant="dark"/>
                </div>
        </>
    )

    const footerBottom = (
        <>
            <Text variant="paragraph" className="text-white/70">© 2020 Sofo Foods. All rights reserved.</Text>
                <div className="flex flex-row items-center justify-center pt-8 md:pt-0 gap-12 h-6">
                    <div className="flex flex-row items-center border-r border-white/10 pr-8 h-6">
                        <Image src="/icons/ifda.svg" alt="IFDA" width={24} height={24} className="w-16 h-16"/>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <a href="https://www.facebook.com/SofoFoodsDistribution/" target="_blank" rel="noopener noreferrer"><Image src="/icons/facebook.svg" alt="facebook" width={24} height={24} className="w-6 h-6"/></a>
                        <a href="https://www.instagram.com/sofofoods/" target="_blank" rel="noopener noreferrer"><Image src="/icons/insta.svg" alt="instagram" width={24} height={24} className="w-6 h-6"/></a>
                    </div>
                </div>
        </>
    )

  return (
    <>
        <footer className="xl:hidden flex flex-col items-center bg-darkest gap-4 inset-x-0 bottom-0 mt-auto max-w-screen overflow-hidden">
            {/* sm */}
            <div className="md:hidden flex flex-col mx-8 my-8 w-[358px]">
                {footerLogo.mobile}
                <div className="flex flex-row">
                    <ul className="flex flex-col justify-between gap-4">
                        {company}
                        {companyLinks.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}

                        {external}
                        {externalLinks.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
           
                            {subscribeForm}

                        <div className="box-border flex flex-col items-center justify-center my-8 mx-8 py-4 border-t border-white/10 text-center">
                            {footerBottom}
                        </div>
                    </ul>
                </div>
            </div>

            {/* md/lg */}
            <div className="hidden md:flex flex-col py-8 px-12">
                {footerLogo.tablet}
                <div className="flex flex-row max-w-[674px] justify-between items-start pt-8">
                    <ul className="flex flex-col gap-4 w-1/4">
                        {company}
                        {companyLinks.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                    </ul>
                    <ul className="flex flex-col gap-4 w-1/4">
                        {external}
                        {externalLinks.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                    </ul>
                    <ul className="flex flex-col gap-4 w-1/2 ml-14">
                        {subscribeForm}
                    </ul>
                </div>
                <div className="flex flex-row w-full items-center justify-center">
                        <div className="box-border flex flex-row items-center justify-center my-8 mx-8 py-4 gap-8 border-t border-white/10 text-center">
                            {footerBottom}
                        </div>
                    </div>
            </div>
        </footer>

        {/* xl */}
        <footer className="hidden xl:flex flex-row items-center justify-center bg-darkest inset-x-0 bottom-0 mt-auto max-w-screen">
            <div className="hidden md:flex flex-col py-8 px-12">
                <div className="flex flex-row items-center justify-center gap-x-12">
                    {footerLogo.desktop}
                    <div className="flex flex-row max-w-screen-2xl justify-between items-start pt-8">
                        <ul className="flex flex-col gap-4 w-1/4">
                            {company}
                            {companyLinks.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-4 w-1/4">
                            {external}
                            {externalLinks.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                        <ul className="flex flex-col gap-4 w-1/2 ml-14">
                            {subscribeForm}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row w-full items-center justify-center">
                        <div className="box-border flex flex-row w-full items-center justify-between my-8 mx-8 py-4 border-t border-white/10 text-center">
                            {footerBottom}
                        </div>
                    </div>
            </div>
        </footer>
    </>
  );
};

export default Footer;