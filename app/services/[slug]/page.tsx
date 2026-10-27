import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services, getServiceBySlug } from '@/lib/data/services';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
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
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-[var(--primary-color)]"
          >
            <ArrowLeft className="h-4 w-4" />
            All Services
          </Link>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-2 text-4xl font-bold text-(--primary-color)">{service.title}</h1>
              <p className="mb-4 text-lg text-gray-500">{service.tagline}</p>
              <p className="leading-relaxed text-gray-700">{service.longDescription}</p>
            </div>
            {service.image && (
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">

      <h2 className="mb-6 text-2xl font-semibold text-(--primary-color)">How We Deliver</h2>

      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {service.process.map((step) => {
          const serviceImages: Record<string, string[]> = {
            web: ['/web-dev.jpg', '/website.jpg', '/BannerImg_1.jpg', '/BannerImg_2.jpg', '/web-dev.jpg'],
            mobile: ['/mobile-app.jpg', '/BannerImg_2.jpg', '/website.jpg', '/digital-marketing.jpg', '/mobile-app.jpg'],
            uiux: ['/uiux-design.jpg', '/BannerImg_1.jpg', '/website.jpg', '/BannerImg_2.jpg', '/uiux-design.jpg'],
            marketing: ['/digital-marketing.jpg', '/digitalMarketing.jpg', '/website.jpg', '/BannerImg_1.jpg', '/digital-marketing.jpg'],
          };
          const images = serviceImages[service.slug] || ['/web-dev.jpg', '/website.jpg', '/BannerImg_1.jpg', '/BannerImg_2.jpg', '/web-dev.jpg'];
          return (
            <div
              key={step.step}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={images[step.step - 1] || service.image || '/website.jpg'}
                  alt={`${service.title} - ${step.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-(--primary-color) text-sm font-bold text-white">
                  {step.step}
                </span>
                <h3 className="mb-1 font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          );
        })}
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

      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl bg-green-600 p-8 text-center text-white">
            <h2 className="mb-2 text-2xl font-bold">Ready to Get Started?</h2>
            <p className="mb-6 text-green-100">
              Tell us about your project and get a free consultation.
            </p>
            <Button asChild className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
