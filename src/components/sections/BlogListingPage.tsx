import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  Cpu,
  Headphones,
  Linkedin,
  Network,
  ShieldCheck,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { BlogSubscribeForm } from "@/components/sections/BlogSubscribeForm";
import { blogCategories, blogPosts, getPostMeta, type BlogCategory, type BlogPost } from "@/data/blog";
import { useIsMobile } from "@/hooks/use-mobile";

export function categoryToSlug(category: BlogCategory) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function slugToCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find((category) => categoryToSlug(category) === slug);
}

type BlogListingPageProps = {
  activeCategory?: BlogCategory;
  breadcrumbLabel?: string;
  eyebrow?: string;
  latestTitle?: string;
  posts?: BlogPost[];
  title?: string;
};

function categoryTarget(category: BlogCategory) {
  if (category === "Explore") return { to: "/blog" as const, params: undefined };
  return {
    to: "/blog/category/$category" as const,
    params: { category: categoryToSlug(category) },
  };
}

function headingTarget(heading: string) {
  if (heading === "Featured Thinking") return "/blog/featured-thinking";
  if (heading === "Design Insights") return "/blog/design-insights";
  return "/blog/latest-insights";
}

const leadershipTopics = [
  {
    icon: Users,
    title: "Consulting & Advisory",
    description: "Strategic insight and guidance to build the right path to success.",
  },
  {
    icon: Headphones,
    title: "Managed Services",
    description: "End-to-end support that keeps teams focused on what matters.",
  },
  {
    icon: Code2,
    title: "Engineering & Development",
    description: "Robust, scalable software for real business challenges.",
  },
  {
    icon: Network,
    title: "Integration & Interoperability",
    description: "Connected systems, applications, and data for a unified ecosystem.",
  },
];

const DESKTOP_POSTS_PER_PAGE = 20;
const MOBILE_POSTS_PER_PAGE = 12;

export function BlogListingPage({
  activeCategory = "Explore",
  breadcrumbLabel,
  eyebrow = "Our thoughts on digital, data & AI",
  latestTitle,
  posts = blogPosts,
  title = "Ideate. Innovate. Implement.",
}: BlogListingPageProps) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(1);
  const isExplorePage = activeCategory === "Explore";
  const featuredPost = posts[0] ?? blogPosts[0];
  const featuredThinking = posts.filter((post) => post.slug !== featuredPost.slug).slice(0, 3);
  const postsPerPage = isMobile ? MOBILE_POSTS_PER_PAGE : DESKTOP_POSTS_PER_PAGE;
  const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage));
  const pageNumbers = useMemo(() => Array.from({ length: totalPages }, (_, index) => index + 1), [totalPages]);
  const latestPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
  const heading = latestTitle ?? "Latest Insights";

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, posts.length]);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return (
    <div className="min-h-screen bg-white text-ink">
      <SmoothScroll />
      <Navbar />
      <main className="blog-page">
        <section className="blog-hero">
          <div className="container-pro">
            <div className="blog-breadcrumb">
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              {breadcrumbLabel ? <span>{breadcrumbLabel}</span> : null}
            </div>
            <p>{eyebrow}</p>
            <h1>{title}</h1>
          </div>
        </section>

        <nav className="blog-categories" aria-label="Blog categories">
          <label className="blog-categories__mobile">
            <span className="sr-only">Choose category</span>
            <select
              value={activeCategory}
              onChange={(event) => {
                const category = event.target.value as BlogCategory;
                if (category === "Explore") {
                  navigate({ to: "/blog" });
                  return;
                }
                navigate({
                  to: "/blog/category/$category",
                  params: { category: categoryToSlug(category) },
                });
              }}
            >
              {blogCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown className="h-4 w-4" />
          </label>
          <div className="blog-categories__rail">
            {blogCategories.map((category) => {
              const target = categoryTarget(category);

              return (
                <Link
                  key={category}
                  to={target.to}
                  params={target.params}
                  className={activeCategory === category ? "is-active" : ""}
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </nav>

        {isExplorePage ? (
          <section className="blog-featured container-pro">
            <article className="blog-featured__main">
              <Link to="/blog/$slug" params={{ slug: featuredPost.slug }} className="group block">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className="blog-meta">{getPostMeta(featuredPost)}</div>
                <h2>{featuredPost.title}</h2>
              </Link>
              <p>{featuredPost.excerpt}</p>
            </article>

            <aside className="blog-featured__side">
              <Link to="/blog/featured-thinking" className="blog-featured__heading">
                <h2>Featured Thinking</h2>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <div className="blog-featured-list">
                {featuredThinking.map((post) => (
                  <Link to="/blog/$slug" params={{ slug: post.slug }} key={post.slug}>
                    <img src={post.image} alt={post.title} />
                    <div>
                      <div className="blog-meta">{getPostMeta(post)}</div>
                      <h3>{post.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </section>
        ) : null}

        <section className="blog-latest container-pro">
          <Link to={headingTarget(heading)} className="blog-section-title-link">
            <h2>{heading}</h2>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <div className={isExplorePage ? "blog-latest__layout" : "blog-latest__layout blog-latest__layout--plain"}>
            {isExplorePage ? (
              <aside className="blog-sidebar">
              <section className="blog-industry-card">
                <h3>Thought leadership with transformation insights</h3>
                {leadershipTopics.map(({ icon: Icon, title: topicTitle, description }) => (
                  <div className="blog-industry-card__item" key={topicTitle}>
                    <Icon className="h-7 w-7" />
                    <div>
                      <h4>{topicTitle}</h4>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </section>

              <section className="blog-template-card">
                <span>MVP planning template</span>
                <div className="blog-template-card__device" aria-hidden="true">
                  <div className="blog-template-card__screen">
                    <strong>WC</strong>
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <p>Give your roadmap a clearer path with our free starter checklist.</p>
                <button type="button">
                  Download <ArrowRight className="h-4 w-4" />
                </button>
              </section>
            </aside>
            ) : null}

            {latestPosts.map((post) => (
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="blog-post-card"
                key={post.slug}
              >
                <img src={post.image} alt={post.title} />
                <div className="blog-meta">{getPostMeta(post)}</div>
                <h3>{post.title}</h3>
              </Link>
            ))}

            {totalPages > 1 ? (
              <div className="blog-pagination" aria-label="Pagination">
                {pageNumbers.map((page) => (
                  <button
                    key={page}
                    type="button"
                    className={currentPage === page ? "is-active" : undefined}
                    aria-current={currentPage === page ? "page" : undefined}
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </button>
                ))}
                <button
                  type="button"
                  aria-label="Next page"
                  disabled={currentPage === totalPages}
                  onClick={() => goToPage(currentPage + 1)}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : null}
          </div>
        </section>

        <section className="blog-subscribe container-pro">
          <div className="blog-subscribe__lines" aria-hidden="true" />
          <div>
            <h2>Receive articles like this in your mailbox</h2>
            <p>Sign up to get weekly insights & inspiration in your inbox.</p>
          </div>
          <BlogSubscribeForm id="blog-email" source="blog-listing" />
        </section>
      </main>

      <footer className="blog-footer">
        <div className="container-pro">
          <div className="blog-footer__top">
            <span>Company</span>
            <ChevronDown className="h-4 w-4" />
          </div>
          <div className="blog-footer__bottom">
            <span>(c) 2026 Wallace Croft. All rights reserved.</span>
            <nav>
              <Link to="/services">Services</Link>
              <Link to="/industries">Industries</Link>
              <Link to="/about">About</Link>
              <Link to="/case-studies">Case Studies</Link>
              <Link to="/contact">Contact Us</Link>
            </nav>
            <div className="blog-footer__socials">
              <Linkedin className="h-4 w-4" />
              <Twitter className="h-4 w-4" />
              <Cpu className="h-4 w-4" />
              <Youtube className="h-4 w-4" />
              <ShieldCheck className="h-4 w-4" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
