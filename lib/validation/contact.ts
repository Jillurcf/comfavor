import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[\d\s\-+()]{7,20}$/, 'Invalid phone number'),
  service: z.enum(['web', 'mobile', 'uiux', 'marketing', 'other']),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message is too long'),
});

export const HONEYPOT_FIELD = 'website' as const;

export const honeySchema = z.object({
  [HONEYPOT_FIELD]: z.string().max(0, 'Bot detected'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const SERVICE_OPTIONS = [
  { value: 'web', label: 'Website Development' },
  { value: 'mobile', label: 'Mobile App Development' },
  { value: 'uiux', label: 'UI/UX Design' },
  { value: 'marketing', label: 'Digital Marketing' },
  { value: 'other', label: 'Other' },
] as const;
