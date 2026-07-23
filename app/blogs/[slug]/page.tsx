import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, Clock, User, ArrowLeft } from 'lucide-react';
import { getPostBySlug, posts } from '@/lib/data/blog';
import BlogContent from '@/components/shared/BlogContent';
import { Button } from '@/components/ui/button';
import {
  SITE_URL,
  SITE_NAME,
  buildMetadata,
  breadcrumbSchema,
  articleSchema,
} from '@/lib/constants/seo';

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export async function generateStaticParams() {
  return posts.filter((p) => !p.draft).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} — Comfavor Blog`,
    description: post.excerpt,
    path: `/blogs/${slug}`,
    ogImage: post.coverImage,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.draft) notFound();

  const breadcrumb = breadcrumbSchema([
    { name: 'Blog', item: '/blogs' },
    { name: post.title, item: `/blogs/${slug}` },
  ]);

  const articleJsonLd = {
    ...articleSchema,
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.coverImage}`,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blogs/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blogs">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <header className="mb-10">
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            {post.title}
          </h1>

          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime} min read
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <BlogContent blocks={post.content} />

        <hr className="my-12 border-gray-200" />

        <div className="rounded-2xl bg-green-50 p-8 text-center">
          <h2 className="mb-2 text-xl font-bold text-gray-900">Need Help with Your Project?</h2>
          <p className="mb-6 text-gray-600">
            Contact Comfavor today for a free consultation.
          </p>
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </article>
    </>
  );
}
