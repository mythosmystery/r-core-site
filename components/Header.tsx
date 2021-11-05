import React from 'react';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ children }) => {
   return <h1 className="text-2xl text-gray-800 text-center mb-4 pb-4 border-b border-gray-300/30">{children}</h1>;
};
