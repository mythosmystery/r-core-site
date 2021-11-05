import React from 'react';
import { BackgroundImage } from '../components/BackgroundImage';
import { Header } from '../components/Header';
import bgImg from '../images/stock-photo-4.jpg';
import { Formik } from 'formik';

interface contactProps {}

interface FormValues {
   name: string;
   phone: string;
   email: string;
   message: string;
}

const contact: React.FC<contactProps> = ({}) => {
   const onSubmit = (values: FormValues) => {
      console.log(values);
   };
   return (
      <>
         <BackgroundImage image={bgImg} />
         <div className="bg-gray-400/50 backdrop-blur-xl w-3/5 h-screen my-12 mx-auto">
            <Header>Contact Us</Header>
            <Formik onSubmit={onSubmit} initialValues={{ name: '', phone: '', email: '', message: '' } as FormValues}></Formik>
         </div>
      </>
   );
};
export default contact;
