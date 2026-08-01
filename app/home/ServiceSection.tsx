import { services } from '@/lib/data/services';
import ServiceCard from '@/components/shared/ServiceCard';
import Scene3D from '@/components/shared/Scene3D';
import ServicesScene from '@/components/home/ServicesScene';

export default function Services() {
  return (
    <section id="section-services" className="relative overflow-hidden bg-gray-900 py-16">
      {/* <div className="absolute inset-0 z-0">
        <Scene3D
          containerClassName="h-full w-full"
          cameraPosition={[0, 0, 8]}
          cameraFov={50}
          frameloop="demand"
          logarithmicDepthBuffer
        >
          <ServicesScene />
        </Scene3D>
      </div> */}

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h2 className="mb-10 text-center text-3xl font-bold text-(--primary-color) ">
          Our Services
        </h2>

        <div className="grid w-[90%] grid-cols-1 gap-6 px-8 md:w-[50%] md:grid-cols-2 lg:w-[70%] lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
