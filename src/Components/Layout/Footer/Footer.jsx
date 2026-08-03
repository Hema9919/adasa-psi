import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { data } from "../../../data/data";
import { categories } from "../../../data/data";

export default function Footer() {
  const { siteInfo } = data;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row gy-5">
          {/* Logo */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className={styles.logo}>ع</div>

              <h3 className="text-white fw-bold mb-0">{siteInfo.name}</h3>
            </div>

            <p className="text-secondary">{siteInfo.description}</p>

            <div className="d-flex gap-3 mt-4">
              <a
                href={siteInfo.social.youtube}
                target="_blank"
                rel="noreferrer"
                className={styles.social}
              >
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a
                href={siteInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className={styles.social}
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href={siteInfo.social.github}
                target="_blank"
                rel="noreferrer"
                className={styles.social}
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href={siteInfo.social.twitter}
                target="_blank"
                rel="noreferrer"
                className={styles.social}
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>

          {/* اكتشف */}
          <div className="col-md-4 col-lg-2">
            <h5 className={styles.title}>استكشف</h5>

            <ul className="list-unstyled">
              <li>
                <Link to="/">الرئيسية</Link>
              </li>
              <li>
                <Link to="/blog">المدونة</Link>
              </li>
              <li>
                <Link to="/about">من نحن</Link>
              </li>
            </ul>
          </div>

          {/* التصنيفات */}

          <div className="col-md-4 col-lg-2">
            <h5 className={styles.title}>التصنيفات</h5>

           <ul className="list-unstyled">
  {categories
    .filter((category) => category.name !== "الكل")
    .map((category) => (
      <li key={category.name}>
        <Link to={`/blog?category=${encodeURIComponent(category.name)}`}>
          {category.name}
        </Link>
      </li>
    ))}
</ul>
          </div>

          {/* Subscribe */}

          <div className="col-md-4 col-lg-4">
            <h5 className={styles.title}>ابق على اطلاع</h5>

            <p className="text-secondary">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <input
              className={`form-control ${styles.input}`}
              placeholder="أدخل بريدك الإلكتروني"
            />

            <button className={styles.subscribe}>اشترك</button>
          </div>
        </div>

        <hr className="my-5 text-secondary" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-secondary mb-3 mb-md-0">
            © 2026 عدسة. صنع بكل ❤️ جميع الحقوق محفوظة.
          </p>

          <div className="d-flex gap-4">
            <Link to="/privacy">سياسة الخصوصية</Link>

            <Link to="/terms">شروط الخدمة</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
