import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from '@/components/common/SectionHeading';
import { company } from '@/utils/company';

export function Contact() {
  return (
    <section id="contact" className="bg-brand-leaf-texture py-20 sm:py-24">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Quote Request"
          title="Get Your Free Landscaping Quote"
          copy="Tell us what you have in mind and we will get back to you within 24 hours."
        />

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="rounded-md bg-brand-navy p-7 text-white shadow-lift">
            <h3 className="font-serif text-3xl font-black text-brand-gold">
              Contact details
            </h3>
            <div className="mt-7 grid gap-5">
              <a
                href={`tel:${company.phone.replace(/\D/g, '')}`}
                className="focus-ring flex min-h-12 items-center gap-4 rounded-md bg-white/8 p-4 transition hover:bg-white/14"
              >
                <Phone className="text-brand-gold" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="focus-ring flex min-h-12 items-center gap-4 rounded-md bg-white/8 p-4 transition hover:bg-white/14"
              >
                <Mail className="text-brand-gold" />
                {company.email}
              </a>
              <div className="flex min-h-12 items-center gap-4 rounded-md bg-white/8 p-4">
                <MapPin className="text-brand-gold" />
                {company.serviceArea}
              </div>
            </div>
            <p className="mt-7 leading-7 text-white/80">
              For fastest scheduling, include your address, preferred service,
              rough timeline, and any drainage or access concerns.
            </p>
          </aside>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
