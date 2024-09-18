import React from 'react';

interface TextProps {
  variant?: 'mainNav' | 'headline' | 'headlineSm' | 'headlineXl' | 'headlineXxl' | 'headlineXxxl' | 'paragraph' | 'paragraphSans' | 'paragraphL' | 'formLabel';
  children: React.ReactNode;
  className?: string;
}

const variantClasses: { [key: string]: string } = {
    mainNav: 'font-roboto-condensed font-medium text-base text-darkest',
    headline: 'font-semibold text-2xl md:text-4xl tracking-wider text-darkest',
    headlineSm: 'font-roboto-condensed font medium text-base md:text-2xl text-darkest',
    headlineXl: 'font-normal text-3xl md:text-5xl text-darkest',
    headlineXxl: 'font-normal text-5xl md:text-7xl text-darkest',
    headlineXxxl: 'font-semibold text-5xl md:text-7xl lg:text-9xl italic text-darkest',
    paragraph: 'font-light text-base md:text-lg tracking-wider text-darkest',
    paragraphSans: 'font-roboto font-normal text-[15px] text-darkest',
    paragraphL: 'font-normal text-xl md:text-2xl text-darkest',
    formLabel: 'font-roboto-condensed font-medium text-base text-darkest',
};

const Text: React.FC<TextProps> = ({ variant = 'paragraph', children, className }) => {
  const classes = variantClasses[variant] || variantClasses.paragraph;
  return <p className={`${className} ${classes}`}>{children}</p>;
};

export default Text;