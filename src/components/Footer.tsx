import Link from 'next/link';
import { Instagram, Mail, Phone } from 'lucide-react';
import { company } from '@/utils/company';
import { serviceListText } from '@/content/services';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' }
];

export function Footer() {
  return (
    <footer className="bg-brand-navy py-10 text-white">
      <div className="site-shell grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-serif text-2xl font-black text-brand-gold">
            Bluegrass Outdoor Solutions
          </p>
          <p className="mt-3 max-w-md leading-7 text-white/75">
            Professional {serviceListText.toLowerCase()} for Union, Florence,
            and Northern Kentucky.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-brand-gold">
            Quick Links
          </p>
          <div className="grid gap-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brand-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-brand-gold">
            Contact
          </p>
          <div className="grid gap-3 text-white/82">
            <a href={`tel:${company.phone.replace(/\D/g, '')}`} className="flex gap-2 hover:text-brand-gold">
              <Phone size={18} /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex gap-2 hover:text-brand-gold">
              <Mail size={18} /> {company.email}
            </a>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/bluegrassoutdoorsolutions/"
                aria-label="Instagram"
                className="hover:text-brand-gold"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="site-shell mt-8 border-t border-white/12 pt-6 text-sm text-white/65">
        Copyright {new Date().getFullYear()} Bluegrass Outdoor Solutions. All rights reserved.
      </div>
    </footer>
  );
}
