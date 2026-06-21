import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const variantClasses =
    variant === 'primary'
      ? 'bg-brand-green text-white hover:bg-brand-gold hover:text-brand-navy'
      : 'border border-white/70 bg-white/10 text-white hover:border-brand-gold hover:bg-white/20';

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] transition duration-300 ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
