import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <div className={styles.overlay}></div>
      <div className={styles.grid}></div>

      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="text-center position-relative">

          <h1 className={styles.errorCode}>404</h1>

          <div className={styles.iconBox}>
            <i className="fa-regular fa-face-frown"></i>

            <span className={styles.dotOne}></span>
            <span className={styles.dotTwo}></span>
          </div>

          <h2 className="text-white fw-bold mt-4">
            عفواً! الصفحة غير موجودة
          </h2>

          <p className="text-secondary mx-auto mt-3" style={{ maxWidth: "500px" }}>
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها، دعنا نعيدك إلى
            المسار الصحيح.
          </p>

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-5">

            <Link
              to="/"
              className={`btn ${styles.homeBtn}`}
            >
              <i className="fa-solid fa-house ms-2"></i>
              الذهاب للرئيسية
            </Link>

            <Link
              to="/blog"
              className={`btn ${styles.blogBtn}`}
            >
              <i className="fa-regular fa-newspaper ms-2"></i>
              تصفح المقالات
            </Link>

          </div>

          <hr className="my-5 text-secondary" />

          <p className="text-secondary mb-3">
            قد تجد هذه مفيدة
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">

            <Link to="/blog" className={styles.footerLink}>
              المدونة
            </Link>

            <span className="text-secondary">•</span>

            <Link to="/about" className={styles.footerLink}>
              من نحن
            </Link>

            <span className="text-secondary">•</span>

            <Link to="/privacy" className={styles.footerLink}>
              الخصوصية
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}