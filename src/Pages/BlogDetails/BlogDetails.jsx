import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { data } from "../../data/data";
import CardPost from "../../Components/BlogCopm/CardGridBlog/CardPost";

export default function BlogDetails() {
  const { slug } = useParams();
  const [activeSection, setActiveSection] = useState("");

  const post = data.posts.find((item) => item.slug === slug);

  // Format date helper
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    try {
      return new Date(dateStr).toLocaleDateString("ar-EG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  // Parse headings from post content
  const headings = useMemo(() => {
    if (!post?.content) return [];
    return post.content
      .split("\n")
      .filter((line) => line.startsWith("## "))
      .map((line, index) => ({
        id: `section-${index}`,
        title: line.replace("## ", "").trim(),
      }));
  }, [post?.content]);

  // Related posts (3 posts excluding current)
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const others = data.posts.filter((p) => p.slug !== post.slug);
    const sameCategory = others.filter((p) => p.category === post.category);
    if (sameCategory.length >= 3) {
      return sameCategory.slice(0, 3);
    }
    return [
      ...sameCategory,
      ...others.filter((p) => p.category !== post.category),
    ].slice(0, 3);
  }, [post]);

  // IntersectionObserver for active section highlight
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  if (!post) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            المقال غير موجود
          </h1>
          <Link
            to="/blog"
            className="inline-block mt-4 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition text-white font-semibold"
          >
            العودة للمدونة
          </Link>
        </div>
      </section>
    );
  }

  let headingCount = 0;

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pb-20">
      {/* Hero Banner */}
      <section className="relative h-[480px] md:h-[540px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover brightness-75 scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-black/40"></div>

        {/* Top Breadcrumbs */}
        <div className="absolute top-6 right-6 left-6 max-w-7xl mx-auto z-10 flex justify-between items-center">
          <nav className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border-0 border-[#333333] text-xs md:text-sm text-neutral-300">
            <Link
              to="/"
              className="hover:text-orange-400 transition flex items-center gap-1.5"
            >
              <i className="fa-solid fa-house text-xs"></i>
              <span>الرئيسية</span>
            </Link>
            <span className="text-neutral-500">/</span>
            <Link to="/blog" className="hover:text-orange-400 transition">
              المدونة
            </Link>
            <span className="text-neutral-500">/</span>
            <span className="text-orange-400 font-medium truncate max-w-[150px] md:max-w-none">
              {post.category}
            </span>
          </nav>
        </div>

        {/* Hero Bottom Info */}
        <div className="absolute bottom-10 left-0 right-0 w-full max-w-7xl mx-auto px-6 z-10">
          <div className="max-w-4xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-1.5 rounded-full bg-orange-500 text-white text-xs font-bold shadow-lg shadow-orange-500/20">
                {post.category}
              </span>

              <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border-0 border-[#333333] text-neutral-300 text-xs flex items-center gap-1.5">
                <i className="fa-regular fa-clock text-orange-400"></i>
                {post.readTime}
              </span>

              <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border-0 border-[#333333] text-neutral-300 text-xs flex items-center gap-1.5">
                <i className="fa-regular fa-eye text-orange-400"></i>
                3.4k مشاهدة
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-white mb-4 drop-shadow-md">
              {post.title}
            </h1>

            {/* Author bar */}
            <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md border-0 border-[#2d2d2d] rounded-full px-4 py-2 w-fit">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-orange-500"
              />
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <span className="text-white font-bold">{post.author.name}</span>
                <span className="text-neutral-500">•</span>
                <span className="text-neutral-400">{post.author.role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout: Article + Sidebar */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sticky Sidebar (Left Column in Desktop RTL layout) */}
          <aside className="w-full lg:w-80 shrink-0 order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">
              {/* 1. Table of Contents */}
              {headings.length > 0 && (
                <div className="bg-[#121212] border-0 border-[#262626] rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center gap-3 mb-4 text-white font-bold text-base border-b border-[#262626] pb-3">
                    <span className="w-8 h-8 rounded-lg bg-orange-500/10 border-0 border-orange-500/30 text-orange-500 flex items-center justify-center text-sm">
                      <i className="fa-solid fa-list-ul"></i>
                    </span>
                    <h3>محتويات المقال</h3>
                  </div>
                  <ul className="space-y-2">
                    {headings.map((heading, idx) => {
                      const isActive = activeSection === heading.id;
                      return (
                        <li key={heading.id}>
                          <button
                            onClick={() => scrollToSection(heading.id)}
                            className={`w-full text-right flex items-center gap-3 px-3 py-2.5 rounded-xl transition text-sm text-right group ${
                              isActive
                                ? "bg-orange-500/10 text-orange-400 font-semibold border-0 border-orange-500/30"
                                : "text-neutral-300 hover:text-orange-400 hover:bg-[#1a1a1a]"
                            }`}
                          >
                            <span
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 font-medium transition ${
                                isActive
                                  ? "bg-orange-500 text-white"
                                  : "bg-[#1e1e1e] border-0 border-[#333333] text-neutral-400 group-hover:border-orange-500 group-hover:text-orange-400"
                              }`}
                            >
                              {idx + 1}
                            </span>
                            <span className="truncate">{heading.title}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {/* 2. Article Details / Meta Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#121212] border-0 border-[#262626] rounded-2xl p-4 text-center hover:border-orange-500/40 transition group">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 border-0 border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-2 group-hover:bg-orange-500 group-hover:text-white transition">
                    <i className="fa-regular fa-clock text-base"></i>
                  </div>
                  <p className="text-white font-bold text-sm mb-0.5">
                    {post.readTime}
                  </p>
                  <span className="text-[11px] text-neutral-500">
                    وقت القراءة
                  </span>
                </div>

                <div className="bg-[#121212] border-0 border-[#262626] rounded-2xl p-4 text-center hover:border-orange-500/40 transition group">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 border-0 border-orange-500/20 text-orange-500 flex items-center justify-center mx-auto mb-2 group-hover:bg-orange-500 group-hover:text-white transition">
                    <i className="fa-regular fa-calendar text-base"></i>
                  </div>
                  <p className="text-white font-bold text-sm mb-0.5">
                    {formatDate(post.date)}
                  </p>
                  <span className="text-[11px] text-neutral-500">
                    تاريخ النشر
                  </span>
                </div>
              </div>

              {/* 3. Newsletter / Contact Card */}
              <div className="bg-[#121212] border-0 border-[#262626] rounded-2xl p-6 text-center shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-2xl pointer-events-none"></div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border-0 border-orange-500/30 text-orange-500 flex items-center justify-center mx-auto mb-3 text-xl group-hover:scale-110 transition duration-300">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <h4 className="text-white font-bold text-lg mb-1">
                  لا تفوّت جديدنا
                </h4>
                <p className="text-xs text-neutral-400 mb-5 leading-relaxed">
                  اشترك للحصول على أحدث المقالات والدروس مباشرة فور نشرها
                </p>
                <Link
                  to="/blog"
                  className="w-full inline-block py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition text-center shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40"
                >
                  تصفح المزيد
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Article Content (Right Column) */}
          <main className="flex-1 min-w-0 order-1 lg:order-2">
            {/* Lead / Excerpt Callout Box */}
            <div className="bg-[#121212] border-r-4 border-orange-500 border-t border-b border-l border-[#262626] rounded-2xl p-6 text-neutral-200 text-lg leading-relaxed mb-10 shadow-lg italic">
              "{post.excerpt}"
            </div>

            {/* Article Content Body */}
            <article className="prose prose-invert prose-lg max-w-none text-neutral-300 leading-9">
              {post.content.split("\n").map((line, index) => {
                if (line.startsWith("## ")) {
                  const currentHeadingId = `section-${headingCount}`;
                  headingCount++;
                  return (
                    <h2
                      key={index}
                      id={currentHeadingId}
                      className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3 scroll-mt-28 border-b border-[#222222] pb-3"
                    >
                      <span className="w-10 h-10 rounded-xl bg-orange-500/10 border-0 border-orange-500/30 text-orange-500 flex items-center justify-center shrink-0 text-base">
                        <i className="fa-solid fa-camera"></i>
                      </span>
                      <span>{line.replace("## ", "")}</span>
                    </h2>
                  );
                }

                if (line.trim() === "") return null;

                return (
                  <p
                    key={index}
                    className="text-neutral-300 mb-6 leading-relaxed text-lg"
                  >
                    {line}
                  </p>
                );
              })}
            </article>

            {/* Tags Box */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-14 bg-[#121212] border-0 border-[#262626] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4 font-bold text-white text-base">
                  <span className="w-8 h-8 rounded-lg bg-orange-500/10 border-0 border-orange-500/30 text-orange-500 flex items-center justify-center text-sm">
                    <i className="fa-solid fa-tag"></i>
                  </span>
                  <span>الوسوم</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-[#181818] border-0 border-[#2a2a2a] text-neutral-300 text-xs hover:border-orange-500 hover:text-orange-400 transition cursor-pointer font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Box */}
            <div className="mt-6 bg-[#121212] border-0 border-[#262626] rounded-2xl p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3 font-bold text-white text-base">
                  <span className="w-8 h-8 rounded-lg bg-orange-500/10 border-0 border-orange-500/30 text-orange-500 flex items-center justify-center text-sm">
                    <i className="fa-solid fa-share-nodes"></i>
                  </span>
                  <span>شارك المقال</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    aria-label="شارك على X"
                    className="w-10 h-10 rounded-full bg-[#181818] border-0 border-[#2a2a2a] hover:bg-orange-500 hover:border-orange-500 text-neutral-300 hover:text-white transition flex items-center justify-center text-sm"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </button>
                  <button
                    aria-label="شارك على لينكد إن"
                    className="w-10 h-10 rounded-full bg-[#181818] border-0 border-[#2a2a2a] hover:bg-orange-500 hover:border-orange-500 text-neutral-300 hover:text-white transition flex items-center justify-center text-sm"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </button>
                  <button
                    aria-label="شارك على فيسبوك"
                    className="w-10 h-10 rounded-full bg-[#181818] border-0 border-[#2a2a2a] hover:bg-orange-500 hover:border-orange-500 text-neutral-300 hover:text-white transition flex items-center justify-center text-sm"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </button>
                  <button
                    aria-label="نسخ الرابط"
                    className="w-10 h-10 rounded-full bg-[#181818] border-0 border-[#2a2a2a] hover:bg-orange-500 hover:border-orange-500 text-neutral-300 hover:text-white transition flex items-center justify-center text-sm"
                  >
                    <i className="fa-solid fa-link"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-6 bg-[#121212] border-0 border-[#262626] rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-5">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-500 shrink-0"
              />
              <div className="text-center md:text-right">
                <span className="text-xs text-orange-500 font-semibold mb-1 block">
                  كاتب المقال
                </span>
                <h4 className="text-lg font-bold text-white mb-0.5">
                  {post.author.name}
                </h4>
                <p className="text-xs text-neutral-400 mb-3">
                  {post.author.role}
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  مصور محترف شغوف بمغامرة الطبيعة والحيوانات، يسعى دائماً لنقل
                  جمال العالم بعدسته ومشاركة الخبرات والتقنيات مع المصورين.
                </p>
              </div>
            </div>
          </main>
        </div>

        {/* Related Posts Section (using CardPost grid layout) */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-[#262626] pt-16 mt-20">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-orange-500/10 border-0 border-orange-500/30 text-orange-500 flex items-center justify-center text-lg">
                  <i className="fa-solid fa-layer-group"></i>
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    مقالات قد تعجبك
                  </h2>
                  <p className="text-xs md:text-sm text-neutral-400 mt-0.5">
                    استكشف المزيد من الموضوعات المميزة
                  </p>
                </div>
              </div>

              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 font-semibold transition"
              >
                <span>عرض الكل</span>
                <i className="fa-solid fa-arrow-left text-xs"></i>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <CardPost key={relatedPost.id} {...relatedPost} />
              ))}
            </div>
          </section>
        )}
      </section>
    </div>
  );
}
