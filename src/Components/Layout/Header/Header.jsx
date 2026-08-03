import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../../assets/logo-GdqARQRt.png";

export default function Header() {
  return (
    <nav className={`fixed-top navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container">
        {/* Logo */}
        <Link
          to="/"
          className={`navbar-brand d-flex align-items-center gap-3 ${styles.logo}`}
        >
          <img src={logo} alt="Adasa Logo" />
          <div>
            <h4 className="mb-0 text-white fw-bold">عدسة</h4>
            <small>عالم التصوير الفوتوغرافي</small>
          </div>
        </Link>

        {/* Mobile Button */}
        <button
          className="navbar-toggler  border-0  shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <i className="fa-solid fa-bars text-white fs-4"></i>
        </button>

        {/* Menu */}
        <div className=" navbar-collapse justify-content-between" id="navbar">
          {/* Navigation */}
          <ul className={`navbar-nav mx-auto ${styles.menu}`}>
            <li className="nav-item">
              <NavLink to="/" className={styles.activeLink}>
                الرئيسية
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/blog" className={styles.navLink}>
                المدونة
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className={styles.navLink}>
                من نحن
              </NavLink>
            </li>
          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            <button className={styles.searchBtn}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <Link to="/blog" className={styles.readBtn}>
              ابدأ القراءة
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
