import type { Metadata } from 'next';
import Banner from './home/Banner';
import DownloadAppCard from './home/DownloadAppCard';
import Services from './home/ServiceSection';
import WhyChooseUs from './home/WhyChooseUs';
import OfferCTA from './home/OfferCTA';
import SectionTransitionScene from '@/components/home/SectionTransitionScene';
import { buildMetadata, routeMetadata } from '@/lib/constants/seo';

export const metadata: Metadata = buildMetadata(routeMetadata.home);

export default function HomePage() {
  return (
    <div className="relative">
      <SectionTransitionScene />
      <div className="relative z-10">
        <h1 className="sr-only">Comfavor — IT Services in Bangladesh</h1>
        <Banner />
        <DownloadAppCard />
        <Services />
        <WhyChooseUs />
        <OfferCTA />
      </div>
    </div>
  );
}
