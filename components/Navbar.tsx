import React from 'react';
import Link from 'next/link';

interface NavbarProps {}

interface NavItemProps {
   href: string;
}

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
   return <div className="sticky top-0 shadow-md h-12 w-full bg-gray-400 flex z-50">{children}</div>;
};
export const NavItem: React.FC<NavItemProps> = ({ children, href }) => {
   return (
      <Link href={href}>
         <div className="flex text-blue-600 text-lg items-center justify-center mx-2 hover:bg-gray-600/50 hover:text-red-500 p-3 hover:cursor-pointer active:scale-110 active:shadow-lg">
            {children}
         </div>
      </Link>
   );
};
export const NavTitle: React.FC<NavbarProps> = ({ children }) => {
   return <div className="flex flex-grow text-gray-900/50 text-3xl font-bold justify-center items-center hover:cursor-default">{children}</div>;
};
