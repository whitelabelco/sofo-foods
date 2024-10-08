import React, { useState, useEffect } from 'react';

import Text from './Text';

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
          quote: `"I have been a customer of Sofo Foods for over 60 years, and they have provided me with great service in addition to helping my business be a success. I feel like family with Sofo Foods!"`,
          title: "Frank Incorvaia Sr. Owner | Inky's Italian Foods"
        },
        {
            quote: `"We have been a customer of Sofo Foods for many years. The pride and dedication that Sofo Foods has for my business truly shines through its sales representatives."`,
            title: "Kim Morrison Moran, Owner | Sal's Italian Restaurant"
          },
          {
            quote: `"Mancino's Pizza & Grinders "Sofo Foods has been our main food supplier since we opened in 1997 and we feel our success is significantly influenced by our service and product from them."`,
            title: "Wayne and Sandy Braun, Owners | Mancino's Pizza and Grinders of Alma, Michigan"
          },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, 8000);
      
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center items-center w-[390px] h-[520px] md:h-[834px] md:w-[510px] lg:w-[1440px] lg:h-[451px]">
                <div className="flex flex-col items-center gap-8 w-[342px] md:w-[786px] lg:w-[1280px] text-center">
                    <Text variant="headline" className="uppercase">
                        - Kind words from our customers -
                    </Text>
                    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 flex flex-col items-center text-center gap-6">
                                    <Text variant="paragraphL" className="text-darkest/70">
                                        {testimonial.quote}
                                    </Text>
                                    <Text variant="headlineSm" className="text-darkest/50">
                                        {testimonial.title}
                                    </Text>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
