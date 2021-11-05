import React from 'react';

interface CardProps {}

export const Card: React.FC<CardProps> = ({ children }) => {
   return <div className="bg-gray-400/50 backdrop-blur-xl shadow-md w-2/5 m-6 p-6 text-center flex flex-col">{children}</div>;
};
