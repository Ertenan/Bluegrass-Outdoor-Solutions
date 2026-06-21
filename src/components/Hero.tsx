'use client';

import Image from 'next/image';
import { ArrowRight, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/Button';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] items-center overflow-hidden bg-brand-navy text-white"
    >
      <Image
        src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2200&q=82"
        alt="Lush landscaped backyard with stonework and garden beds"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <video
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2200&q=82"
      >
        <source src="/videos/hero-video.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-brand-navy/58" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-cream to-transparent" />

      <div className="site-shell relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/12 px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] backdrop-blur"
        >
          <Sprout size={18} className="text-brand-gold" />
          Serving Northern Kentucky
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="max-w-4xl font-serif text-5xl font-black leading-[1.05] text-brand-gold sm:text-6xl lg:text-7xl"
        >
          Transform Your Outdoor Space
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-white/92 sm:text-2xl"
        >
          Professional landscaping, lawncare, patios, paths, mulching, and snow
          removal for Union, Florence, and the greater NKY area.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#contact">
            Get a Free Quote <ArrowRight size={18} />
          </Button>
          <Button href="#portfolio" variant="secondary">
            View Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
