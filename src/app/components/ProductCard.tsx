"use client";

import React from 'react';

import Button from './Button';

const ProductCard = () => {
  return (
    <div className="bg-product-placeholder bg-cover w-[226px] h-[148px] md:w-[472px] md:h-[308px] flex flex-col relative gap-6 rounded-lg md:rounded-2xl">
        <div className="bg-darkest bg-opacity-0 p-4 w-full h-full hover:bg-opacity-50 transition-all duration-200 rounded-lg md:rounded-2xl cursor-pointer">
            <div className="absolute bottom-0 left-0 md:my-2 md:mx-2">
                    <Button onClick={() => console.log("clicked")} variant="product" size="sm">ProductName</Button>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;