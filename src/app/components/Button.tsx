import React from 'react';

import ArrowSvg from '/public/icons/arrow-right.svg';

interface ButtonProps {
    variant?: 'red' | 'blue' | 'green' | 'redText' | 'blackText' | 'blueText' | 'transparentBlack' | 'transparentWhite' | 'product';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'submit';
  }

  const Button: React.FC<ButtonProps> = ({ variant = 'red', children, onClick, className, type }) => {
    const baseStyles = 'group relative flex items-center justify-center whitespace-nowrap gap-2 rounded-lg font-roboto-condensed text-xs md:text-base font-base uppercase overflow-hidden px-6 py-2 md:px-8 md:py-3.5';
    const variantStyles = {
      red: 'bg-red text-white',
      blue: 'bg-gradient-to-r from-lighter-blue to-blue text-white',
      green: 'bg-green text-white',
        redText: 'bg-white text-red',
        blackText: 'bg-white text-darkest',
        blueText: 'bg-white text-blue',
        transparentBlack: `bg-transparent text-darkest border hover:border-darkest border-darkest/10`,
        transparentWhite: 'bg-transparent text-white border border-white',
        product: 'bg-transparent text-white border-none',
    };

    const svgStyles = {
        red: 'stroke-white',
        blue: 'stroke-white',
        green: 'stroke-white',
          redText: 'stroke-red',
          blackText: 'stroke-darkest',
          blueText: 'stroke-blue',
          transparentBlack: 'stroke-darkest',
          transparentWhite: 'stroke-white',
          product: 'stroke-white'
    };

    const commonStyles = {
      btnArrow: 'relative -left-2 transform group-hover:translate-x-5 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100'
    }
  
    return (
      <button
        className={`${className} ${baseStyles} ${variantStyles[variant]}`}
        onClick={onClick}
        type={type}
      >
        <span className="flex flex-row relative left-2 items-center justify-center z-10 group-hover:-translate-x-4 transition-transform duration-300 ease-in-out">
          {children}
          <span>
              <ArrowSvg className={`${commonStyles.btnArrow} ${svgStyles[variant]}`} /> 
          </span>
        </span>
      </button>
    );
  };

export default Button;