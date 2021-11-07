import React, { InputHTMLAttributes } from 'react';

export const TextInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = props => {
   return (
      <input className="p-2 bg-transparent focus:outline-none border-b-2 placeholder-gray-700 focus:border-gray-200 border-gray-700" {...props} />
   );
};
