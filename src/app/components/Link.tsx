import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  variant?: 'base' | 'sidebar';
  children: React.ReactNode;
  href?: string;
}

const variantClasses: { [key: string]: string } = {
    base: 'font-roboto-condensed font-medium text-base text-darkest/70 hover:text-darkest uppercase',
    sidebar: 'font-normal text-base md:text-lg pl-2 text-darkest/70 hover:ease-out hover:duration-150 hover:text-darkest hover:border-l hover:border-left-darkest/10 active:text-darkest active:border-l active:border-darkest',
};

const Link: React.FC<LinkProps> = ({ variant = 'body', children, href = "/" }) => {
  const classes = variantClasses[variant] || variantClasses.body;
  return <NextLink href={href} className={classes}>{children}</NextLink>;
};

export default Link;