import React, { TextareaHTMLAttributes } from 'react';

export const Textarea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = props => {
   return (
      <textarea
         className="bg-transparent placeholder-gray-700 border-b-2 h-24 focus:outline-none focus:border-gray-200 border-gray-700 p-2"
         {...props}
      />
   );
};
