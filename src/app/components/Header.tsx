"use client";

import React, { useState } from 'react';

import MenuSvg from '/public/icons/menu.svg';
import CloseSvg from '/public/icons/x.svg';
import Link from './Link';
import Button from './Button';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        {/* sm */}
        <div className="md:hidden flex flex-col items-center bg-white border-b border-darkest/10 drop-shadow-sm gap-4">
        <div className="h-2 lg:h-8 bg-red flex-none order-0 self-stretch"></div>
            <nav className="flex flex-row w-full justify-between items-center px-2">
                <div>
                    <a href="/">
                        <img src="/images/logo-horizontal.svg" alt="logo" className="mb-2 w-48"/>
                    </a>
                </div>
                <div className="space-y-2" onClick={() => setIsOpen((prev) => !prev)}>
                    <MenuSvg />
                </div>
                <div className={isOpen ? "absolute flex flex-col justify-between items-center w-full h-screen top-2 left-0 bg-white z-10 transition-all duration-200 ease-in-out" : "hidden"}>
                <div className="absolute top-0 right-0 px-4 py-4" onClick={() => setIsOpen(false)}>
                    <CloseSvg />
                </div>
                    <ul className="flex flex-col items-center justify-between min-h-[400px] py-12">
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/brands">Brands</Link>
                        </li>
                        <li>
                            <Link href="/products">Products</Link>
                        </li>
                        <li>
                            <Link href="/careers">Careers</Link>
                        </li>
                        <li>
                            <Link href="/order">Order Now</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        {/* md */}
        <div className="hidden lg:hidden md:flex flex-col items-center bg-white border-b border-darkest/10 drop-shadow-sm gap-4">
        <div className="h-2 lg:h-8 bg-red flex-none order-0 self-stretch"></div>
            <nav className="flex flex-col w-full justify-between items-center">
                <div className="flex justify-center w-full border-b border-darkest/10">
                    <a href="/">
                        <img src="/images/logo-horizontal.svg" alt="logo" className="my-4 w-72"/>
                    </a>
                </div>
                    <ul className="flex flex-row items-center justify-between min-w-full px-12 py-6">
                    <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/brands">Brands</Link>
                        </li>
                        <li>
                            <Link href="/products">Products</Link>
                        </li>
                        <li>
                            <Link href="/careers">Careers</Link>
                        </li>
                        <li>
                            <Link href="/order">Order Now</Link>
                        </li>
                        <li>
                            <Button variant="blue" size="sm">Get in touch</Button>
                        </li>
                    </ul>
            </nav>
        </div>

        {/* lg */}
        <div className="hidden lg:flex flex-col items-center bg-white border-b border-darkest/10 drop-shadow-sm">
        <div className="h-2 lg:h-8 bg-red flex flex-row self-stretch items-center justify-end pr-14">
            <Link href="/" className="text-white underline text-xs">Customer Login</Link>
        </div>
            <nav className="flex flex-row w-full justify-between items-center">
                    <ul className="flex flex-row items-center justify-between w-1/3 px-12 py-6">
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/brands">Brands</Link>
                        </li>
                        <li>
                            <Link href="/products">Products</Link>
                        </li>
                    </ul>
                    <div>
                        <a href="/">
                            <img src="/images/logo-horizontal.svg" alt="logo" className="my-4 w-72"/>
                        </a>
                    </div>
                    <ul className="flex flex-row items-center justify-between w-1/3 px-12 py-6">
                        <li>
                            <Link href="/careers">Careers</Link>
                        </li>
                        <li>
                            <Link href="/order">Order Now</Link>
                        </li>
                        <li>
                            <Button variant="blue" size="base">Become a customer</Button>
                        </li>
                    </ul>
            </nav>
        </div>
    </>
  );
};

export default Header;