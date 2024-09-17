import React from 'react';

import ArrowSvg from '/public/images/arrow-right.svg';
import ArrowCroppedSvg from '/public/images/arrow-right-cropped.svg';

interface ButtonProps {
    variant?: 'red' | 'blue' | 'green' | 'redText' | 'blackText' | 'blueText' | 'transparentBlack' | 'transparentWhite';
    size?: 'sm' | 'base';
    arrow?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
  }

  const Button: React.FC<ButtonProps> = ({ variant = 'red', size = 'base', arrow = false, children, onClick }) => {
    const baseStyles = 'flex items-center justify-center whitespace-nowrap gap-2 rounded-lg font-roboto-condensed text-base font-base uppercase ';
    const variantStyles = {
      red: 'bg-red text-white',
      blue: 'bg-gradient-to-r from-lighter-blue to-blue text-white',
      green: 'bg-green text-white',
        redText: 'bg-white text-red',
        blackText: 'bg-white text-darkest',
        blueText: 'bg-white text-blue',
        transparentBlack: `bg-transparent text-darkest border ${arrow ? `border-darkest` : `border-darkest/10`}`,
        transparentWhite: 'bg-transparent text-white border border-white',
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
    };
  
    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
        onClick={onClick}
      >
        {children}
        {arrow && (size === "sm" ?
         <ArrowCroppedSvg className={`${svgStyles[variant]}`} /> 
         :
         <ArrowSvg className={`${svgStyles[variant]}`} />
        )}
      </button>
    );
  };

export default Button;