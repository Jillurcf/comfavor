import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services, getServiceBySlug } from '@/lib/data/services';
import { Button } from '@/components/ui/button';
import { SITE_URL, serviceSchema, breadcrumbSchema } from '@/lib/constants/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const serviceTitles: Record<string, string> = {
  web: 'Website Development — Comfavor Services',
  mobile: 'Mobile App Development — Comfavor Services',
  uiux: 'UI/UX Design — Comfavor Services',
  marketing: 'Digital Marketing — Comfavor Services',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const url = `${SITE_URL}/services/${slug}`;

  return {
    title: serviceTitles[slug] ?? `${service.title} — Comfavor Services`,
    description: service.description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: serviceTitles[slug] ?? `${service.title} — Comfavor Services`,
      description: service.description,
      url,
      siteName: 'Comfavor — Information Technology',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: serviceTitles[slug] ?? `${service.title} — Comfavor Services`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const schema = serviceSchema[slug as keyof typeof serviceSchema];
  const breadcrumb = breadcrumbSchema([
    { name: 'Services', item: '/services' },
    { name: service.title, item: `/services/${slug}` },
  ]);

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <Link
        href="/services"
        className="mb-8 inline-flex items-center gap-1 text-sm text-gray-600 hover:text-[var(--primary-color)]"
      >
        &larr; All Services
      </Link>

      <h1 className="mb-2 text-4xl font-bold">{service.title}</h1>
      <p className="mb-8 text-lg text-gray-500">{service.tagline}</p>

      <p className="mb-12 max-w-3xl leading-relaxed text-gray-600">{service.longDescription}</p>

      <h2 className="mb-6 text-2xl font-semibold text-(--primary-color)">How We Deliver</h2>

      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {service.process.map((step) => (
          <div key={step.step} className="rounded-2xl border border-gray-200 p-6">
            <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-(--primary-color) text-sm font-bold text-white">
              {step.step}
            </span>
            <h3 className="mb-1 font-semibold">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-6 text-2xl font-semibold text-(--primary-color)">Technologies</h2>

      <div className="mb-12 flex flex-wrap gap-3">
        {service.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="rounded-2xl bg-green-600 p-8 text-center text-white">
        <h2 className="mb-2 text-2xl font-bold">Ready to Get Started?</h2>
        <p className="mb-6 text-green-100">
          Tell us about your project and get a free consultation.
        </p>
        <Button asChild className="bg-white text-green-600 hover:bg-gray-100">
          <Link href="/contact">Get a Quote</Link>
        </Button>
      </div>
    </section>
  );
}
