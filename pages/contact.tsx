import React from 'react';
import { BackgroundImage } from '../components/BackgroundImage';
import bgImg from '../images/stock-photo-4.jpg';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { Header } from '../components/Header';
import { TextInput } from '../components/TextInput';
import { Textarea } from '../components/Textarea';
import { ErrorMsg } from '../components/ErrorMsg';

interface contactProps {}

interface FormValues {
   name: string;
   phone: string;
   email: string;
   message: string;
}

const contact: React.FC<contactProps> = ({}) => {
   const onSubmit = (values: FormValues, { setErrors }: FormikHelpers<FormValues>) => {
      console.log(values);
      setErrors({ message: 'This feature is not enabled yet' });
   };
   return (
      <>
         <BackgroundImage image={bgImg} />
         <div className="bg-gray-400/50 backdrop-blur-xl w-3/5 py-6 my-8 mx-auto">
            <Header>Contact Us</Header>
            <Formik onSubmit={onSubmit} initialValues={{ name: '', phone: '', email: '', message: '' } as FormValues}>
               {({ isSubmitting, isValid }) => (
                  <Form>
                     <div className="flex flex-col gap-6 my-10 w-2/4 justify-center mx-auto">
                        <Field as={TextInput} name="name" placeholder="Enter your name..." />
                        <Field as={TextInput} name="phone" placeholder="Enter your phone number..." />
                        <Field as={TextInput} name="email" type="email" placeholder="Enter your email address..." />
                        <Field as={Textarea} name="message" placeholder="Write your message..." />
                        <ErrorMessage name="message" component={ErrorMsg} />
                        <button
                           type="submit"
                           className="border border-gray-800/50 p-2 w-1/4 mx-auto text-blue-700 hover:text-red-400 hover:bg-gray-700/50 hover:border-none"
                           disabled={isSubmitting || !isValid}
                        >
                           Send
                        </button>
                     </div>
                  </Form>
               )}
            </Formik>
         </div>
      </>
   );
};
export default contact;
