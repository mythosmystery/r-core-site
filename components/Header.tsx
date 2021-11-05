import React from 'react';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ children }) => {
   return (
      <div className="bg-gray-600/40 mx-6 py-2 shadow-md backdrop-blur-xl md:w-2/3 md:mx-auto">
         <h1 className="relative z-40 text-center text-4xl">{children}</h1>
      </div>
   );
};
