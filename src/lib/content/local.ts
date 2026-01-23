import pages from '@/content/pages';
import site from '@/content/site.json';
import projects from '@/content/projects.json';
import suppliers from '@/content/suppliers.json';
import references from '@/content/references.json';
import type { PageContent, Project, Reference, SiteSettings, Supplier } from './types';

export async function getSiteSettings(): Promise<SiteSettings> {
  return site as SiteSettings;
}

export async function getPage(slug: string): Promise<PageContent | null> {
  const page = pages.find((item) => item.slug === slug);
  return (page ?? null) as PageContent | null;
}

export async function getAllPages(): Promise<PageContent[]> {
  return pages as PageContent[];
}

export async function getProjects(): Promise<Project[]> {
  return projects as Project[];
}

export async function getSuppliers(): Promise<Supplier[]> {
  return suppliers as Supplier[];
}

export async function getReferences(): Promise<Reference[]> {
  return references as Reference[];
}
