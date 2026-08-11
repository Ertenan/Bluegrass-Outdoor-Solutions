import { z } from 'zod';

export const quoteSchema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  serviceType: z.string().min(1, 'Choose a service type.'),
  budget: z.string().optional(),
  address: z.string().optional(),
  description: z
    .string()
    .min(20, 'Tell us a little more about the project.'),
  bot_trap: z.string().max(0, 'Submission blocked.'),
  turnstileToken: z.string().optional()
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
