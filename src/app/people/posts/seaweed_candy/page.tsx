import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const POSTS = {
  "Seaweed Candy Making": {
    title: "Seaweed Candy Making",
    date: "26 May 2025",
    author: {
      name: "Anonymous Author 1",
      avatar: "url('/anon.jpg')",
    },
    cover: "url('/kert.jpg')", // small picture at the top
    excerpt: "A short intro to our village and why it matters.",
    content: `
      Our village is a tapestry of traditions, people, and landscapes. The
      markets wake up before dawn, and the smell of fresh roti drifts across
      the square. In this blog, I'll share the stories, data, and small rituals
      that make this place feel like home.

      Over the next few weeks, expect photo essays, interviews with elders,
      and quick notes from my field log. If there's something you want to see,
      drop a comment or send me a note.
    `,
  },
  "harvest-festival": {
    title: "Harvest Festival 2025: Notes & Photos",
    date: "2025-09-10",
    author: {
      name: "Village Editorial",
      avatar: "/images/authors/editorial.jpg",
    },
    cover: "/images/posts/harvest-thumb.jpg",
    excerpt: "Scenes from the biggest day on our local calendar.",
    content: `
      Today we walked the entire parade route with the drummers. The new
      stage faces the east, catching first light over the fields. Vendors set up
      a corridor of color: red chilies, brass cups, and marigold ropes.

      We recorded short interviews with ten stall owners about prices,
      rainfall, and family histories. Full transcripts coming soon.
    `,
  },
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const post = slug ? POSTS['Seaweed Candy Making'] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-2">Post not found</h1>
          <p className="text-gray-600 mb-6">The blog post you’re looking for doesn’t exist yet.</p>
          <Link href="/blog-links" className="text-blue-600 hover:underline">Go back to blog links</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} • Village Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <article className="min-h-screen bg-white">
        {/* Top bar / breadcrumb */}
        <div className="mx-auto max-w-3xl px-6 pt-8">
          <Link href="/blog-links" className="text-sm text-gray-500 hover:text-gray-700">← All posts</Link>
        </div>

        {/* Header: small picture + author row */}
        <header className="mx-auto max-w-3xl px-6 pt-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4">{post.title}</h1>

          <div className="flex items-center gap-4 mb-6">
            {/* Small picture at the top (cover) */}
            <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-lg border border-gray-200">
              <Image src={post.cover} alt={post.title} fill className="object-cover" />
            </div>

            {/* Author + meta */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gray-200">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">{post.author.name}</div>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="mx-auto max-w-3xl px-6 pb-20">
          <div className="prose prose-neutral max-w-none">
            {post.content.split(/\n\n+/).map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}


/*
HOW TO USE
1) Put this file at: pages/blogposts/[slug].js
2) Add your images in /public/images/posts and /public/images/authors
3) Visit /blogposts/welcome-to-the-village or /blogposts/harvest-festival
4) Style: This uses Tailwind. Add @tailwindcss/typography plugin for nicer prose:
   - npm i -D @tailwindcss/typography
   - In tailwind.config.js:  plugins: [require('@tailwindcss/typography')]

NEXT STEPS (optional)
- Replace the in-file POSTS object with Markdown/MDX files and frontmatter.
- Add reading time, tags, and a Table of Contents.
- Add Open Graph <meta> for richer sharing.
*/
