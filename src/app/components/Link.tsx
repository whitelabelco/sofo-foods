import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
  variant?: 'base' | 'sidebar';
  children: React.ReactNode;
  href?: string;
  className?: string;
  animate?: boolean;
  external?: boolean;
}

const variantClasses: { [key: string]: string } = {
    base: 'font-roboto-condensed font-medium text-base text-darkest/70 hover:text-darkest uppercase',
    sidebar: 'font-normal text-base md:text-lg pl-2 text-darkest/70 group-hover:ease-out group-hover:duration-150 group-hover:text-darkest group-hover:border-l group-hover:border-left-darkest/10 active:text-darkest active:border-l active:border-darkest',
};

const Link: React.FC<LinkProps> = ({ variant = 'base', children, href = "/", className, animate = false, external = false }) => {
  const classes = variantClasses[variant] || variantClasses.base;
  return (
    <NextLink href={href} className={`${className} ${classes}`} target={external ? "_blank" : ""} rel={external ? "noopener noreferrer" : ""}>
      {animate ? (
        <div className="relative mx-auto h-[1.5rem] px-4 overflow-hidden cursor-pointer group">
          <span
            className="link-span relative inline-block transition-transform duration-300 ease-in-out"
            data-hover={`${children}`}
          >
            {children}
          </span>
        </div>
      ) : (
        <span>{children}</span>
      )}
    </NextLink>
  );
};

export default Link;