import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ednxt.co';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/about',
    '/courses/science',
    '/courses/mathematics',
    '/courses/ai-for-students',
    '/courses/public-speaking',
    '/curriculum/cbse',
    '/curriculum/british',
    '/packages',
    '/free-trial',
    '/contact',
    '/parent-login',
    '/privacy-policy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/courses') || route.startsWith('/curriculum') ? 0.9 : 0.8,
  }));
}
