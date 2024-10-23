import React from 'react';

import Text from './Text'; 

interface ProductContentProps {
  headline: string;
  content: string;
  products: string[];
}

const ProductContent: React.FC<ProductContentProps> = ({ headline, content, products }) => {

  return (
    <section className="flex flex-col justify-center w-full lg:w-2/3 gap-12 mt-4">
        <div className="flex flex-col gap-8 px-4 border-b border-2 border-darkest/10 w-full pb-12 lg:py-12">
            <Text variant="headlineSm" className="text-darkest">{headline}</Text>
            <Text variant="paragraph" className="text-left">{content}</Text>
        </div>
        <div className="flex flex-col gap-8 px-4">
            <Text variant="headlineSm" className="text-darkest">Products</Text>
            <div className="grid grid-cols-2 row-span-3 gap-4 pb-12 lg:pb-0">
                {products.map((product, index) => {
                    return (
                    <ul key={index}>
                        <li key={index}><Text variant="paragraph" className="text-left">{product}</Text></li>
                    </ul>
                    )
                    
                })}
            </div>
        </div>
    </section>
);
};

export default ProductContent;