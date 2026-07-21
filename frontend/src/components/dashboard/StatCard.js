import styles from "./StatCard.module.css";

export default function StatCard({ title, value, icon, trend, color = "blue", highlight = false }) {
  return (
    <div className={`${styles.card} ${styles[`color-${color}`]} ${highlight ? styles.highlight : ""}`}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <h2 className={styles.value}>{value.toLocaleString()}</h2>
        <p className={styles.trend}>{trend}</p>
      </div>
    </div>
  );
}
