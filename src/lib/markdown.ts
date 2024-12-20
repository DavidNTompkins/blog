// src/lib/markdown.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';
import { Post } from '../types/Post';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export async function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, slug, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypePrism)
    .use(rehypeStringify)
    .process(content);
    
  return {
    slug,
    content: processedContent.toString(),
    excerpt: content.substring(0, 200) + '...',
    title: data.title,
    date: data.date,
    coverImage: data.coverImage,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map((slug) => getPostBySlug(slug))
  );
  
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}