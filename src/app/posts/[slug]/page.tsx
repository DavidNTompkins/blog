// src/app/posts/[slug]/page.tsx
import { getPostBySlug, getPostSlugs } from '../../../lib/markdown';
import { Metadata } from 'next';

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title,
  };
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <time className="text-dark-muted block mt-4">
        {new Date(post.date).toLocaleDateString()}
      </time>
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="my-8 rounded-lg"
        />
      )}
      <div 
        className="prose prose-lg max-w-none mt-8 prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}