import Image from 'next/image';
import React from 'react';

import Text from './Text';

interface BrandCardProps {
  brandTitle: string;
  brandParagraph: string;
  logo: string;
}


const BrandCard: React.FC<BrandCardProps> = ({ brandTitle, brandParagraph, logo }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-[296px] h-[318px] md:h-[466px] gap-2">
        <Image className="w-[150px] xl:w-[200px]" alt="Brand" src={logo} width={200} height={200} />
        <Text variant="headlineSm" className="uppercase">
            {brandTitle}
        </Text>
        <Text variant="paragraph" className="text-darkest/70">
            {brandParagraph}
        </Text>
    </div>
  );
};

export default BrandCard;