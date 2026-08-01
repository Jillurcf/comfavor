import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { type Service } from '@/lib/data/services';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="block h-full">
      <Card className="h-full transition-shadow hover:shadow-xl">
        <h3 className="px-6 text-white text-lg font-semibold">{service.title}</h3>
        <p className="mt-1 px-6 text-sm text-gray-500">{service.tagline}</p>
      </Card>
    </Link>
  );
}
