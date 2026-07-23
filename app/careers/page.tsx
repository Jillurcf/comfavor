import type { Metadata } from 'next';
import { buildMetadata, routeMetadata } from '@/lib/constants/seo';
import { getPublishedJobs } from '@/lib/data/careers';
import JobCard from '@/components/shared/JobCard';

export const metadata: Metadata = buildMetadata(routeMetadata.careers);

export default function CareersPage() {
  const publishedJobs = getPublishedJobs();

  const departments = [...new Set(publishedJobs.map((j) => j.department))];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold text-(--primary-color)">Join Our Team</h1>
      <p className="mb-10 max-w-2xl text-gray-600">
        Build your career at Comfavor. We are always looking for talented individuals who share our
        passion for technology and innovation. Explore our open positions below.
      </p>

      <div className="mb-12 rounded-2xl bg-green-50 p-8 text-center">
        <h2 className="mb-2 text-xl font-bold text-gray-900">Why Work at Comfavor?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-gray-600">
          At Comfavor, we believe in fostering a culture of growth, collaboration, and innovation.
          We offer competitive compensation, flexible working arrangements, and opportunities for
          continuous learning. Join us in building the digital backbone for Bangladeshi businesses.
        </p>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 text-left md:grid-cols-3">
          <div className="rounded-xl bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-(--primary-color)">Flexible</p>
            <p className="text-sm text-gray-600">Remote & hybrid work options</p>
          </div>
          <div className="rounded-xl bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-(--primary-color)">Growth</p>
            <p className="text-sm text-gray-600">Learning budget & mentorship</p>
          </div>
          <div className="rounded-xl bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-(--primary-color)">Impact</p>
            <p className="text-sm text-gray-600">Build products for Bangladesh</p>
          </div>
        </div>
      </div>

      {departments.map((dept) => {
        const deptJobs = publishedJobs.filter((j) => j.department === dept);
        if (deptJobs.length === 0) return null;

        return (
          <div key={dept} className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">{dept}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {deptJobs.map((job) => (
                <JobCard key={job.slug} job={job} />
              ))}
            </div>
          </div>
        );
      })}

      {publishedJobs.length === 0 && (
        <div className="rounded-2xl bg-gray-50 p-12 text-center">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">No Open Positions</h2>
          <p className="text-gray-600">
            We don&apos;t have any open positions right now, but we&apos;re always interested in
            connecting with talented people. Send us your resume at{' '}
            <a href="mailto:careers@comfavor.com" className="text-(--primary-color) underline">
              careers@comfavor.com
            </a>
            .
          </p>
        </div>
      )}
    </section>
  );
}
