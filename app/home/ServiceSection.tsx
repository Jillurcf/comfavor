import { services } from '@/lib/data/services';
import ServiceCard from '@/components/shared/ServiceCard';
import Scene3D from '@/components/shared/Scene3D';
import ServicesScene from '@/components/home/ServicesScene';

export default function Services() {
  return (
    <section
      id="section-services"
      className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-gray-900 py-10 md:py-12"
    >
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-(--primary-color) md:mb-10">
          Our Services
        </h2>

        <div className="grid w-full max-w-7xl grid-cols-2 gap-3 px-2 md:gap-6 md:px-4 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
