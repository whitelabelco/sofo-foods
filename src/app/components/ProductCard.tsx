"use client";

import React from 'react';

import Button from './Button';

interface ProductCardProps {
  img: string;
  name: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, name }) => {
  return (
    <div className={`bg-${img} bg-cover w-[180px] h-[148px] md:w-[450px] md:h-[300px] flex flex-col relative gap-6 rounded-lg md:rounded-2xl`}>
        <div className="bg-darkest bg-opacity-0 p-4 w-full h-full hover:bg-opacity-50 transition-all duration-200 rounded-lg md:rounded-2xl cursor-pointer">
            <div className="absolute bottom-0 left-0">
                    <Button onClick={() => console.log("clicked")} variant="product" className="!px-2">{name}</Button>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;