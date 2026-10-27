import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ExternalLink, ArrowLeft, CheckCircle } from 'lucide-react';
import { portfolio, getPortfolioBySlug } from '@/lib/data/portfolio';
import { Button } from '@/components/ui/button';
import { SITE_URL, breadcrumbSchema } from '@/lib/constants/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolio.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) return {};

  const url = `${SITE_URL}/portfolio/${slug}`;

  return {
    title: `${project.title} — Case Study | Comfavor Portfolio`,
    description: project.shortDescription,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `/portfolio/${slug}` },
    openGraph: {
      title: `${project.title} — Case Study | Comfavor`,
      description: project.shortDescription,
      url,
      siteName: 'Comfavor — Information Technology',
      locale: 'en_US',
      type: 'website',
      images: project.image ? [{ url: `${SITE_URL}${project.image}` }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Case Study | Comfavor`,
      description: project.shortDescription,
      images: project.image ? [`${SITE_URL}${project.image}`] : undefined,
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) notFound();

  const breadcrumb = breadcrumbSchema([
    { name: 'Portfolio', item: '/portfolio' },
    { name: project.title, item: `/portfolio/${slug}` },
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <Link
            href="/portfolio"
            className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-(--primary-color)"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-4 text-4xl font-bold text-(--primary-color)">{project.title}</h1>
              {project.clientName && (
                <p className="mb-4 text-lg text-gray-600">{project.clientName}</p>
              )}
              <p className="mb-6 text-lg leading-relaxed text-gray-700">{project.overview || project.shortDescription}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mb-6 flex items-center gap-4">
                <span className="rounded-full bg-white px-4 py-2 text-lg font-bold text-(--primary-color) shadow">
                  {project.priceLabel}
                </span>
                <Button asChild>
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live Site
                  </Link>
                </Button>
              </div>
            </div>

            {project.image && (
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={project.image}
                  alt={`${project.title} - Case Study`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {project.challenge && (
                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold text-(--primary-color)">The Challenge</h2>
                  <p className="leading-relaxed text-gray-700">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold text-(--primary-color)">Our Solution</h2>
                  <p className="leading-relaxed text-gray-700">{project.solution}</p>
                </div>
              )}

              {project.description && (
                <div className="mb-10">
                  <h2 className="mb-4 text-2xl font-bold text-(--primary-color)">Project Details</h2>
                  <p className="leading-relaxed text-gray-700">{project.description}</p>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {project.technologies && project.technologies.length > 0 && (
                <div className="rounded-2xl bg-white p-6 shadow-lg">
                  <h3 className="mb-4 text-lg font-semibold text-(--primary-color)">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.results && project.results.length > 0 && (
                <div className="rounded-2xl bg-white p-6 shadow-lg">
                  <h3 className="mb-4 text-lg font-semibold text-(--primary-color)">Results & Impact</h3>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-2xl bg-green-50 p-6">
                <h3 className="mb-2 text-lg font-semibold text-(--primary-color)">Project Value</h3>
                <p className="text-2xl font-bold text-green-700">{project.priceLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.gallery && project.gallery.length > 1 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-(--primary-color)">
              Project Gallery
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {project.gallery.slice(1).map((img, index) => (
                <div key={index} className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
                  <Image src={img} alt={`${project.title} gallery ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="mb-4 text-3xl font-bold text-(--primary-color)">Like What You See?</h2>
          <p className="mb-6 text-gray-600">
            Let's discuss your project and create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/portfolio">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
