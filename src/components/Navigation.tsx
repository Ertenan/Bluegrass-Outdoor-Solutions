'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { company } from '@/utils/company';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' }
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? 'border-b border-brand-gold/18 bg-brand-navy/96 shadow-lg backdrop-blur'
          : 'border-b border-brand-gold/28 bg-brand-navy/88 shadow-[0_14px_42px_rgba(0,0,0,0.28)] backdrop-blur-md'
      }`}
    >
      <nav className="site-shell flex h-20 items-center justify-between">
        <Link href="#home" className="focus-ring flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Bluegrass Outdoor Solutions"
            width={64}
            height={64}
            priority
            className="h-12 w-12 rounded-md object-cover shadow-[0_8px_22px_rgba(0,0,0,0.35)] ring-1 ring-brand-gold/55"
          />
          <span className="hidden max-w-44 text-sm font-black uppercase leading-tight tracking-[0.12em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] sm:block">
            Bluegrass Outdoor Solutions
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring text-sm font-bold uppercase tracking-[0.12em] transition ${
                active === link.href
                  ? 'text-brand-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]'
                  : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] hover:text-brand-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={`tel:${company.phone.replace(/\D/g, '')}`}
          className="focus-ring hidden min-h-11 items-center gap-2 rounded-md border border-brand-gold/80 bg-white/8 px-4 text-sm font-bold text-white shadow-[0_8px_22px_rgba(0,0,0,0.22)] transition hover:bg-brand-gold hover:text-brand-navy md:inline-flex"
        >
          <Phone size={18} />
          {company.phone}
        </a>

        <button
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/30 text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-brand-navy lg:hidden">
          <div className="site-shell grid py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-2 py-4 text-base font-bold uppercase tracking-[0.12em] text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
