import React from 'react';

interface TagProps {
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return <div className="flex items-center justify-center px-3.5 py-[3px] whitespace-nowrap bg-lightest-green rounded-full font-roboto text-sm tracking-wider font-medium uppercase text-green">{children}</div>;
};

export default Tag;