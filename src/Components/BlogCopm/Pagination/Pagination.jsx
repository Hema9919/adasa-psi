export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-3 mt-12">

      {Array.from({ length: totalPages }).map((_, index) => (

        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`w-11 h-11 rounded-xl transition ${
            currentPage === index + 1
              ? "bg-orange-500 text-white"
              : "bg-[#161616] text-neutral-400 hover:bg-[#222]"
          }`}
        >
          {index + 1}
        </button>

      ))}

    </div>
  );
}