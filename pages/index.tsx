import Head from 'next/head';
import { FC } from 'react';
import { Navbar, NavItem, NavTitle } from '../components/Navbar';
import { FaCar } from 'react-icons/fa';
import { Address, Hours, Phone, Sidepanel } from '../components/Sidepanel';
import bgImg from '../images/stock-photo-3.jpg';
import { BackgroundImage } from '../components/BackgroundImage';
import { Card } from '../components/Card';
import { Header } from '../components/Header';

const Home: FC = () => {
   return (
      <div className="min-h-screen bg-gray-200">
         <Head>
            <title>R Core Transmissions - Oklahoma City</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <BackgroundImage image={bgImg} />

         <Navbar>
            <NavItem>
               <FaCar size="26" />
            </NavItem>
            <NavTitle>R Core Transmission Repair</NavTitle>
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact Us</NavItem>
         </Navbar>

         <Sidepanel>
            <Phone>(405) 789-3332</Phone>
            <Address>828 N Council Rd, Oklahoma City, OK 73127</Address>
            <Hours>
               <div>Monday - Friday</div>
               <div>8AM - 5PM</div>
            </Hours>
         </Sidepanel>
         <div className="flex justify-center">
            <Card>
               <Header>A little about us: </Header>
               We're an independent transmission shop that's also here for all of your car, truck or SUV’s repair and maintenance needs. From the most
               basic services, like changing oil, fluids and filters, to the most complicated issues.
            </Card>
         </div>
      </div>
   );
};
export default Home;
