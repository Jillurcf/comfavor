import type { MetadataRoute } from 'next';
import { services } from '@/lib/data/services';
import { products } from '@/lib/data/products';
import { posts } from '@/lib/data/blog';
import { jobs } from '@/lib/data/careers';
import { SITE_URL } from '@/lib/constants/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/aboutus', '/products', '/services', '/contact', '/blogs', '/careers'].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '/' ? 1.0 : 0.8,
    }),
  );

  const serviceRoutes = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const productRoutes = products.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogRoutes = posts
    .filter((p) => !p.draft)
    .map((post) => ({
      url: `${SITE_URL}/blogs/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

  const careerRoutes = jobs.map((job) => ({
    url: `${SITE_URL}/careers/${job.slug}`,
    lastModified: new Date(job.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...productRoutes, ...blogRoutes, ...careerRoutes];
}
