import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-cream px-6 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-bronze">
          Page not found
        </p>
        <h1 className="mt-3 font-serif text-4xl font-black text-brand-navy">
          Let&apos;s get you back outside.
        </h1>
        <Link
          href="/"
          className="mt-7 inline-flex min-h-12 items-center rounded-md bg-brand-green px-6 text-sm font-bold uppercase tracking-[0.12em] text-white"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
