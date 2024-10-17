"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

import Button from './Button';

interface ProductCardProps {
  name: string;
  route?: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, route, className }) => {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };


  return (
    <div onClick={handleClick} className={`${className} group bg-cover w-[180px] h-[148px] md:w-[450px] md:h-[300px] flex flex-col relative gap-6 rounded-lg md:rounded-2xl cursor-pointer`}>
        <div className="bg-darkest bg-opacity-0 p-4 w-full h-full hover:bg-opacity-50 transition-all duration-200 rounded-lg md:rounded-2xl">
            < div className="absolute bottom-0 left-0">
              <Button onClick={handleClick} variant="product" className="!px-2 lg:!px-4">{name}</Button>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;