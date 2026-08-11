'use client';

import Image from 'next/image';
import { ArrowRight, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/Button';
import { publicAsset } from '@/utils/assets';
import { serviceListText } from '@/content/services';

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
      <div className="absolute inset-0 bg-brand-navy/66" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_46%,rgba(0,31,63,0.7),transparent_42%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-cream to-transparent" />

      <div className="site-shell relative z-10 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mb-5 inline-flex rounded-md bg-[#071520]/92 p-2 shadow-[0_18px_52px_rgba(0,0,0,0.42)] ring-1 ring-brand-gold/45"
        >
          <Image
            src={publicAsset('/logo.jpg')}
            alt="Bluegrass Outdoor Solutions logo"
            width={240}
            height={240}
            priority
            className="h-44 w-44 rounded-sm object-cover sm:h-52 sm:w-52 lg:h-60 lg:w-60"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.32 }}
          className="mb-5 flex w-fit items-center gap-2 rounded-md border border-white/25 bg-white/12 px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] backdrop-blur"
        >
          <Sprout size={18} className="text-brand-gold" />
          Serving Northern Kentucky
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.35 }}
          className="hero-title max-w-4xl font-serif text-5xl font-black leading-[1.05] text-brand-gold sm:text-6xl lg:text-7xl"
        >
          Transform Your Outdoor Space
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-white/92 sm:text-2xl"
        >
          Professional {serviceListText.toLowerCase()} for Union, Florence, and
          the greater Northern Kentucky area.
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
