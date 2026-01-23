import type { PageContent, Project, Reference, SiteSettings, Supplier } from './types';
import { getAllPages as getLocalPages, getProjects as getLocalProjects, getReferences as getLocalReferences, getSiteSettings as getLocalSiteSettings, getSuppliers as getLocalSuppliers } from './local';

const cache = new Map<string, unknown>();

const baseUrl = import.meta.env.WORDPRESS_BASE_URL ?? 'https://example.com';

async function fetchJson<T>(path: string): Promise<T> {
  const url = `${baseUrl.replace(/\/$/, '')}${path}`;
  if (cache.has(url)) {
    return cache.get(url) as T;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`WordPress request failed: ${response.status}`);
  }
  const data = (await response.json()) as T;
  cache.set(url, data);
  return data;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const root = await fetchJson<{ name?: string; description?: string }>(`/wp-json`);
    const local = await getLocalSiteSettings();
    return {
      ...local,
      name: root.name ?? local.name,
      description: root.description ?? local.description
    };
  } catch (error) {
    return getLocalSiteSettings();
  }
}

export async function getPage(slug: string): Promise<PageContent | null> {
  try {
    const data = await fetchJson<Array<{ title: { rendered: string }; content: { rendered: string }; slug: string; excerpt?: { rendered: string } }>>(
      `/wp-json/wp/v2/pages?slug=${slug}`
    );
    if (!data.length) {
      return null;
    }
    const page = data[0];
    return {
      slug: page.slug,
      title: page.title?.rendered ?? slug,
      description: page.excerpt?.rendered?.replace(/<[^>]+>/g, '') ?? '',
      body: page.content?.rendered ?? ''
    };
  } catch (error) {
    return null;
  }
}

export async function getAllPages(): Promise<PageContent[]> {
  try {
    const data = await fetchJson<Array<{ title: { rendered: string }; content: { rendered: string }; slug: string; excerpt?: { rendered: string } }>>(
      `/wp-json/wp/v2/pages?per_page=100`
    );
    return data.map((page) => ({
      slug: page.slug,
      title: page.title?.rendered ?? page.slug,
      description: page.excerpt?.rendered?.replace(/<[^>]+>/g, '') ?? '',
      body: page.content?.rendered ?? ''
    }));
  } catch (error) {
    return getLocalPages();
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    return await fetchJson<Project[]>(`/wp-json/wp/v2/projects`);
  } catch (error) {
    return getLocalProjects();
  }
}

export async function getSuppliers(): Promise<Supplier[]> {
  try {
    return await fetchJson<Supplier[]>(`/wp-json/wp/v2/suppliers`);
  } catch (error) {
    return getLocalSuppliers();
  }
}

export async function getReferences(): Promise<Reference[]> {
  try {
    return await fetchJson<Reference[]>(`/wp-json/wp/v2/references`);
  } catch (error) {
    return getLocalReferences();
  }
}
