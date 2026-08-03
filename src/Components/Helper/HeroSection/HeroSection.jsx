import styles from "./herosectiom.module.css";
import Badge from "./../Badge/Badge";

export default function HeroSection({
  title,
  headtitleone,
  headcolortitle,
  headtitletow,
  details,
  icon,
  children,
}) {
  return (
    <section
      className={`${styles.heroSection} position-relative overflow-hidden py-5`}
    >
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroGrid}></div>

      <div className={styles.heroBlobs}>
        <div className={`${styles.blob} ${styles.blobLeft}`}></div>
        <div className={`${styles.blob} ${styles.blobRight}`}></div>
      </div>

      <div className="container position-relative text-center">
        {/* <span
          className={`${styles.sectionLabel} d-inline-flex align-items-center gap-2 mb-4`}
        >
        {title}
        </span> */}
        <Badge text={title} icon={icon}/>
        

        <h1 className="display-3 fw-bold text-white mb-4">
          {headtitleone}{" "}
          <span className={styles.gradientText}>{headcolortitle}</span>
          <br></br>
          {headtitletow}{" "}
        </h1>

        <p className="lead text-secondary col-lg-7 mx-auto">{details}</p>

        {/* أي محتوى إضافي */}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </section>
  );
}
