import React from 'react';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ children }) => {
   return <h1 className="relative z-40 text-center text-3xl text-gray-900">{children}</h1>;
};
