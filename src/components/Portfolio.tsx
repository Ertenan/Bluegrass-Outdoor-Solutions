'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import type { Project } from '@/types';
import { serviceCategories } from '@/content/services';

const projects: Project[] = [
  {
    title: 'Retaining Wall & Landscape Steps',
    category: 'hardscaping',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=720&h=540&q=68',
    before:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=720&h=540&q=68',
    after:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=720&h=540&q=68',
    description: 'A durable retaining wall and integrated landscape steps create safer access, manage the grade, and give the property a finished look.'
  },
  {
    title: 'Front Landscape Transformation',
    category: 'landscape-installations',
    image:
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=720&h=540&q=68',
    before:
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=720&h=540&q=68',
    after:
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=720&h=540&q=68',
    description: 'Layered planting and mulch lines for immediate curb appeal.'
  },
  {
    title: 'Decorative Rock Installation',
    category: 'property-enhancements',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=720&h=540&q=68',
    before:
      'https://images.unsplash.com/photo-1498409785966-ab341407de6e?auto=format&fit=crop&w=720&h=540&q=68',
    after:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=720&h=540&q=68',
    description: 'Decorative landscape rock creates clean, defined beds with lasting color and less seasonal upkeep than mulch.'
  },
  {
    title: 'Seasonal Lawn Recovery',
    category: 'lawn-installations',
    image:
      'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=720&h=540&q=68',
    before:
      'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=720&h=540&q=68',
    after:
      'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=720&h=540&q=68',
    description: 'Regular cuts and seasonal care restored a crisp, healthy lawn.'
  },
  {
    title: 'Fresh Mulch Install',
    category: 'property-enhancements',
    image:
      'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=720&h=540&q=68',
    before:
      'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?auto=format&fit=crop&w=720&h=540&q=68',
    after:
      'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=720&h=540&q=68',
    description: 'Defined beds with fresh mulch and weed prevention.'
  },
  {
    title: 'Tree & Shrub Planting',
    category: 'property-enhancements',
    image:
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=720&h=540&q=68',
    before:
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=720&h=540&q=68',
    after:
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=720&h=540&q=68',
    description: 'Carefully placed trees and shrubs add structure, seasonal interest, and lasting curb appeal.'
  }
];

const filters = serviceCategories.filter((service) =>
  projects.some((project) => project.category === service.id)
);

function categoryName(category: string) {
  return serviceCategories.find((service) => service.id === category)?.title ?? category;
}

function DeferredGalleryImage({
  src,
  alt,
  priority = false
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '160px 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={containerRef} className="relative aspect-[4/3] overflow-hidden bg-slate-100">
      {shouldLoad || priority ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.035]"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/65 via-transparent to-transparent" />
    </div>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState('All');

  const visibleProjects = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <section id="portfolio" className="bg-brand-navy py-20 text-white sm:py-24">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Picture what’s possible for your property."
          copy="Explore the kinds of outdoor improvements we build throughout Central Kentucky, from practical grade solutions to polished curb appeal."
          tone="light"
        />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setFilter('All')}
            className={`focus-ring min-h-11 rounded-md px-4 text-sm font-bold uppercase tracking-[0.1em] transition ${
              filter === 'All'
                ? 'bg-brand-gold text-brand-navy'
                : 'border border-white/25 text-white hover:border-brand-gold'
            }`}
          >
            All projects
          </button>
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={`focus-ring min-h-11 rounded-md px-4 text-sm font-bold uppercase tracking-[0.1em] transition ${
                filter === item.id
                  ? 'bg-brand-gold text-brand-navy'
                  : 'border border-white/25 text-white hover:border-brand-gold'
              }`}
            >
              {item.shortTitle}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              className={`portfolio-card group overflow-hidden rounded-lg bg-white text-brand-ink shadow-lift transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                filter === 'All' && index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className={`relative ${filter === 'All' && index === 0 ? 'md:[&>div]:aspect-[16/7]' : ''}`}>
                <DeferredGalleryImage
                  src={project.image}
                  alt={`${project.title} inspiration`}
                  priority={index === 0}
                />
                <p className="absolute bottom-4 left-4 rounded-full bg-brand-gold px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-brand-navy shadow-lg">
                  {categoryName(project.category)}
                </p>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-black text-brand-navy sm:text-[1.65rem]">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-700">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
