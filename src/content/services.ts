export type ServiceCategory = {
  id: 'landscape-installations' | 'hardscaping' | 'lawn-installations' | 'property-enhancements';
  title: string;
  shortTitle: string;
  summary: string;
  details: string[];
  image: string;
  imagePosition: string;
  icon: 'trees' | 'blocks' | 'sprout' | 'flower';
};

// Edit this list to add, remove, or reorder the services shown throughout the site.
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'landscape-installations',
    title: 'Landscape Installations',
    shortTitle: 'Landscape',
    summary: 'Complete landscape transformations, from the first design idea through final installation.',
    details: [
      'Custom landscape design',
      'Site preparation and bed layout',
      'Plant and material selection',
      'Start-to-finish installation'
    ],
    image: '/images/live-site/service-landscape.webp',
    imagePosition: '43% 0%',
    icon: 'trees'
  },
  {
    id: 'hardscaping',
    title: 'Hardscaping',
    shortTitle: 'Hardscaping',
    summary: 'Durable built features and practical site work that improve how your outdoor space functions.',
    details: [
      'Retaining and landscape walls',
      'Patios and walkways',
      'Drainage solutions',
      'Light grading'
    ],
    image: '/images/live-site/service-hardscaping.webp',
    imagePosition: '50% 62%',
    icon: 'blocks'
  },
  {
    id: 'lawn-installations',
    title: 'Lawn Installations',
    shortTitle: 'Lawns',
    summary: 'New lawns and lawn restoration with the right preparation for healthy, even growth.',
    details: [
      'Sod installation',
      'Topsoil installation and preparation',
      'Seed and straw',
      'Final grading for establishment'
    ],
    image: '/images/live-site/service-lawn.webp',
    imagePosition: '50% 52%',
    icon: 'sprout'
  },
  {
    id: 'property-enhancements',
    title: 'Property Enhancements',
    shortTitle: 'Enhancements',
    summary: 'Focused upgrades that refresh curb appeal, strengthen plantings, and finish existing landscapes.',
    details: [
      'Shrub trimming and pruning',
      'Decorative rock and mulch',
      'Perennial planting',
      'Tree and shrub planting'
    ],
    image: '/images/live-site/service-enhancements.webp',
    imagePosition: '50% 48%',
    icon: 'flower'
  }
];

export const serviceTitles = serviceCategories.map((service) => service.title);

export const serviceListText = serviceTitles.length > 1
  ? `${serviceTitles.slice(0, -1).join(', ')}, and ${serviceTitles.at(-1)}`
  : serviceTitles[0] ?? 'outdoor services';
