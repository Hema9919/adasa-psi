import { useState } from "react";
import HeroSection from "../../Components/Helper/HeroSection/HeroSection";
import BlogFilter from "../../Components/BlogCopm/BlogFilter/BlogFilter";
import CardPost from "../../Components/BlogCopm/CardGridBlog/CardPost";
import CardBlog from "../../Components/BlogCopm/CardBlog/CardBlog";
import NotFoundBlog from "../../Components/BlogCopm/NotFoundBlog/NotFoundBlog";
import Pagination from "../../Components/BlogCopm/Pagination/Pagination";
import BlogToolbar from "../../Components/BlogCopm/BlogToolbar/BlogToolbar";
import { categories, data } from "../../data/data";
import { useSearchParams } from "react-router-dom";
export default function Blog() {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get("category") || "الكل";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const filteredPosts = data.posts.filter((post) => {
    const matchesCategory =
      activeCategory === "الكل" || post.category === activeCategory;

    const matchesSearch =
      post.title.includes(search) || post.excerpt.includes(search);

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const start = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(start, start + postsPerPage);
  const handleCategory = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);

    if (category === "الكل") {
      setSearchParams({});
    } else {
      setSearchParams({
        category,
      });
    }
  };
  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };
  const handleReset = () => {
    setSearch("");
    setActiveCategory("الكل");
    setCurrentPage(1);
  };
  return (
    <div className="bg-[#0a0a0a]">
      <HeroSection
        title="مدونتنا"
        headtitleone="استكشف"
        headcolortitle="مقالاتنا"
        details="اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث"
        icon={<i className="fa-solid fa-newspaper"></i>}
      />

      <BlogFilter
        categories={categories}
        search={search}
        setSearch={handleSearch}
        activeCategory={activeCategory}
        setActiveCategory={handleCategory}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogToolbar
          count={filteredPosts.length}
          category={activeCategory}
          viewMode={viewMode}
          setViewMode={setViewMode}
          onReset={handleReset}
        />

        {filteredPosts.length > 0 ? (
          <>
            {viewMode === "grid" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {currentPosts.map((post) => (
                  <CardPost key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {currentPosts.map((post) => (
                  <CardBlog key={post.id} {...post} />
                ))}
              </div>
            )}

            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        ) : (
          <NotFoundBlog onReset={handleReset} />
        )}
      </div>
    </div>
  );
}
