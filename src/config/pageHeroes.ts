type PageHeroConfig = {
  image: string;
  overlay?: number;
};

export const pageHeroes: Record<string, PageHeroConfig> = {
  prosjekter: {
    image: '/images/vent.jpg',
    overlay: 0.6
  },
  plastsveising: {
    image: '/images/welder.jpg',
    overlay: 0.55
  },
  'sanitaer-vvs': {
    image: '/images/plumber.jpg',
    overlay: 0.55
  }
};
