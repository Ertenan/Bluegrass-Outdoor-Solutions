'use client';

import Image from 'next/image';
import { useState } from 'react';

type BeforeAfterSliderProps = {
  before: string;
  after: string;
  title: string;
};

export function BeforeAfterSlider({
  before,
  after,
  title
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(52);

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-md bg-brand-navy">
      <Image
        src={before}
        alt={`${title} before`}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <Image
          src={after}
          alt={`${title} after`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 w-1 bg-white shadow-lg"
        style={{ left: `${value}%` }}
      />
      <input
        aria-label={`Compare before and after images for ${title}`}
        type="range"
        min="5"
        max="95"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="absolute inset-x-4 bottom-4 z-10 accent-brand-gold"
      />
      <div className="absolute left-4 top-4 rounded bg-brand-navy/82 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
        After
      </div>
      <div className="absolute right-4 top-4 rounded bg-brand-navy/82 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
        Before
      </div>
    </div>
  );
}
