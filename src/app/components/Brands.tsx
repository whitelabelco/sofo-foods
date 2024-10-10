
import React from 'react';

import Text from './Text';
import BrandCard from './BrandCard';

interface BrandCards {
    brandTitle: string;
    brandParagraph: string;
    logo: string;
}

interface BrandsProps {
    sectionTitle: string;
    brandCards: BrandCards[];
}


const Brands: React.FC<BrandsProps> = ({ sectionTitle, brandCards }) => {

    return (
        <>
            <section className="flex justify-center items-center overflow-hidden pb-8 pt-32">
                <div className="flex flex-col w-[342px] md:w-[764px] justify-center items-center gap-8">
                    <div className="flex flex-col justify-center items-center text-center gap-8">
                        <Text variant="headline" className="uppercase">{sectionTitle}</Text>
                    </div>
                </div>
            </section>

            <div className="flex flex-col items-center justify-center my-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 xl:gap-12 max-w-screen-xl">
                    {brandCards.map((card, index) => (
                        <div key={index} className="grid grid-cols-1 justify-center items-center">
                            <BrandCard brandTitle={card.brandTitle} brandParagraph={card.brandParagraph} logo={card.logo} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Brands;