import React from 'react';
import NavBar from './home/NavBar';
import Banner from './home/Banner';
import DownloadAppCard from './home/DownloadAppCard';
import Services from './home/ServiceSection';
import WhyChooseUs from './home/WhyChooseUs';
import OfferCTA from './home/OfferCTA';
const Page = () => {
  return (
    <div className="">



      <Banner />

      <DownloadAppCard />
      <Services />
      <WhyChooseUs />
      <OfferCTA />
    </div>
  );
};

export default Page;
