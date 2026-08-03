export default function BlogToolbar({
  count,
  category,
  viewMode,
  setViewMode,
  onReset,
  search,
}) {
  return (
    <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-neutral-400">
        عرض <span className="font-bold text-white">{count}</span> مقالات
        {category !== "الكل" && (
          <>
            {" "}
            في <span className="font-bold text-orange-500">{category}</span>
          </>
        )}
      </p>

      <div className="flex items-center gap-3">
        <div className="flex items-center bg-[#161616] border-0 border-[#262626] rounded-xl p-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition ${
              viewMode === "grid"
                ? "bg-orange-500 text-white"
                : "text-neutral-400"
            }`}
          >
            <i className="fa-solid fa-table-cells"></i>
          </button>

          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition ${
              viewMode === "list"
                ? "bg-orange-500 text-white"
                : "text-neutral-400"
            }`}
          >
            <i className="fa-solid fa-list"></i>
          </button>
        </div>
        {(category !== "الكل" || search) && (
          <button
            onClick={onReset}
            className="text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-2"
          >
            <i className="fa-solid fa-xmark"></i>
            مسح الفلاتر
          </button>
        )}
      </div>
    </div>
  );
}
