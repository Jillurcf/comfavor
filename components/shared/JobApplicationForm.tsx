'use client';

import { useState } from 'react';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const jobApplicationSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[\d\s\-+()]{7,20}$/, 'Invalid phone number'),
  coverLetter: z
    .string()
    .min(20, 'Cover letter must be at least 20 characters')
    .max(3000, 'Cover letter is too long'),
});

type FormData = z.infer<typeof jobApplicationSchema>;

function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return <p className="mt-1 text-sm text-red-500">{error}</p>;
}

export default function JobApplicationForm({
  jobSlug,
  jobTitle,
}: {
  jobSlug: string;
  jobTitle: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [dirty, setDirty] = useState<Record<string, boolean>>({});
  const [values, setValues] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
  });

  function handleBlur(field: string) {
    setDirty((prev) => ({ ...prev, [field]: true }));
  }

  function handleChange(field: keyof FormData, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function getFieldError(field: keyof FormData): string | undefined {
    if (!dirty[field]) return undefined;
    const result = jobApplicationSchema.safeParse(values);
    if (!result.success) {
      const issue = result.error.issues.find((i) => i.path[0] === field);
      return issue?.message;
    }
    return undefined;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDirty({ name: true, email: true, phone: true, coverLetter: true });

    const result = jobApplicationSchema.safeParse(values);
    if (!result.success) return;

    setPending(true);

    console.info('[Job Application]', {
      jobSlug,
      jobTitle,
      ...values,
      _timestamp: new Date().toISOString(),
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setPending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-md bg-green-50 p-4 text-center text-green-700">
        <p className="font-semibold">Application Submitted!</p>
        <p className="mt-1 text-sm">We&apos;ll review your application and get back to you.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="app-name" className="mb-1 block text-sm font-medium text-gray-700">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="app-name"
          name="name"
          type="text"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          className={cn(
            'w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            getFieldError('name') ? 'border-red-500' : 'border-gray-300',
          )}
          placeholder="Your full name"
          required
        />
        <FieldError error={getFieldError('name')} />
      </div>

      <div>
        <label htmlFor="app-email" className="mb-1 block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="app-email"
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          className={cn(
            'w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            getFieldError('email') ? 'border-red-500' : 'border-gray-300',
          )}
          placeholder="you@example.com"
          required
        />
        <FieldError error={getFieldError('email')} />
      </div>

      <div>
        <label htmlFor="app-phone" className="mb-1 block text-sm font-medium text-gray-700">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="app-phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          onBlur={() => handleBlur('phone')}
          className={cn(
            'w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            getFieldError('phone') ? 'border-red-500' : 'border-gray-300',
          )}
          placeholder="+880-1XXX-XXXXXX"
          required
        />
        <FieldError error={getFieldError('phone')} />
      </div>

      <div>
        <label htmlFor="app-cover-letter" className="mb-1 block text-sm font-medium text-gray-700">
          Cover Letter <span className="text-red-500">*</span>
        </label>
        <textarea
          id="app-cover-letter"
          name="coverLetter"
          rows={4}
          value={values.coverLetter}
          onChange={(e) => handleChange('coverLetter', e.target.value)}
          onBlur={() => handleBlur('coverLetter')}
          className={cn(
            'w-full resize-y rounded-md border px-3 py-2 text-sm shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            getFieldError('coverLetter') ? 'border-red-500' : 'border-gray-300',
          )}
          placeholder="Tell us why you&apos;re a great fit for this role..."
          required
        />
        <FieldError error={getFieldError('coverLetter')} />
      </div>

      <Button
        type="submit"
        disabled={pending}
        className="w-full bg-(--primary-color) text-white hover:bg-green-700"
      >
        {pending ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  );
}
