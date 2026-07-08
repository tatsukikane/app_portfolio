import { MetadataRoute } from 'next';
import { apps } from '@/data/apps';

const SITE_URL = 'https://app-tatsukikane.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...apps.map((app) => ({
      url: `${SITE_URL}/#${app.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
