import React from 'react';
import Link from 'next/link';

interface NavbarProps {}

interface NavItemProps {
   href: string;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
   return <div className="sticky top-0 shadow-md h-12 w-full bg-gray-400 sm:flex hidden z-50 justify-end">{children}</div>;
};
const Item: React.FC<NavItemProps> = ({ children, href }) => {
   return (
      <Link href={href}>
         <div className="flex text-blue-600 text-lg items-center justify-center mx-2 hover:bg-gray-600/50 hover:text-red-500 p-3 hover:cursor-pointer active:scale-110 active:shadow-lg">
            {children}
         </div>
      </Link>
   );
};
const Title: React.FC<NavbarProps> = ({ children }) => {
   return (
      <div className="hidden md:flex lg:text-3xl flex-grow text-gray-900/50 text-xl font-bold justify-center items-center hover:cursor-default">
         {children}
      </div>
   );
};
export default Object.assign(Navbar, { Item, Title });
