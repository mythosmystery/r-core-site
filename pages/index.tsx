import Head from 'next/head';
import { FC } from 'react';
import { Address, Hours, Phone, Sidepanel } from '../components/Sidepanel';
import bgImg from '../images/stock-photo-3.jpg';
import { BackgroundImage } from '../components/BackgroundImage';
import Card from '../components/Card';
import { ReviewCard } from '../components/ReviewCard';
import { Header } from '../components/Header';

const Home: FC = () => {
   return (
      <>
         <Head>
            <title>R Core Transmissions - Oklahoma City</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div className="md:hidden pt-4">
            <Header>R Core Transmission</Header>
         </div>
         <BackgroundImage image={bgImg} />
         <div className="flex flex-row">
            <Sidepanel>
               <Phone>(405) 789-3332</Phone>
               <Address>828 N Council Rd, Oklahoma City, OK 73127</Address>
               <Hours>
                  <div>Monday - Friday</div>
                  <div>8AM - 5PM</div>
               </Hours>
            </Sidepanel>
            <div className="flex justify-center" id="about">
               <Card>
                  <Card.Header>A little about us: </Card.Header>
                  We're a transmission shop that's also here for all of your car, truck or SUV’s repair and maintenance needs. From the most basic
                  services, like changing oil, fluids and filters, to the most complicated issues. We can handle it! We are independently owned and
                  operated. We have been in business for 24 years, proving that OKC trusts R Core for all of its car care needs.
               </Card>
            </div>
         </div>
         <Header>Reviews</Header>
         <div className="flex flex-col sm:flex-row justify-center mx-6 gap-6 mt-6 pb-6" id="reviews">
            <ReviewCard name="Michael Carmack">
               This shop was recommended by a trusted mechanic friend. Expedient turnaround. Clean job. Competitive price. Good warranty. Experience.
               Professional & knowledgeable staff. It's been a few months since our F-body 4L60E was rebuilt. So far so good.
            </ReviewCard>
            <ReviewCard name="JP Potter">
               R Core has rebuilt two transmissions for me in the past and they have worked flawlessly . Took my truck by for them to look at today
               because it had symptoms of either a transmission problem or possibly an electrical issue. An R core technician test drove the truck and
               came back to report that it was not a transmission problem. He suggested instead to replace some specific electrical items to resolve
               the problem. The honesty is outstanding and they have a customer for life. Really appreciate these guys.... you will too.
            </ReviewCard>
            <ReviewCard name="Zeke W.">
               Randy is awesome. Great business. I had my truck towed from Tulsa just for him to repair. Had my transmission rebuilt in 2 days. Up and
               running. Reasonable and honest. Hard to find now days. I recommend this shop. You won't be disappointed.
            </ReviewCard>
         </div>
      </>
   );
};
export default Home;
