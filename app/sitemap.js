import { site } from '@/lib/site';
import { services, areas } from '@/lib/data';

export default function sitemap() {
  const now = new Date();
  const base = site.domain;
  const pages = ['', '/services', '/areas', '/booking', '/about', '/contact'].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.8,
  }));
  const svc = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));
  const ar = areas.map((a) => ({
    url: `${base}/areas/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  return [...pages, ...svc, ...ar];
}
