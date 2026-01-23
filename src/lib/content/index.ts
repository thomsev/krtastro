import type { PageContent, Project, Reference, SiteSettings, Supplier } from './types';
import * as local from './local';
import * as wp from './wp';

const contentSource = import.meta.env.CONTENT_SOURCE ?? 'local';

async function withFallback<T>(primary: () => Promise<T>, fallback: () => Promise<T>): Promise<T> {
  try {
    return await primary();
  } catch (error) {
    return fallback();
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (contentSource === 'wordpress') {
    return withFallback(wp.getSiteSettings, local.getSiteSettings);
  }
  return local.getSiteSettings();
}

export async function getPage(slug: string): Promise<PageContent | null> {
  if (contentSource === 'wordpress') {
    const page = await withFallback(() => wp.getPage(slug), async () => local.getPage(slug));
    if (page) {
      return page;
    }
  }
  return local.getPage(slug);
}

export async function getAllPages(): Promise<PageContent[]> {
  if (contentSource === 'wordpress') {
    return withFallback(wp.getAllPages, local.getAllPages);
  }
  return local.getAllPages();
}

export async function getProjects(): Promise<Project[]> {
  if (contentSource === 'wordpress') {
    return withFallback(wp.getProjects, local.getProjects);
  }
  return local.getProjects();
}

export async function getSuppliers(): Promise<Supplier[]> {
  if (contentSource === 'wordpress') {
    return withFallback(wp.getSuppliers, local.getSuppliers);
  }
  return local.getSuppliers();
}

export async function getReferences(): Promise<Reference[]> {
  if (contentSource === 'wordpress') {
    return withFallback(wp.getReferences, local.getReferences);
  }
  return local.getReferences();
}
