import React from 'react';
import { FaStar } from 'react-icons/fa';

interface ReviewCardProps {
   name: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ children, name }) => {
   return (
      <div className="flex flex-col text-center p-4 bg-gray-400/50 flex-grow italic text-gray-900 backdrop-blur-xl shadow-lg z-50">
         "{children}"
         <div className="flex flex-row justify-evenly items-center mt-1">
            <Stars />
            <p className="text-right"> - {name}</p>
         </div>
      </div>
   );
};
export const Stars: React.FC = () => {
   return (
      <div className="flex flex-row text-yellow-300 mt-1">
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
         <FaStar />
      </div>
   );
};
