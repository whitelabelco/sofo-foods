import React from 'react';

interface InputProps {
  variant?: 'base' | 'emailList';
  placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    disabled?: boolean;
    required?: boolean;
}

const variantClasses: { [key: string]: string } = {
    base: 'bg-white rounded-md border border-darkest/30 px-3.5 py-2.5 text-darkest font-roboto-condensed font-light text-base drop-shadow-md focus:outline-0 w-[216px]',
    emailList: 'bg-white/5 rounded-md px-3 py-2 border border-white/10 text-white/50 font-roboto-condensed font-light text-base drop-shadow-md focus:ring-2 focus:ring-white focus:text-white focus:outline-0 w-[369px]',
};

const Input: React.FC<InputProps> = ({ variant = 'base', placeholder, onChange, value, disabled, required }) => {
  const classes = variantClasses[variant] || variantClasses.base;
  return <input className={classes} placeholder={placeholder} onChange={onChange} value={value} disabled={disabled} required={required}></input>;
};

export default Input;