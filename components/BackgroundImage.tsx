import React from 'react';
import Image from 'next/image';

interface BackgroundImageProps {
   image: StaticImageData;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ image }) => {
   return (
      <div className="fixed z-0 hidden md:flex">
         <Image src={image} />
      </div>
   );
};