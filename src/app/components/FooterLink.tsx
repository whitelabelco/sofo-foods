import React from 'react';
import NextLink from 'next/link';

import ArrowSvg from '/public/icons/arrow-diagonal.svg';

interface FooterLinkProps {
  children: React.ReactNode;
  href?: string;
  arrow?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, href = "/", arrow }) => {

  return (
        <NextLink href={href} className="group flex items-center justify-center gap-1 whitespace-nowrap font-normal text-lg text-white/70 hover:text-white hover:ease-out hover:duration-150">
            {children}
            {arrow && 
                <ArrowSvg className="stroke-white/70 group-hover:stroke-white" />
            }
        </NextLink>
  );
};

export default FooterLink;