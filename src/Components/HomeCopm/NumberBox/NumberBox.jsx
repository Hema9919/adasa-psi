import styles from "./NumberBox.module.css";

export default function NumberBox({ icon, number, title }) {
  return (
    <div
      className={`${styles.glassCard} p-4 text-center h-100`}
    >
      <i className={`${icon} fs-2 text-warning mb-2`}></i>

      <p className={`${styles.gradientText} fs-2 fw-bold mb-1`}>
        {number}
      </p>

      <p className="text-secondary mb-0">
        {title}
      </p>
    </div>
  );
}