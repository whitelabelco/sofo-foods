import React, { useState, useEffect } from 'react';

import Text from './Text';

interface TestimonialProps {
    testimonials: { quote: string; title: string }[];
  }

  const Testimonial: React.FC<TestimonialProps> = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        }, 8000);
      
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row justify-center items-center w-[390px] h-[520px] sm:w-[550px] md:h-[834px] md:w-[510px] lg:w-[1440px] lg:h-[451px]">
                <div className="flex flex-col items-center gap-8 w-[342px] sm:w-[500px] md:w-[786px] lg:w-[1280px] text-center">
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
