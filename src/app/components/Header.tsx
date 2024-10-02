"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

import MenuSvg from '/public/icons/menu.svg';
import CloseSvg from '/public/icons/x.svg';
import Link from './Link';
import Button from './Button';

const Header = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        <Link key={0} href="/about" animate>About Us</Link>,
        <Link key={1} href="/brands" animate>Brands</Link>,
        <Link key={2} href="/products" animate>Products</Link>,
        <Link key={3} href="/careers" animate>Careers</Link>,
        <Link key={4} href="/order" animate>Order Now</Link>
    ]

    const headerLogo = {
        mobile: <a href="/"><Image src="/images/logo-horizontal.svg" alt="logo" width={288} height={33} className="mb-2 w-48"/></a>,
        desktop: <a href="/"><Image src="/images/logo-horizontal.svg" alt="logo" width={288} height={48} className="my-4 w-72"/></a>
    }

  return (
    <>
        <div className="xl:hidden flex flex-col items-center bg-white border-b border-darkest/10 drop-shadow-sm gap-4">
        <div className="xl:hidden h-2 bg-red flex-none order-0 self-stretch"></div>

            {/* sm */}
            <nav className="md:hidden flex flex-row w-full justify-between items-center px-2">
                <div>
                    {headerLogo.mobile}
                </div>
                <div className="space-y-2" onClick={() => setIsOpen((prev) => !prev)}>
                    <MenuSvg />
                </div>
                <div className={isOpen ? "absolute flex flex-col justify-between items-center w-full h-screen top-2 left-0 bg-white z-10 transition-all duration-200 ease-in-out" : "hidden"}>
                <div className="absolute top-0 right-0 px-4 py-4" onClick={() => setIsOpen(false)}>
                    <CloseSvg />
                </div>
                    <ul className="flex flex-col items-center justify-between min-h-[400px] py-12">
                        {navLinks.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* md/lg */}
            <nav className="hidden xl:hidden md:flex flex-col w-full justify-between items-center">
                <div className="flex justify-center w-full border-b border-darkest/10">
                    {headerLogo.desktop}
                </div>
                    <ul className="flex flex-row items-center justify-between min-w-full px-12 py-6">
                        {navLinks.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                        <li>
                            <Button onClick={() => router.push('/contact')} variant="blue" size="sm">Get in touch</Button>
                        </li>
                    </ul>
            </nav>
        </div>

        {/* xl */}
        <div className="hidden xl:flex flex-col items-center bg-white border-b border-darkest/10 drop-shadow-sm">
        <div className="h-8 bg-red flex flex-row self-stretch items-center justify-end pr-14">
            <Link href="https://order.sofofoods.com/" className="text-white underline text-xs" external>Customer Login</Link>
        </div>
            <nav className="flex flex-row w-full justify-between items-center max-w-screen-2xl">
                    <ul className="flex flex-row items-center justify-between w-1/3 px-6 py-6">
                        {navLinks.map((link, index) => (
                            index <= 2 && (
                                <li key={index}>{link}</li>
                            )
                        ))}
                    </ul>
                    <div>
                        {headerLogo.desktop}
                    </div>
                    <ul className="flex flex-row items-center justify-between w-1/3 px-4 py-6">
                        {navLinks.map((link, index) => (
                            index >= 3 && (
                                <li key={index}>{link}</li>
                            )
                        ))}
                        <li>
                            <Button onClick={() => router.push('/contact')} variant="blue" size="base">Become a customer</Button>
                        </li>
                    </ul>
            </nav>
        </div>
    </>
  );
};

export default Header;