import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { type Product } from '@/lib/data/products';

function DownloadButton({ link }: { link: Product['downloadLinks'][number] }) {
  if (link.url) {
    return (
      <Button asChild variant="outline" size="sm">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Download on ${link.label}`}
        >
          {link.label}
        </a>
      </Button>
    );
  }

  return (
    <Button variant="outline" size="sm" disabled aria-label={`${link.label} — Coming Soon`}>
      {link.label} — Coming Soon
    </Button>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={product.screenshots[0]}
          alt={`${product.name} — ${product.tagline}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.tagline}</p>
        <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>

        <ul className="mt-2 flex flex-col gap-1">
          {product.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary-color)]" />
              {feature}
            </li>
          ))}
          {product.features.length > 3 && (
            <li className="text-sm text-gray-400">+{product.features.length - 3} more features</li>
          )}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          {product.downloadLinks.map((link) => (
            <DownloadButton key={link.platform} link={link} />
          ))}

          <Button asChild variant="ghost" size="sm">
            <Link href={`/products/${product.slug}`}>Details</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
