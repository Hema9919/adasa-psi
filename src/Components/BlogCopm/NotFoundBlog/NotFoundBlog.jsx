import React from "react";

export default function NotFoundBlog({ onReset }) {
  return (
    <div className="text-center py-20">
      {/* Icon */}
      <div className="w-24 h-24 bg-[#161616] border-0 border-[#262626] rounded-full flex items-center justify-center mx-auto mb-6">
        <i className="fa-regular fa-face-frown text-5xl text-neutral-500"></i>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-3">لا توجد مقالات</h3>

      {/* Description */}
      <p className="text-neutral-400 mb-6">
        حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
      </p>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
      >
        <i className="fa-solid fa-rotate-right"></i>
        إعادة تعيين الفلاتر
      </button>
    </div>
  );
}
