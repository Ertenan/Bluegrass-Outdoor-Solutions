import { z } from 'zod';

export const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your full name.')
    .max(100, 'Name must be 100 characters or fewer.'),
  email: z
    .string()
    .trim()
    .max(254, 'Email must be 254 characters or fewer.')
    .email('Please enter a valid email address.'),
  phone: z.string().trim().max(30, 'Phone must be 30 characters or fewer.'),
  serviceType: z
    .string()
    .min(1, 'Choose a service type.')
    .max(80, 'Service type must be 80 characters or fewer.'),
  budget: z.string().max(50, 'Budget must be 50 characters or fewer.'),
  address: z.string().trim().max(300, 'Address must be 300 characters or fewer.'),
  description: z
    .string()
    .trim()
    .min(20, 'Tell us a little more about the project.')
    .max(5000, 'Description must be 5,000 characters or fewer.'),
  bot_trap: z.string().max(0, 'Submission blocked.'),
  turnstileToken: z.string().min(1, 'Complete the security verification.')
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
