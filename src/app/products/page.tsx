"use client";

import React, { useState } from "react";

import BrandsCallout from "../components/BrandsCallout";
import ContactCallout from "../components/ContactCallout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsCallout from "../components/ProductsCallout";
import Text from "../components/Text";
import Link from "../components/Link";
import DownSvg from '/public/icons/down.svg';
import UpSvg from '/public/icons/up.svg';
import ProductsGrid from "../components/ProductsGrid";


export default function Products() {
    const [isOpen, setIsOpen] = useState(false);

    const productsTitle = "Products";
    const productsParagraph = "Explore our diverse products, from premium dairy and meats to fresh produce and dry goods. Each product is selected for its quality and consistency."
    
    const products = [
      {name: "Dairy", route: "/products/dairy"},
      {name: "Meat (Excludes Poultry)", route: "/products/meat"},
      {name: "Tomato Products", route: "/products/tomatoproducts"},
      {name: "Produce", route: "/products/produce"},
      {name: "Dry Goods", route: "/products/drygoods"},
      {name: "Bread & Dough", route: "/products/breadanddough"},
      {name: "Flour & Mixes", route: "/products/flourandmixes"},
      {name: "Frozen / Fresh Refrigerated", route: "/products/frozenfreshrefrigerated"},
      {name: "Poultry", route: "/products/poultry"},
      {name: "Pizza Boxes", route: "/products/pizzaboxes"},
      {name: "Disposables", route: "/products/disposables"},
      {name: "Cleaning", route: "/products/cleaning"},
      {name: "Equipment", route: "/products/equipment"},
      {name: "Miscellaneous", route: "/products/miscellaneous"},
      {name: "Proprietary Items", route: "/products/proprietaryitems"},
    ];

    const commonTitle = (
      <Text variant="mainNav" className="text-darkest uppercase">Type</Text>
    )

    const dropDown = (
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between border-b border-2 border-darkest/10 w-screen my-8 pb-8 px-8">
            {commonTitle}
            { !isOpen ? (
                    <div className="space-y-2" onClick={() => setIsOpen((prev) => !prev)}>
                        <DownSvg />
                    </div>
                ) : (
                    <div className="space-y-2" onClick={() => setIsOpen(false)}>
                        <UpSvg />
                    </div>
                ) }
        </div>

        <div className={isOpen ? "flex flex-col justify-between items-center w-full h-content transition-all duration-200 ease-in-out" : "hidden"}>
            <ul className="flex flex-col gap-4 min-h-[400px] py-12">
                {products.map((product, index) => (
                    <li key={index}>
                      <Link key={index} variant="sidebar" href={product.route}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    )

    const productsSection = (
      <section className="flex flex-col md:flex-row justify-center gap-12 xl:gap-28 mx-4">
        <div className="flex md:hidden justify-center items-center mt-8">
          {dropDown}
        </div>
        <div className="hidden md:flex flex-col mt-12 w-1/3">
          <div className="border-b border-2 border-darkest/10 w-full my-8 pb-8 ml-2">
            {commonTitle}
          </div>
          {products.map((product, index) => (
            <div key={index} className="group my-2">
              <Link variant="sidebar" href={product.route}>{product.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center my-8 md:my-20 md:w-2/3 sm:mx-2">
          <ProductsGrid full />
        </div>
      </section>
    )

    return (
      <div>
      <Header />
      <ProductsCallout
        variant="double"
        title={productsTitle}
        paragraph={productsParagraph}
        firstButtonText="Our brands"
        firstButtonVariant="redText"
        firstButtonRoute="/brands"
        secondButtonText="Place an order"
        secondButtonVariant="transparentWhite"
        secondButtonRoute="/order"
      />
        {productsSection}
      <BrandsCallout />
      <ContactCallout />
      <Footer />
    </div>
    );
  }