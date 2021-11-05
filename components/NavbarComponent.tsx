import React from 'react';
import { FaCar } from 'react-icons/fa';
import Navbar from './Navbar';

interface NavbarComponentProps {}

export const NavbarComponent: React.FC<NavbarComponentProps> = ({}) => {
   return (
      <Navbar>
         <Navbar.Item href="/">
            <FaCar size="26" />
         </Navbar.Item>
         <Navbar.Title>R Core Transmission Repair</Navbar.Title>
         <Navbar.Item href="/#">Home</Navbar.Item>
         <Navbar.Item href="/#about">About</Navbar.Item>
         <Navbar.Item href="/#reviews">Reviews</Navbar.Item>
         <Navbar.Item href="/contact">Contact Us</Navbar.Item>
      </Navbar>
   );
};
