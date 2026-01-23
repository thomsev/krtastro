export type HeroContent = {
  title: string;
  subtitle?: string;
  image?: string;
};

export type PageContent = {
  slug: string;
  title: string;
  description: string;
  hero?: HeroContent;
  body: string;
};

export type SiteSettings = {
  name: string;
  description: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  areaServed: string;
  openingHours: string;
};

export type Project = {
  title: string;
  description: string;
  location?: string;
  image?: string;
};

export type Supplier = {
  name: string;
  description: string;
  website?: string;
};

export type Reference = {
  name: string;
  note?: string;
};
