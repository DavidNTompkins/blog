// src/app/page.tsx
import Link from 'next/link';
import { getAllPosts } from '../lib/markdown';

export default async function Home() {
  const posts = await getAllPosts();
  
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-dark-border pb-8">
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:text-dark-link transition-colors">
                {post.title}
              </h2>
            </Link>
            <time className="text-dark-muted">
              {new Date(post.date).toLocaleDateString()}
            </time>
            <p className="mt-4">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}