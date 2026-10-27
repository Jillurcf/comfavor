import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function OfferCTA() {
  return (
    <section
      id="section-cta"
      className="flex min-h-[70vh] w-full items-center justify-center bg-green-600 py-10 text-center text-white md:py-12"
    >
      <div className="w-full px-4">
        <h2 className="mb-4 text-3xl font-bold">Free 30-Minute Consultation</h2>
        <p className="mb-6">Discuss your idea, timeline & budget — no commitment.</p>
        <Button asChild className="bg-white text-green-600 hover:bg-gray-100">
          <Link href="/contact">Book Free Call</Link>
        </Button>
      </div>
    </section>
  );
}
