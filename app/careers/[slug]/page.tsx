import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, MapPin, Briefcase, Clock, ArrowLeft, Check } from 'lucide-react';
import { jobs, getJobBySlug } from '@/lib/data/careers';
import JobApplicationForm from '@/components/shared/JobApplicationForm';
import { Button } from '@/components/ui/button';
import { SITE_URL, buildMetadata, breadcrumbSchema } from '@/lib/constants/seo';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export async function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return buildMetadata({
    title: `${job.title} — Careers at Comfavor`,
    description: job.description,
    path: `/careers/${slug}`,
  });
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const breadcrumb = breadcrumbSchema([
    { name: 'Careers', item: '/careers' },
    { name: job.title, item: `/careers/${slug}` },
  ]);

  const jobPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.publishedAt,
    validThrough: job.closingAt,
    employmentType: job.type.toUpperCase().replace('-', ''),
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Comfavor Information Technology',
      sameAs: SITE_URL,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressCountry: 'BD',
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'BDT',
      value: {
        '@type': 'QuantitativeValue',
        value: job.salaryRange,
        unitText: 'MONTH',
      },
    },
  };

  const typeStyles: Record<string, string> = {
    'full-time': 'bg-blue-50 text-blue-700',
    'part-time': 'bg-purple-50 text-purple-700',
    contract: 'bg-orange-50 text-orange-700',
    remote: 'bg-teal-50 text-teal-700',
    internship: 'bg-pink-50 text-pink-700',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />

      <div className="mx-auto max-w-5xl px-4 py-16">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/careers">
            <ArrowLeft className="h-4 w-4" />
            Back to Careers
          </Link>
        </Button>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${typeStyles[job.type] || 'bg-gray-50 text-gray-700'}`}
              >
                {job.type}
              </span>
              {job.featured && (
                <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
                  Featured
                </span>
              )}
            </div>

            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              {job.title}
            </h1>

            <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4" />
                {job.department}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                Posted {formatDate(job.publishedAt)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                Closes {formatDate(job.closingAt)}
              </span>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-gray-700">{job.description}</p>

            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-(--primary-color)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-(--primary-color)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Benefits</h2>
              <ul className="space-y-3">
                {job.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-(--primary-color)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-green-50 p-6">
              <p className="text-sm text-gray-600">
                <strong>Salary Range:</strong> {job.salaryRange}
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-gray-900">Apply for This Position</h2>
              <p className="mb-6 text-sm text-gray-600">
                Fill out the form below and we&apos;ll get back to you within 5 business days.
              </p>
              <JobApplicationForm jobSlug={job.slug} jobTitle={job.title} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
