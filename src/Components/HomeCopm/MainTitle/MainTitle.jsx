import Badge from "../../Helper/Badge/Badge";
import { NavLink } from "react-router-dom";
import styles from "./MainTitle.module.css";

export default function MainTitle({ text, title, desc, btntext, link }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
      <div>
        <Badge text={text} />
        <h2 className="section-title text-white mt-3 mb-3">{title}</h2>
        <p className={`${styles.sectionSubtitle} max-w-lg`}>{desc}</p>
      </div>
      <NavLink
        className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
        to={link}
        data-discover="true"
      >
        {btntext}
        <svg
          className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </NavLink>
    </div>
  );
}
