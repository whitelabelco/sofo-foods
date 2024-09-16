/* eslint-disable react/jsx-key */
import React from 'react';

import Text from './Text';
import Georgia from '/public/georgia.svg';
import Kentucky from '/public/kentucky.svg';
import Ohio from '/public/ohio.svg';
import Texas from '/public/texas.svg';

interface LocationCardProps {
  variant?: 'georgia' | 'kentucky' | 'ohio' | 'texas';
}

const variantContent = {
    georgia: {icon: <Georgia />, title: 'Georgia', address: ["3910 Lakefield Dr.", <br />, "Suwanee, GA 30024"], phone: "1-800-969-0320", fax: "770-476-4767"},
    kentucky: {icon: <Kentucky />, title: 'Kentucky', address: ["Street", <br />, "City, State Zip"], phone: "xxx-xxx-xxxx", fax: "xxx-xxx-xxxx"},
    ohio: {icon: <Ohio />, title: 'Ohio', address: ["​​253 Waggoner Blvd.", <br />, "Toledo, OH 43612"], phone: "1-800-447-4211", fax: "419-478-6104"},
    texas: {icon: <Texas />, title: 'Texas', address: ["11502 S Main St #230", <br />, "Houston, TX 77025"], phone: "1-800-969-0320", fax: "713-663-7768"},
};

const LocationCard: React.FC<LocationCardProps> = ({ variant = 'ohio' }) => {
  return (
    <div className="flex flex-row md:flex-col justify-end p-4 md:p-8 gap-6 md:gap-10 w-[322.88px] h-[187px] md:w-[282.88px] md:h-[291px] bg-location-bg/60 rounded-lg relative text-darkest">      
      {/* Container */}
      <div className="flex flex-col items-start p-2 gap-4 w-[218.88px] h-[155px]">
        {/* State Icon */}
      <div className="absolute left-5 top-3 md:top-5">{variantContent[variant].icon}</div>
        {/* Title Container */}
        <div className="flex flex-row items-center gap-2 w-[218.88px] h-[23px]">
          <span className="w-[179px] h-[23px] font-roboto-condensed font-medium text-lg leading-[23px] uppercase">{variantContent[variant].title}</span>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-2 w-[218.88px] h-auto">
          {/* Address */}
          <Text variant="paragraphSans">
            {variantContent[variant].address}
          </Text>
          {/* Phone and Fax */}
          <div className="flex flex-col items-start w-full">
            {/* Phone */}
            <div className="flex flex-row items-start w-full">
              <Text variant="paragraphSans">Phone:&nbsp;</Text>
              <Text variant="paragraphSans">{variantContent[variant].phone}</Text>
            </div>
            {/* Fax */}
            <div className="flex flex-row items-start w-full">
              <Text variant="paragraphSans">Fax:&nbsp;</Text>
              <Text variant="paragraphSans">{variantContent[variant].fax}</Text>
            </div>
  
          </div>
        </div>
  
      </div>
    </div>
  )
};

export default LocationCard;