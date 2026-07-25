import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";
import { blogContent } from "@/app/data/blog-content";
import { profile } from "@/app/data/portfolio-data";

// Generate static params for all blog posts (SSG)
export async function generateStaticParams() {
  return Object.values(blogContent).map((blog) => ({
    id: blog.id.toString(),
  }));
}

// Dynamic Metadata Generation
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const blogId = parseInt(id, 10);
  const blog = blogContent[blogId];

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const title = `${blog.title} | ${profile.name}`;
  const description = blog.excerpt;
  const url = `${profile.portfolioURL}/blogs/${blogId}`;
  const imageUrl = `${profile.portfolioURL}${blog.image}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      publishedTime: blog.date, // Note: You might want to format 'Dec 2025' to ISO format for better SEO
      authors: [profile.name],
      section: blog.category,
      tags: blog.relatedTech,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: profile.social.twitter,
    },
    alternates: {
      canonical: url,
    },
  };
}

// Server Component
export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogId = parseInt(id, 10);
  const blog = blogContent[blogId];

  if (!blog) {
    notFound();
  }

  // JSON-LD Structured Data for Blog Post
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "image": [`${profile.portfolioURL}${blog.image}`],
    "datePublished": blog.date, // Ideally format this to ISO 8601
    "dateModified": blog.date,
    "author": [{
      "@type": "Person",
      "name": profile.name,
      "url": profile.portfolioURL
    }],
    "publisher": {
      "@type": "Organization",
      "name": profile.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${profile.portfolioURL}/logo.png`
      }
    },
    "description": blog.excerpt,
    "articleBody": blog.content
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailClient blog={blog} />
    </>
  );
}
