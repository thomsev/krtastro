type PageHeroConfig = {
  image: string;
  overlay?: number;
};

export const pageHeroes: Record<string, PageHeroConfig> = {
  prosjekter: {
    image: '/images/generated/technical-plantroom.jpg',
    overlay: 0.6
  },
  plastsveising: {
    image: '/images/generated/industrial-pipefitter.jpg',
    overlay: 0.55
  },
  'sanitaer-vvs': {
    image: '/images/generated/residential-heating.jpg',
    overlay: 0.55
  },
  gass: {
    image: '/images/generated/technical-plantroom.jpg',
    overlay: 0.68
  },
  gjenvinningsanlegg: {
    image: '/images/generated/technical-plantroom.jpg',
    overlay: 0.6
  },
  'om-oss': {
    image: '/images/generated/industrial-pipefitter.jpg',
    overlay: 0.72
  },
  samarbeid: {
    image: '/images/plumber.jpg',
    overlay: 0.72
  },
  referanser: {
    image: '/images/vent.jpg',
    overlay: 0.72
  },
  leverandorer: {
    image: '/images/plumber.jpg',
    overlay: 0.74
  }
};
