'use client';

import { useActionState, useState } from 'react';
import { Button } from '@/components/ui/button';
import { SERVICE_OPTIONS, HONEYPOT_FIELD, contactSchema } from '@/lib/validation/contact';
import { submitContactForm } from '@/app/actions/submitContact';
import { cn } from '@/lib/utils';

function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return <p className="mt-1 text-sm text-red-500">{error}</p>;
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, null);

  const [dirty, setDirty] = useState<Record<string, boolean>>({});

  const [liveValues, setLiveValues] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  function handleBlur(field: string) {
    setDirty((prev) => ({ ...prev, [field]: true }));
  }

  function handleChange(field: string, value: string) {
    setLiveValues((prev) => ({ ...prev, [field]: value }));
  }

  function getFieldError(field: string): string | undefined {
    if (!dirty[field]) return undefined;
    const result = contactSchema.safeParse({
      ...liveValues,
      [field]: liveValues[field as keyof typeof liveValues],
    });
    if (!result.success) {
      const issue = result.error.issues.find((i) => i.path[0] === field);
      return issue?.message;
    }
    return undefined;
  }

  const fieldError = (field: string) => {
    if (state?.success === false && state.fieldErrors?.[field]) {
      return state.fieldErrors[field][0];
    }
    return getFieldError(field);
  };

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <input
        type="text"
        name={HONEYPOT_FIELD}
        className="absolute -left-[9999px] -top-[9999px]"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={liveValues.name}
          onChange={(e) => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          className={cn(
            'w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            fieldError('name') ? 'border-red-500' : 'border-gray-300',
          )}
          placeholder="Your name"
          required
        />
        <FieldError error={fieldError('name')} />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={liveValues.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            className={cn(
              'w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
              fieldError('email') ? 'border-red-500' : 'border-gray-300',
            )}
            placeholder="you@example.com"
            required
          />
          <FieldError error={fieldError('email')} />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={liveValues.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            className={cn(
              'w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
              fieldError('phone') ? 'border-red-500' : 'border-gray-300',
            )}
            placeholder="+880-1XXX-XXXXXX"
            required
          />
          <FieldError error={fieldError('phone')} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1 block text-sm font-medium text-gray-700">
          Service Interested In <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={liveValues.service}
          onChange={(e) => handleChange('service', e.target.value)}
          onBlur={() => handleBlur('service')}
          className={cn(
            'w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            fieldError('service') ? 'border-red-500' : 'border-gray-300',
          )}
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <FieldError error={fieldError('service')} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={liveValues.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          className={cn(
            'w-full resize-y rounded-md border px-3 py-2 text-sm shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            fieldError('message') ? 'border-red-500' : 'border-gray-300',
          )}
          placeholder="Tell us about your project..."
          required
        />
        <FieldError error={fieldError('message')} />
      </div>

      {state?.success === false && !state.fieldErrors && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">{state.error}</div>
      )}

      {state?.success === true && (
        <div className="rounded-md bg-green-50 p-4 text-center text-green-700">
          <p className="font-semibold">Message Sent!</p>
          <p className="mt-1 text-sm">{state.message}</p>
        </div>
      )}

      {!state?.success && (
        <Button
          type="submit"
          disabled={pending}
          className="w-full bg-(--primary-color) text-white hover:bg-green-700 md:w-auto"
        >
          {pending ? 'Sending...' : 'Send Message'}
        </Button>
      )}

      {state?.success === true && (
        <Button
          type="reset"
          variant="outline"
          onClick={() => {
            setLiveValues({ name: '', email: '', phone: '', service: '', message: '' });
            setDirty({});
          }}
        >
          Send Another Message
        </Button>
      )}
    </form>
  );
}
