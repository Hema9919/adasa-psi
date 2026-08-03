import { Link } from "react-router-dom";

export default function MemberCard({ name, job, image, social }) {
  return (
    <div className="group bg-[#161616] rounded-2xl p-6 text-center border-0 border-[#262626] hover:border-orange-500/30 transition-all duration-300">
      {/* Image */}
      <div className="relative inline-block mb-4">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
        />

        {/* Verified Badge */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
          <i className="fa-solid fa-check text-white text-[10px]"></i>
        </div>
      </div>

      {/* Name */}
      <h3 className="font-bold text-white text-lg">{name}</h3>

      {/* Job */}
      <p className="text-orange-500 text-sm font-medium mb-4">{job}</p>

      {/* Social */}
      <div className="flex justify-center gap-3">
        <Link
          to={social.x}
          className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </Link>

        <Link
          to={social.github}
          className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
        >
          <i className="fa-brands fa-github"></i>
        </Link>

        <Link
          to={social.linkedin}
          className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
      </div>
    </div>
  );
}
