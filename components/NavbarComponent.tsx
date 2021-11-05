import React from 'react';
import { FaCar } from 'react-icons/fa';
import { Navbar, NavItem, NavTitle } from './Navbar';

interface NavbarComponentProps {}

export const NavbarComponent: React.FC<NavbarComponentProps> = ({}) => {
   return (
      <Navbar>
         <NavItem href="/">
            <FaCar size="26" />
         </NavItem>
         <NavTitle>R Core Transmission Repair</NavTitle>
         <NavItem href="/#">Home</NavItem>
         <NavItem href="/#about">About</NavItem>
         <NavItem href="/#reviews">Reviews</NavItem>
         <NavItem href="/contact">Contact Us</NavItem>
      </Navbar>
   );
};
