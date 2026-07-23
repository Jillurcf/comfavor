import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { products, getProductBySlug } from '@/lib/data/products';
import { Button } from '@/components/ui/button';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — Comfavor Products`,
    description: product.tagline,
    openGraph: {
      title: `${product.name} — Comfavor Products`,
      description: product.tagline,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <Link
        href="/products"
        className="mb-8 inline-flex items-center gap-1 text-sm text-gray-600 hover:text-[var(--primary-color)]"
      >
        &larr; Back to Products
      </Link>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src={product.screenshots[0]}
              alt={`${product.name} screenshot`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {product.screenshots.length > 1 && (
            <div className="grid grid-cols-2 gap-4">
              {product.screenshots.slice(1).map((src, i) => (
                <div key={src} className="relative aspect-video w-full overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`${product.name} screenshot ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-1 text-lg text-gray-500">{product.tagline}</p>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div>
            <h2 className="mb-3 text-lg font-semibold">Features</h2>
            <ul className="flex flex-col gap-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--primary-color)]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {product.downloadLinks.map((link) =>
              link.url ? (
                <Button key={link.platform} asChild size="lg">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Download on ${link.label}`}
                  >
                    {link.label}
                  </a>
                </Button>
              ) : (
                <Button
                  key={link.platform}
                  size="lg"
                  variant="outline"
                  disabled
                  aria-label={`${link.label} — Coming Soon`}
                >
                  {link.label} — Coming Soon
                </Button>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
