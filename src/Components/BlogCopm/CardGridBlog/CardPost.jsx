import { Link } from "react-router-dom";

export default function CardPost({
  slug,
  image,
  category,
  readTime,
  date,
  title,
  excerpt,
  author,
}) {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  return (
    <article className="group card overflow-hidden">
      <Link to={`/blog/${slug}`} className="block">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border-0 border-[#333333]">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-post">
          {/* Info */}
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
            <span className="flex items-center gap-1">
              <i className="fa-regular fa-clock"></i>
              {readTime}
            </span>

            <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>

            <span>{formatDate(date)}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-neutral-400 mb-3 line-clamp-2 text-sm leading-relaxed">
            {excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
            {/* Author */}
            <div className="flex items-center gap-3">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
              />

              <div>
                <p className="text-sm font-medium text-white">{author.name}</p>

                <p className="text-xs text-neutral-500">{author.role}</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border-0 border-orange-500/20 group-hover:border-transparent">
              <i className="fa-solid fa-arrow-left text-orange-500 group-hover:text-white transition-colors duration-300"></i>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
