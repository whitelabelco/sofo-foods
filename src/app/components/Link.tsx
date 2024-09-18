import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  variant?: 'base' | 'sidebar';
  children: React.ReactNode;
  href?: string;
  onClick: () => void;
}

const variantClasses: { [key: string]: string } = {
    base: 'font-roboto-condensed font-medium text-base text-darkest/70 hover:text-darkest uppercase',
    sidebar: 'font-normal text-base md:text-lg pl-2 text-darkest/70 group-hover:ease-out group-hover:duration-150 group-hover:text-darkest group-hover:border-l group-hover:border-left-darkest/10 active:text-darkest active:border-l active:border-darkest',
};

const Link: React.FC<LinkProps> = ({ variant = 'base', children, href = "/", onClick }) => {
  const classes = variantClasses[variant] || variantClasses.base;
  return <NextLink href={href} onClick={onClick} className={classes}>{children}</NextLink>;
};

export default Link;