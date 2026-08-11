export type ServiceCategory = {
  id: 'landscape-installations' | 'hardscaping' | 'lawn-installations' | 'property-enhancements';
  title: string;
  shortTitle: string;
  summary: string;
  details: string[];
  image: string;
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
    image:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
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
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
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
    image:
      'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=1200&q=80',
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
    image:
      'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80',
    icon: 'flower'
  }
];

export const serviceTitles = serviceCategories.map((service) => service.title);

export const serviceListText = serviceTitles.length > 1
  ? `${serviceTitles.slice(0, -1).join(', ')}, and ${serviceTitles.at(-1)}`
  : serviceTitles[0] ?? 'outdoor services';
