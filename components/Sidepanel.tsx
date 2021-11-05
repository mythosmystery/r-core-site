import React from 'react';

interface SidepanelProps {}

export const Sidepanel: React.FC<SidepanelProps> = ({ children }) => {
   return (
      <div className="hidden relative md:flex flex-col md:w-full xl:w-2/5 ml-6 my-6 p-3 bg-gray-300/40 justify-center shadow-md z-40 backdrop-blur-xl">
         {children}
      </div>
   );
};

export const Phone: React.FC<SidepanelProps> = ({ children }) => {
   return (
      <div className="text-lg text-gray-800 text-center my-3">
         <h1 className="font-light">Phone: </h1>
         {children}
      </div>
   );
};

export const Address: React.FC<SidepanelProps> = ({ children }) => {
   return (
      <div className="text-gray-800 text-center m-4">
         <h1 className="font-light">Address: </h1>
         {children}
      </div>
   );
};

export const Hours: React.FC<SidepanelProps> = ({ children }) => {
   return (
      <div className="text-gray-800 text-center m-4">
         <h1 className="font-light">Hours: </h1>
         {children}
      </div>
   );
};
