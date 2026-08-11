'use client';

import Image from 'next/image';
import { Award, MapPin, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/common/SectionHeading';
import { fadeUp } from '@/utils/animations';
import { serviceListText } from '@/content/services';
import { publicAsset } from '@/utils/assets';

const stats = [
  { label: 'Founded', value: '2023' },
  { label: 'Projects Completed', value: '100+' },
  { label: 'Primary Area', value: 'NKY' }
];

export function About() {
  return (
    <section id="about" className="bg-brand-cream py-20 sm:py-24">
      <div className="site-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div {...fadeUp}>
          <SectionHeading
            eyebrow="About Us"
            title="Craftsmanship rooted in the Bluegrass."
            copy={`Bluegrass Outdoor Solutions provides ${serviceListText.toLowerCase()} for homeowners and small businesses across Northern Kentucky.`}
            align="left"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-4 border-brand-gold bg-white px-5 py-4 shadow-sm"
              >
                <p className="font-serif text-3xl font-black text-brand-navy">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.1em] text-brand-bronze">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 text-slate-700 sm:grid-cols-3">
            <div className="flex gap-3">
              <Award className="mt-1 shrink-0 text-brand-green" />
              <p>Premium finishes and careful installation details.</p>
            </div>
            <div className="flex gap-3">
              <ShieldCheck className="mt-1 shrink-0 text-brand-green" />
              <p>Clear estimates, dependable scheduling, tidy job sites.</p>
            </div>
            <div className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-brand-green" />
              <p>Local service for Union, Florence, and nearby communities.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[420px] overflow-hidden rounded-md shadow-lift"
        >
          <Image
            src={publicAsset('/images/live-site/about-landscape.webp')}
            alt="Finished curved landscape bed with stone edging and new plantings"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
            style={{ objectPosition: '50% 48%' }}
          />
          <div className="absolute inset-x-6 bottom-6 rounded-md bg-white/90 p-5 shadow-glow backdrop-blur">
            <p className="font-serif text-xl font-black text-brand-navy">
              Built for curb appeal and long-term care.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              From the first design or site-preparation step through final
              installation, every detail is planned around your property.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
