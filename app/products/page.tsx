import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/lib/data/products';
import ProductCard from '@/components/shared/ProductCard';
import { Button } from '@/components/ui/button';
import { buildMetadata, routeMetadata } from '@/lib/constants/seo';

export const metadata: Metadata = buildMetadata(routeMetadata.products);

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold text-(--primary-color)">Our Products</h1>
      <p className="mb-10 text-gray-600">
        Discover Comfavor&apos;s own digital products — from mobile apps to business platforms.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-gray-50 p-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">Interested in a Custom Product?</h2>
        <p className="mb-6 text-gray-600">
          We build tailor-made digital solutions for Bangladeshi businesses.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </section>
  );
}
