'use client';

import Image from 'next/image';
import {
  Flower2,
  Leaf,
  Route,
  Shovel,
  Snowflake,
  Trees
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import type { Service } from '@/types';
import { fadeUp } from '@/utils/animations';

const services: Service[] = [
  {
    title: 'Lawncare',
    summary: 'Routine mowing, edging, seasonal fertilization, and aeration.',
    details: ['Mowing and trimming', 'Clean edging', 'Seasonal fertilization', 'Aeration planning'],
    priceHint: 'Seasonal plans available',
    image:
      'https://images.unsplash.com/photo-1599685315640-9ceab7b28d32?auto=format&fit=crop&w=900&q=80',
    icon: Leaf
  },
  {
    title: 'Landscaping Design',
    summary: 'Custom plantings, bed layouts, hardscape integration, and care plans.',
    details: ['Site analysis', 'Plant selection', 'Design consultation', 'Maintenance planning'],
    priceHint: 'Custom quotes',
    image:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80',
    icon: Trees
  },
  {
    title: 'Mulching',
    summary: 'Fresh mulch installation and seasonal bed refresh services.',
    details: ['Premium mulch options', 'Weed prevention', 'Crisp bed lines', 'Spring and fall refreshes'],
    priceHint: 'Starting by bed size',
    image:
      'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?auto=format&fit=crop&w=900&q=80',
    icon: Flower2
  },
  {
    title: 'Patios',
    summary: 'Outdoor patio construction with drainage-aware installation.',
    details: ['Layout planning', 'Material selection', 'Base preparation', 'Drainage solutions'],
    priceHint: 'Design-build pricing',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    icon: Shovel
  },
  {
    title: 'Outdoor Paths',
    summary: 'Functional garden paths, walkways, and landscape transitions.',
    details: ['Natural stone options', 'Accessibility planning', 'Landscape integration', 'Edge restraint'],
    priceHint: 'Priced by scope',
    image:
      'https://images.unsplash.com/photo-1560185008-a33f5c7b1844?auto=format&fit=crop&w=900&q=80',
    icon: Route
  },
  {
    title: 'Snow Removal',
    summary: 'Seasonal snow and ice management for safer winter access.',
    details: ['Snow clearing', 'De-icing options', 'Priority scheduling', 'Residential and light commercial'],
    priceHint: 'Winter contracts',
    image:
      'https://images.unsplash.com/photo-1516431883659-655d41c09bf9?auto=format&fit=crop&w=900&q=80',
    icon: Snowflake
  }
];

export function Services() {
  const [active, setActive] = useState<Service | null>(services[0]);

  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Services"
          title="Everything your property needs, planned as one polished whole."
          copy="Choose a focused seasonal service or bring us in for a complete outdoor upgrade."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const selected = active?.title === service.title;
            return (
              <motion.button
                key={service.title}
                type="button"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                onClick={() => setActive(service)}
                className={`focus-ring group grid min-h-[236px] rounded-md border bg-white p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-lift ${
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
                  {service.priceHint}
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
                Expanded service details
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
