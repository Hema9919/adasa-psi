import styles from "./Badge.module.css";
export default function Badge({ text,icon }) {
  return (
    <div
      className={`${styles.badge} d-inline-flex align-items-center gap-2`}
    >
      <span className={styles.dotWrapper}>
        <span className={styles.ping}></span>
        <span className={styles.dot}></span>
      </span>
          <span>{icon}</span>
          <span>{text}</span>
    
    </div>
  );
}