"use client";

import React, { useState } from "react";

import Text from "../components/Text";
import Link from "../components/Link";
import DownSvg from '/public/icons/down.svg';
import UpSvg from '/public/icons/up.svg';

const ProductsSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex flex-col w-screen">
          <div className="flex flex-row items-center justify-between border-b border-2 border-darkest/10 w-[98%] my-2 pb-4 px-4">
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


    return (
        <>
            <div className="flex md:hidden justify-center items-center mt-8">
            {dropDown}
            </div>
            <div className="hidden md:flex flex-col mt-12 w-1/4">
            <div className="border-b border-2 border-darkest/10 my-8 pb-8 mr-8">
                {commonTitle}
            </div>
            {products.map((product, index) => (
                <div key={index} className="group my-2">
                <Link variant="sidebar" href={product.route}>{product.name}</Link>
                </div>
            ))}
            </div>
        </>
    );
  };

export default ProductsSidebar;