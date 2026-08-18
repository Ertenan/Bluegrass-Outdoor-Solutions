'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Turnstile } from '@marsidev/react-turnstile';
import { CheckCircle2, Loader2, Send, TriangleAlert } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { company } from '@/utils/company';
import { quoteSchema, type QuoteFormData } from '@/utils/validation';
import { serviceTitles } from '@/content/services';

const endpoint =
  process.env.NEXT_PUBLIC_QUOTE_ENDPOINT || 'https://api.web3forms.com/submit';
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';
const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'missing'>(
    'idle'
  );
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileGeneration, setTurnstileGeneration] = useState(0);
  const formConfigured = Boolean(
    turnstileSiteKey && (accessKey || !endpoint.includes('web3forms.com'))
  );

  const {
    register,
    handleSubmit,
    reset,
    setError,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      budget: '',
      address: '',
      description: '',
      bot_trap: '',
      turnstileToken: ''
    }
  });

  useEffect(() => {
    function selectRequestedService(event: Event) {
      const service = (event as CustomEvent<string>).detail;

      if (serviceTitles.includes(service)) {
        setValue('serviceType', service, {
          shouldDirty: true,
          shouldValidate: true
        });
      }
    }

    window.addEventListener('quote-service-selected', selectRequestedService);
    return () =>
      window.removeEventListener('quote-service-selected', selectRequestedService);
  }, [setValue]);

  async function onSubmit(data: QuoteFormData) {
    setStatus('idle');

    if (!formConfigured) {
      setStatus('missing');
      return;
    }

    const payload = {
      access_key: accessKey,
      subject: 'New Quote Request',
      from_name: 'Bluegrass Outdoor Solutions Website',
      name: data.name,
      email: data.email,
      phone: data.phone,
      service_type: data.serviceType,
      project_budget: data.budget,
      property_address: data.address,
      project_description: data.description,
      botcheck: data.bot_trap,
      'cf-turnstile-response': data.turnstileToken
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setStatus('success');
      reset();
      setTurnstileToken('');
      setTurnstileGeneration((generation) => generation + 1);
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-md bg-white p-5 shadow-lift sm:p-7 lg:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name?.message} required>
          <input
            {...register('name')}
            className="form-field"
            autoComplete="name"
            maxLength={100}
            placeholder="Jane Smith"
          />
        </Field>

        <Field label="Email Address" error={errors.email?.message} required>
          <input
            {...register('email')}
            type="email"
            className="form-field"
            autoComplete="email"
            maxLength={254}
            placeholder="jane@example.com"
          />
        </Field>

        <Field label="Phone Number" error={errors.phone?.message}>
          <input
            {...register('phone')}
            type="tel"
            className="form-field"
            autoComplete="tel"
            maxLength={30}
            placeholder="513-687-9089"
          />
        </Field>

        <Field label="Service Type" error={errors.serviceType?.message} required>
          <select {...register('serviceType')} className="form-field">
            <option value="">Select a service</option>
            {[...serviceTitles, 'Other / Not sure'].map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Project Budget" error={errors.budget?.message}>
          <select {...register('budget')} className="form-field">
            <option value="">Select a budget (optional)</option>
            <option value="Under $2,000">Under $2,000</option>
            <option value="$2,000–$5,000">$2,000–$5,000</option>
            <option value="$5,000–$10,000">$5,000–$10,000</option>
            <option value="$10,000–$15,000">$10,000–$15,000</option>
            <option value="$15,000+">$15,000+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field label="Property Address" error={errors.address?.message}>
            <input
              {...register('address')}
              className="form-field"
              autoComplete="street-address"
              maxLength={300}
              placeholder="Street, city, ZIP"
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field
            label="Project Description"
            error={errors.description?.message}
            required
          >
            <textarea
              {...register('description')}
              className="form-field min-h-36 resize-y"
              maxLength={5000}
              placeholder="Tell us about your goals, timeline, and property."
            />
          </Field>
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="bot_trap">Do not fill this out if you are human</label>
        <input id="bot_trap" {...register('bot_trap')} tabIndex={-1} autoComplete="off" />
      </div>

      {turnstileSiteKey ? (
        <div className="mt-5">
          <Turnstile
            key={turnstileGeneration}
            siteKey={turnstileSiteKey}
            onSuccess={(token) => {
              setTurnstileToken(token);
              setValue('turnstileToken', token, { shouldValidate: true });
            }}
            onExpire={() => {
              setTurnstileToken('');
              setValue('turnstileToken', '', { shouldValidate: true });
            }}
            onError={() => {
              setTurnstileToken('');
              setValue('turnstileToken', '');
              setError('turnstileToken', {
                message: 'Security verification failed. Please try again.'
              });
            }}
          />
          {errors.turnstileToken ? (
            <p className="mt-2 text-sm font-semibold text-red-700">
              {errors.turnstileToken.message}
            </p>
          ) : null}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting || !turnstileToken || !formConfigured}
        className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-brand-green px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-brand-gold hover:text-brand-navy disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
        {isSubmitting ? 'Sending...' : 'Send Quote Request'}
      </button>

      <div className="mt-5 min-h-8" aria-live="polite">
        {status === 'success' ? (
          <p className="flex items-center gap-2 font-bold text-brand-green">
            <CheckCircle2 size={20} />
            Thank you! We will contact you soon.
          </p>
        ) : null}
        {status === 'error' ? (
          <p className="flex items-center gap-2 font-bold text-red-700">
            <TriangleAlert size={20} />
            Something went wrong. Please try again or call {company.phone}.
          </p>
        ) : null}
        {status === 'missing' || !formConfigured ? (
          <p className="flex items-center gap-2 font-bold text-brand-bronze">
            <TriangleAlert size={20} />
            The secure form is not fully configured. Please call {company.phone} instead.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-brand-navy">
      <span>
        {label} {required ? <span className="text-brand-bronze">*</span> : null}
      </span>
      {children}
      {error ? <span className="text-sm font-semibold text-red-700">{error}</span> : null}
    </label>
  );
}
