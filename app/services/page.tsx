import type { Metadata } from 'next';
import { services } from '@/lib/data/services';
import ServiceCard from '@/components/shared/ServiceCard';
import { buildMetadata, routeMetadata } from '@/lib/constants/seo';

export const metadata: Metadata = buildMetadata(routeMetadata.services);

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold text-(--primary-color)">Our Services</h1>
      <p className="mb-10 text-gray-600">
        Comprehensive IT services tailored for Bangladeshi businesses.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}
