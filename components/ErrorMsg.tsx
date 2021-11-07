import React from 'react';

interface ErrorMsgProps {}

export const ErrorMsg: React.FC<ErrorMsgProps> = ({ children }) => {
   return <div className="text-red-600 text-center">{children}</div>;
};
