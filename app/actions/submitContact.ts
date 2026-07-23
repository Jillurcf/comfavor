'use server';

import {
  contactSchema,
  honeySchema,
  HONEYPOT_FIELD,
  type ContactFormData,
} from '@/lib/validation/contact';

type ActionResult =
  | { success: true; message: string }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

export async function submitContactForm(
  _prevState: ActionResult | null,
  formData: FormData,
): Promise<ActionResult> {
  const rawHoneypot = Object.fromEntries([HONEYPOT_FIELD].map((f) => [f, formData.get(f) ?? '']));
  const honeyResult = honeySchema.safeParse(rawHoneypot);
  if (!honeyResult.success) {
    return { success: false, error: 'Submission rejected' };
  }

  const ip = 'global';
  if (!checkRateLimit(ip)) {
    return { success: false, error: 'Too many submissions. Please try again later.' };
  }

  const raw: Record<string, string> = {};
  for (const key of ['name', 'email', 'phone', 'service', 'message'] as const) {
    const value = formData.get(key);
    raw[key] = typeof value === 'string' ? value : '';
  }

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of result.error.issues) {
      const path = issue.path.join('.');
      if (!fieldErrors[path]) {
        fieldErrors[path] = [];
      }
      fieldErrors[path].push(issue.message);
    }
    return { success: false, error: 'Please fix the errors below.', fieldErrors };
  }

  const data: ContactFormData = result.data;

  console.info(
    '[Contact Submission]',
    JSON.stringify({ ...data, _timestamp: new Date().toISOString() }),
  );

  return {
    success: true,
    message: 'Thank you for reaching out! We will get back to you within 24 hours.',
  };
}
