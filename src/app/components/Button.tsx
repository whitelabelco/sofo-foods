import React from 'react';

import ArrowSvg from '/public/icons/arrow-right.svg';
import ArrowCroppedSvg from '/public/icons/arrow-right-cropped.svg';

interface ButtonProps {
    variant?: 'red' | 'blue' | 'green' | 'redText' | 'blackText' | 'blueText' | 'transparentBlack' | 'transparentWhite' | 'product';
    size?: 'sm' | 'base';
    children: React.ReactNode;
    onClick?: () => void;
  }

  const Button: React.FC<ButtonProps> = ({ variant = 'red', size = 'base', children, onClick }) => {
    const baseStyles = 'group relative flex items-center justify-center whitespace-nowrap gap-2 rounded-lg font-roboto-condensed text-base font-base uppercase overflow-hidden';
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

    const sizeStyles = {
      sm: 'px-6 py-2',
      base: 'px-8 py-3.5',
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
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
        onClick={onClick}
      >
        <span className="flex flex-row relative left-2 items-center justify-center z-10 group-hover:-translate-x-4 transition-transform duration-300 ease-in-out">
          {children}
          <span>
            {size === "sm" ?
              <ArrowCroppedSvg className={`${commonStyles.btnArrow} ${svgStyles[variant]}`} /> 
              :
              <ArrowSvg className={`${commonStyles.btnArrow} ${svgStyles[variant]}`} /> 
            }
          </span>
        </span>
      </button>
    );
  };

export default Button;