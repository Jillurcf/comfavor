import type { Metadata } from 'next';
import { posts } from '@/lib/data/blog';
import BlogCard from '@/components/shared/BlogCard';
import { buildMetadata, routeMetadata } from '@/lib/constants/seo';

export const metadata: Metadata = buildMetadata(routeMetadata.blog);

const publishedPosts = posts
  .filter((p) => !p.draft)
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

export default function BlogsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold text-(--primary-color)">Comfavor Blog</h1>
      <p className="mb-10 max-w-2xl text-gray-600">
        Insights, guides, and updates from our team. Explore topics on web development, mobile apps,
        UI/UX design, digital marketing, and technology in Bangladesh.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {publishedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {publishedPosts.length === 0 && (
        <div className="rounded-2xl bg-gray-50 p-12 text-center">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">No posts yet</h2>
          <p className="text-gray-600">Check back soon for new articles.</p>
        </div>
      )}
    </section>
  );
}
