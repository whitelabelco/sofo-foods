import React from 'react';

import Text from './Text';

const Testimonial = () => {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center items-center w-[390px] h-[520px] md:h-[834px] md:w-[510px] lg:w-[1440px] lg:h-[451px]">
                <div className="flex flex-col items-center gap-8 w-[342px] md:w-[786px] lg:w-[1280px] text-center">
                        <Text variant="headline" className="uppercase">
                            - Kind words from our customers -
                        </Text>
                        <Text variant="paragraphL" className="text-darkest/70">
                            &quot;I have been a customer of Sofo Foods for over 60 years, and they have provided me with great service in addition to 
                            helping my business be a success. I feel like family with Sofo Foods!&quot;
                        </Text>
                        <Text variant="headlineSm" className="text-darkest/50">
                            Frank Incorvaia Sr. Owner | Inky&apos;s Italian Foods
                        </Text>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
