'use client';

import Image from 'next/image';
import {
  Blocks,
  Flower2,
  Sprout,
  Trees
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { serviceCategories, type ServiceCategory } from '@/content/services';
import { fadeUp } from '@/utils/animations';

const icons = { trees: Trees, blocks: Blocks, sprout: Sprout, flower: Flower2 };

export function Services() {
  const [active, setActive] = useState<ServiceCategory>(serviceCategories[0]);

  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Services"
          title="Four ways to transform and improve your property."
          copy="From a complete designed landscape to a focused lawn, hardscape, or planting project, every job is planned around your property."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((service, index) => {
            const Icon = icons[service.icon];
            const selected = active?.title === service.title;
            return (
              <motion.button
                key={service.title}
                type="button"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                onClick={() => setActive(service)}
                className={`focus-ring group grid min-h-[248px] rounded-md border bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-lift ${
                  selected ? 'border-brand-gold ring-2 ring-brand-gold/25' : 'border-slate-200'
                }`}
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand-mist text-brand-green transition group-hover:bg-brand-gold group-hover:text-brand-navy">
                  <Icon size={25} />
                </span>
                <span className="font-serif text-2xl font-black text-brand-navy">
                  {service.title}
                </span>
                <span className="mt-3 leading-7 text-slate-700">{service.summary}</span>
                <span className="mt-5 text-sm font-bold uppercase tracking-[0.12em] text-brand-bronze">
                  View what&apos;s included
                </span>
              </motion.button>
            );
          })}
        </div>

        {active ? (
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-8 grid overflow-hidden rounded-md border border-brand-bronze/30 bg-brand-leaf-texture shadow-lift lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="relative min-h-[280px]">
              <Image
                src={active.image}
                alt={`${active.title} service example`}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-bronze">
                What&apos;s included
              </p>
              <h3 className="mt-3 font-serif text-3xl font-black text-brand-navy">
                {active.title}
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {active.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3 text-slate-700">
                    <span className="h-2 w-2 rounded-full bg-brand-gold" />
                    {detail}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="focus-ring mt-8 inline-flex min-h-12 items-center rounded-md bg-brand-green px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-brand-gold hover:text-brand-navy"
              >
                Request this service
              </a>
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
