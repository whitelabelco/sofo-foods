"use client";

import React, { useState } from 'react';

import DownSvg from '/public/images/down.svg';
import UpSvg from '/public/images/up.svg';
import Text from './Text';
import Link from './Link';

const ExpandableMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        const content = document.getElementById(`content`);
        if (content) {
            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                content.style.maxHeight = '0';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        }
    };

    const menuContent = [
        "Dairy",
        "Meat",
        "Tomato Products",
        "Produce",
        "Dry Goods",
        "Bread & Dough",
        "Flour & Mixes",
        "Frozen/Fresh Refrigerated",
        "Poultry",
        "Pizza Boxes",
        "Disposables",
        "Cleaning",
        "Equipment",
        "Miscellaneous"
    ]

  return (
    <div className="flex flex-row">
        <div className="w-[342px] h-[43px]">
            <button onClick={() => toggleMenu()} className="w-full flex justify-between items-center border-b border-darkest/10 py-2">
                <Text variant="mainNav">
                    Type
                </Text>
                <span id="icon" className="transition-transform duration-300">
                    {!menuOpen ? <DownSvg /> : <UpSvg />}
                </span>
            </button>
            <ol id="content" className="max-h-0 overflow-scroll transition-all duration-300 ease-in-out mt-2">
                {menuContent.map((item, index) => (
                    <li key={index} className="group cursor-pointer mt-2">
                        <Link variant="sidebar">
                            {item}
                        </Link>
                    </li>
                ))}
            </ol>
        </div>
    </div>
  );
};

export default ExpandableMenu;
