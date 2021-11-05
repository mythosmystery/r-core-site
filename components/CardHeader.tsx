import React from 'react';

interface HeaderProps {}

export const CardHeader: React.FC<HeaderProps> = ({ children }) => {
   return <h1 className="relative text-2xl text-gray-800 text-center mb-4 pb-4 z-40 border-b border-gray-300/30">{children}</h1>;
};
