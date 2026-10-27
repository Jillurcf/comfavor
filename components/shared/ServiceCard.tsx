import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { type Service } from '@/lib/data/services';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="block h-full">
      <Card className="group h-full overflow-hidden transition-shadow hover:shadow-xl">
        {service.image && (
          <div className="relative h-40 w-full overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-(--primary-color)">{service.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{service.tagline}</p>
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600">
            Learn More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
