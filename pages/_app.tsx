import { AppProps } from 'next/app';
import { FC } from 'react';
import 'tailwindcss/tailwind.css';
import { NavbarComponent } from '../components/NavbarComponent';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
   return (
      <div className="min-h-screen bg-gray-500">
         <NavbarComponent />
         <Component {...pageProps} />
      </div>
   );
};

export default MyApp;
