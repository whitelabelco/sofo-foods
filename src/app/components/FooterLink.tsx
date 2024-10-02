import React from 'react';
import NextLink from 'next/link';

import ArrowSvg from '/public/icons/arrow-diagonal.svg';

interface FooterLinkProps {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, href = "/", external }) => {

  return (
        <NextLink href={href} target={external ? "_blank" : ""} rel={external ? "noopener noreferrer" : ""} className="group flex items-center gap-1 whitespace-nowrap font-normal text-lg text-white/70 hover:text-white hover:ease-out hover:duration-150">
            {children}
            {external && 
                <ArrowSvg className="stroke-white/70 group-hover:stroke-white" />
            }
        </NextLink>
  );
};

export default FooterLink;