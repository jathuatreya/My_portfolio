import { MetadataRoute } from 'next';
import { blogContent } from './data/blog-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jathushan.dev';

  // Static routes
  const routes = [
    '',
    '/projects', // Assuming this exists or is a section
    '/experience', // Assuming this exists or is a section
    '/blogs',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog routes
  const blogRoutes = Object.values(blogContent).map((post) => ({
    url: `${baseUrl}/blogs/${post.id}`,
    lastModified: new Date(), // Ideally this would be post.date but we need to parse it or just use current date
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
