import { Link } from "react-router-dom";

export default function CardBlog({
  slug,
  featured,
  image,
  category,
  readTime,
  title,
  excerpt,
  author,
  date,
}) {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  return (
    <article className="group relative bg-[#161616] rounded-3xl overflow-hidden border-0 border-[#262626] hover:border-orange-500/30 transition-all duration-500">
      <Link to={`/blog/${slug}`} className="block">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-72 md:h-[400px] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {featured && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full shadow-lg">
                  <i className="fa-solid fa-star text-[12px]"></i>
                  مميز
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border-0 border-orange-500/20">
                {category}
              </span>

              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <i className="fa-regular fa-clock"></i>
                {readTime}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
              {title}
            </h2>

            <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
              {excerpt}
            </p>

            <div className="flex items-center justify-between mt-auto">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                  />

                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    {author.name}
                  </p>

                  <p className="text-xs text-neutral-500">{formatDate(date)}</p>
                </div>
              </div>

              {/* Read More */}
              <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                اقرأ المقال
                <i className="fa-solid fa-arrow-left"></i>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
