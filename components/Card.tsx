import React from 'react';

interface CardProps {}

const Card: React.FC<CardProps> = ({ children }) => {
   return <div className="bg-gray-400/50 backdrop-blur-xl text-gray-900 shadow-lg flex-shrink m-6 p-6 text-center flex flex-col">{children}</div>;
};

const Header: React.FC = ({ children }) => {
   return <h1 className="relative text-2xl text-gray-800 text-center mb-4 pb-4 z-40 border-b border-gray-300/30">{children}</h1>;
};
export default Object.assign(Card, { Header });
