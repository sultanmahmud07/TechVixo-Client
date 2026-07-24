"use client";

import Image from "next/image";
import Link from "next/link";
import RelatedBlogs from "../RelatadeBlog/RelatedBlogs";
import {
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaTags,
  FaSearch,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import blogImg from "@@/images/blogs/1.png";

const BlogDetails = ({ title }) => {
  const categories = [
    { name: "Development", count: 12 },
    { name: "UI/UX Design", count: 8 },
    { name: "SEO Optimization", count: 15 },
    { name: "Project Management", count: 6 },
    { name: "Digital Marketing", count: 10 }
  ];

  const recentPosts = [
    { title: "Building Headless Commerce Architectures in 2026", date: "July 20, 2026", slug: "building-headless-commerce-architectures-in-2026" },
    { title: "Core Web Vitals: Optimizing INP & LCP Scores", date: "July 15, 2026", slug: "core-web-vitals-optimizing-inp-lcp-scores" },
    { title: "Agile Development Sprint Roadmaps for SaaS startups", date: "July 10, 2026", slug: "agile-development-sprint-roadmaps-for-saas-startups" }
  ];

  const articleTitle = title || "How Next.js Overhauls B2B E-Commerce Performance";

  return (
    <div className="bg-[#FAF9FC] py-12 md:py-20">
      <div className="main_container">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Side: Article Content (2/3 width) */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
            
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500 font-medium pb-4 border-b border-gray-100">
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-primary" />
                July 24, 2026
              </span>
              <span className="flex items-center gap-2">
                <FaUser className="text-primary" />
                By Digimatric Tech Team
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-primary" />
                5 Min Read
              </span>
              <span className="flex items-center gap-2">
                <FaTags className="text-primary" />
                Next.js, Tech Trends
              </span>
            </div>

            {/* Featured Image */}
            <div className="w-full h-64 md:h-96 relative rounded-xl overflow-hidden shadow-sm">
              <Image
                src={blogImg}
                alt="Blog Featured Graphic"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Heading */}
            <h1 className="text-2xl md:text-4xl font-bold text-secondary leading-tight mt-2">
              {articleTitle}
            </h1>

            {/* Article Body */}
            <div className="article-body flex flex-col gap-4 text-sm md:text-base text-gray-600 leading-relaxed">
              <p>
                In the rapidly evolving landscape of B2B e-commerce, user experience and load performance have become critical metrics that dictate conversion rates. Slow pages trigger high user bounce rates, forcing search bots to lower organic ranks. Transitioning to headless frameworks enables teams to detach front-facing designs from relational SQL databases.
              </p>
              
              <h2 className="text-xl md:text-2xl font-bold text-secondary mt-4">
                Why Headless and Next.js is a Requirement
              </h2>
              <p>
                Traditional monolithic setups render heavy templates on single servers, generating latency bottlenecks. By deploying Next.js edge environments, developers build static pages during build cycles, serving them from globally distributed CDN nodes.
              </p>
              
              <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-gray-800 bg-gray-50 p-4 rounded-r-lg font-medium">
                "Speed is no longer an option in the B2B SaaS space—it is the direct metric that separates page-one authorities from secondary listings."
              </blockquote>

              <h2 className="text-xl md:text-2xl font-bold text-secondary mt-4">
                Core Steps to Accelerate LCP Scores
              </h2>
              <p>
                Optimizing Largest Contentful Paint (LCP) means checking viewport parameters, compressing visuals, and styling stylesheets correctly. Here are the core tasks we execute:
              </p>
              
              <ul className="list-disc pl-5 flex flex-col gap-2 my-2">
                <li>Compress raw media assets using modern WebP/AVIF file wrappers.</li>
                <li>Verify viewport parameters, eliminating Cumulative Layout Shifts (CLS).</li>
                <li>Configure secure edge routing protocols, shortening TTFB (Time to First Byte).</li>
                <li>Clear render-blocking scripts from primary page header blocks.</li>
              </ul>

              <p className="mt-4">
                By setting up modular Next.js platforms, B2B brands assure rapid rendering times, higher search ranking exposure, and reduced server hosting overheads.
              </p>
            </div>

            {/* Social Share */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-100 mt-6">
              <span className="text-xs md:text-sm font-bold text-secondary">Share This Article:</span>
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition">
                  <FaFacebookF className="text-xs" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-sky-400 text-white flex items-center justify-center hover:bg-sky-500 transition">
                  <FaTwitter className="text-xs" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition">
                  <FaLinkedinIn className="text-xs" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Sidebar (1/3 width) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            {/* Search Box */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
              <h3 className="text-lg font-bold text-secondary">Search Articles</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type search queries..."
                  className="w-full border border-gray-200 rounded-lg py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-primary text-gray-700"
                />
                <FaSearch className="absolute right-3.5 top-3.5 text-gray-400 text-sm" />
              </div>
            </div>

            {/* Category Box */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
              <h3 className="text-lg font-bold text-secondary">Categories</h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat, i) => (
                  <Link
                    key={i}
                    href="/blog"
                    className="flex justify-between items-center text-sm text-gray-600 hover:text-primary transition py-1.5 border-b border-gray-50 last:border-0"
                  >
                    <span>{cat.name}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium">
                      {cat.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
              <h3 className="text-lg font-bold text-secondary">Recent Posts</h3>
              <div className="flex flex-col gap-4">
                {recentPosts.map((post, i) => (
                  <div key={i} className="flex flex-col gap-1 border-b border-gray-50 last:border-0 pb-3 last:pb-0">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-secondary hover:text-primary transition line-clamp-2 leading-snug"
                    >
                      {post.title}
                    </Link>
                    <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4 bg-gradient-to-br from-secondary to-gray-900 text-white">
              <h3 className="text-lg font-bold">Subscribe Newsletter</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Stay updated with the latest digital trends, technical audits reports, and local search strategies.
              </p>
              <div className="flex flex-col gap-2 mt-2">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-2.5 px-4 text-xs focus:outline-none focus:border-primary text-white placeholder-white/50"
                />
                <button className="w-full bg-primary hover:bg-primary/95 text-white font-bold py-2.5 rounded-lg text-xs transition flex items-center justify-center gap-2">
                  <FaEnvelope className="text-xs" />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Related Blogs Block */}
        <RelatedBlogs />
      </div>
    </div>
  );
};

export default BlogDetails;
