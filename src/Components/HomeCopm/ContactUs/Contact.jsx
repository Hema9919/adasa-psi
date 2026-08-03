import React from "react";

export default function Contact() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#161616] rounded-3xl border-0 border-[#262626] p-8 md:p-12 lg:p-16 text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className="fa-regular fa-envelope text-white text-3xl"></i>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            اشترك في{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              نشرتنا الإخبارية
            </span>
          </h2>

          {/* Description */}
          <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border-0 border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
            />

            <button
              type="submit"
              className="rounded-4xl px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold  hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              اشترك الآن
            </button>
          </form>

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
            <div className="flex items-center gap-4">
              {/* Users */}
              <div className="flex -space-x-2 space-x-reverse">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-[#161616]"
                />

                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-[#161616]"
                />

                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-[#161616]"
                />
              </div>

              <span>
                انضم إلى <span className="text-white font-medium">+10,000</span>{" "}
                مصور
              </span>
            </div>

            <span className="hidden sm:inline text-[#262626]">•</span>

            <span>بدون رسائل مزعجة</span>

            <span className="hidden sm:inline text-[#262626]">•</span>

            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
  );
}
