import type { LucideIcon } from 'lucide-react';

export type Service = {
  title: string;
  summary: string;
  details: string[];
  priceHint: string;
  image: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  category: string;
  date: string;
  image: string;
  before: string;
  after: string;
  description: string;
};
