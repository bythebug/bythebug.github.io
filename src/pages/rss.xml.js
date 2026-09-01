import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'bythebug — Suraj Van Verma',
    description: 'Writing on software engineering, AI/ML, and building in public.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date - a.data.date)
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
    customData: `<language>en-us</language>`,
  });
}
