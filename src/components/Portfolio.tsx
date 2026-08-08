'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    title: 'Union Patio Refresh',
    category: 'Patios',
    date: 'Spring 2024',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=720&h=540&q=68',
    before:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=720&h=540&q=68',
    after:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=720&h=540&q=68',
    description: 'A cleaner outdoor living area with structured edges and better flow.'
  },
  {
    title: 'Florence Front Bed Design',
    category: 'Landscaping Design',
    date: 'Summer 2024',
    image:
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=720&h=540&q=68',
    before:
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=720&h=540&q=68',
    after:
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=720&h=540&q=68',
    description: 'Layered planting and mulch lines for immediate curb appeal.'
  },
  {
    title: 'Northern Kentucky Pathway',
    category: 'Outdoor Paths',
    date: 'Fall 2024',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=720&h=540&q=68',
    before:
      'https://images.unsplash.com/photo-1498409785966-ab341407de6e?auto=format&fit=crop&w=720&h=540&q=68',
    after:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=720&h=540&q=68',
    description: 'A natural path connecting garden areas without muddy transitions.'
  },
  {
    title: 'Seasonal Lawn Recovery',
    category: 'Lawncare',
    date: 'Spring 2025',
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
    category: 'Mulching',
    date: 'Spring 2025',
    image:
      'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=720&h=540&q=68',
    before:
      'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?auto=format&fit=crop&w=720&h=540&q=68',
    after:
      'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=720&h=540&q=68',
    description: 'Defined beds with fresh mulch and weed prevention.'
  },
  {
    title: 'Winter Access Plan',
    category: 'Snow Removal',
    date: 'Winter 2025',
    image:
      'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=720&h=540&q=68',
    before:
      'https://images.unsplash.com/photo-1516715094483-75da7dee9758?auto=format&fit=crop&w=720&h=540&q=68',
    after:
      'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&w=720&h=540&q=68',
    description: 'Snow clearing and de-icing for safer daily access.'
  }
];

const filters = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

function DeferredGalleryImage({ src, alt }: { src: string; alt: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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
  }, []);

  return (
    <div ref={containerRef} className="relative mb-4 aspect-[16/9] overflow-hidden rounded-md bg-slate-100">
      {shouldLoad ? (
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 hover:scale-105"
        />
      ) : null}
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
          title="Outdoor upgrades with visible before and after impact."
          copy="Representative project photography is used until client-owned project photos are ready."
          tone="light"
        />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`focus-ring min-h-11 rounded-md px-4 text-sm font-bold uppercase tracking-[0.1em] transition ${
                filter === item
                  ? 'bg-brand-gold text-brand-navy'
                  : 'border border-white/25 text-white hover:border-brand-gold'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="portfolio-card overflow-hidden rounded-md bg-white text-brand-ink shadow-lift"
            >
              <BeforeAfterSlider
                title={project.title}
                before={project.before}
                after={project.after}
              />
              <div className="p-5">
                <DeferredGalleryImage src={project.image} alt={project.title} />
                <p className="text-xs font-black uppercase tracking-[0.14em] text-brand-bronze">
                  {project.category} / {project.date}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-black text-brand-navy">
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
