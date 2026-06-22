export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  items?: NavLink[];
};

export const navGroups: NavGroup[] = [
  { label: 'Hjem', href: '/' },
  {
    label: 'Tjenester',
    items: [
      { label: 'VVS, varme og sprinkler', href: '/sanitaer-vvs' },
      { label: 'Plastsveising', href: '/plastsveising' },
      { label: 'Gasskontroll', href: '/gass' },
      { label: 'Gjenvinningsanlegg', href: '/gjenvinningsanlegg' }
    ]
  },
  {
    label: 'Prosjekter',
    items: [
      { label: 'Prosjekter', href: '/prosjekter' },
      { label: 'Referanser', href: '/referanser' },
      { label: 'Samarbeid', href: '/samarbeid' },
      { label: 'Leverandører', href: '/leverandorer' }
    ]
  },
  { label: 'Om oss', href: '/om-oss' },
  { label: 'Kontakt oss', href: '/kontakt-oss' }
];
