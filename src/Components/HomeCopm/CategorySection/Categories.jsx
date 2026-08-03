import { Link } from "react-router-dom";
import { categories } from "../../../data/data";
import Badge from "../../Helper/Badge/Badge";

export default function Categories() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      {/* Heading */}
      <div className="text-center mb-12">
        <Badge text={"التصنيفات"} />

        <h2 className="text-4xl font-bold text-white mb-4 mt-4">
          استكشف حسب الموضوع
        </h2>

        <p className="text-neutral-400 max-w-xl mx-auto">
          اعثر على محتوى مصمم حسب اهتماماتك
        </p>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/blog?category=${category.name}`}
              className="group relative block p-6 rounded-2xl bg-[#161616] border-0 border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors duration-300 border-0 border-orange-500/20 group-hover:border-transparent">
                  <i
                    className={`${category.icon} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`}
                  ></i>
                </div>

                {/* Name */}
                <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                  {category.name}
                </h3>

                {/* Count */}
                <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                  {category.posts} مقالة
                </p>

                {/* Arrow */}
                <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                  <i className="fa-solid fa-arrow-left text-white text-sm"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
