export default function BlogFilter({
  categories,
  search,
  setSearch,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 pr-12 rounded-xl bg-[#161616] border-0 border-[#262626] text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 transition-colors"
            />

            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"></i>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory("الكل")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === "الكل"
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                  : "bg-[#161616] text-neutral-400 border-0 border-[#262626] hover:border-orange-500/30"
              }`}
            >
              جميع المقالات
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "bg-[#161616] text-neutral-400 border-0 border-[#262626] hover:border-orange-500/30"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
