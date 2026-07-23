import Link from 'next/link';
import { CalendarDays, MapPin, Briefcase, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { type Job } from '@/lib/data/careers';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const typeStyles: Record<string, string> = {
  'full-time': 'bg-blue-50 text-blue-700',
  'part-time': 'bg-purple-50 text-purple-700',
  contract: 'bg-orange-50 text-orange-700',
  remote: 'bg-teal-50 text-teal-700',
  internship: 'bg-pink-50 text-pink-700',
};

export default function JobCard({ job }: { job: Job }) {
  return (
    <Link href={`/careers/${job.slug}`} className="block h-full">
      <Card className="flex h-full flex-col transition-shadow hover:shadow-xl">
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold leading-snug text-gray-900">{job.title}</h3>
            <span
              className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${typeStyles[job.type] || 'bg-gray-50 text-gray-700'}`}
            >
              {job.type}
            </span>
          </div>

          <p className="text-sm text-gray-500">{job.department}</p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              {formatDate(job.publishedAt)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              Closes {formatDate(job.closingAt)}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-gray-600 line-clamp-3">{job.description}</p>

          <div className="mt-auto flex items-center justify-between pt-4">
            <span className="flex items-center gap-1 text-sm font-medium text-[var(--primary-color)]">
              <Briefcase className="h-4 w-4" />
              {job.salaryRange}
            </span>
            <span className="text-sm font-medium text-[var(--primary-color)]">
              Apply Now &rarr;
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
