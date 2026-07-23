import { services } from '@/lib/data/services';
import ServiceCard from '@/components/shared/ServiceCard';

export default function Services() {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-(--primary-color) underline">
        Our Services
      </h2>

      <div className="grid w-[90%] grid-cols-1 gap-6 px-8 md:w-[50%] md:grid-cols-2 lg:w-[70%] lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}
