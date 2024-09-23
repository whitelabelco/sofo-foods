import Image from 'next/image';
import React from 'react';

import Text from './Text';

const BrandCard = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-[296px] h-[318px] md:h-[466px] gap-5">
        <Image alt="Brand" src="/house-brands/antonio.webp" width={210} height={212} />
        <Text variant="headlineSm" className="uppercase">
            Brand Name
        </Text>
        <Text variant="paragraph" className="text-darkest/70">
            Quality products are the world&apos;s best internationally sourced ingredients. 
            Bellissimo products range from cheese, meat toppings, and tomatoes, to cleaning supplies and disposables.
        </Text>
    </div>
  );
};

export default BrandCard;