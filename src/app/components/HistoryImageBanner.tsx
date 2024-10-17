import React from 'react';

import Text from './Text';
import Image from 'next/image';

interface HistoryImageBannerProps {
  background: string;
  date: string;
  gallery?: string;
}

const HistoryImageBanner: React.FC<HistoryImageBannerProps> = ({ background, date, gallery }) => {

  const commonStyle = `flex flex-col ${background} w-screen h-[240px] md:h-[400px] lg:h-[660px] bg-cover bg-center`

  return (
    <div className="flex flex-col items-center overflow-hidden">
        <div className={gallery ? `${commonStyle}` : `${commonStyle} mb-8 xl:mb-20`}>
            <div className="flex flex-col items-start mt-8 ml-4 xl:mt-20 xl:ml-20">
                <Text variant="headlineXxxl" className="text-white">{date}</Text>
            </div>
        </div>
        { gallery && 
            <div className="flex flex-row justify-center items-center -mt-12 lg:-mt-32 xl:-mt-48">
                <Image className="w-screen" src={gallery} alt="Gallery" width={1920} height={500} />
            </div>
        }
    </div>
  )
};

export default HistoryImageBanner;