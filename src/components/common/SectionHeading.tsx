type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = 'center',
  tone = 'dark'
}: SectionHeadingProps) {
  const titleClass = tone === 'light' ? 'text-white' : 'text-brand-navy';
  const copyClass = tone === 'light' ? 'text-white/78' : 'text-slate-700';
  const eyebrowClass = tone === 'light' ? 'text-brand-gold' : 'text-brand-bronze';

  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto mb-10 max-w-3xl text-center'
          : 'mb-10 max-w-3xl'
      }
    >
      <p className={`mb-3 text-sm font-bold uppercase tracking-[0.18em] ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <h2 className={`font-serif text-3xl font-black leading-tight sm:text-4xl lg:text-5xl ${titleClass}`}>
        {title}
      </h2>
      {copy ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${copyClass}`}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
