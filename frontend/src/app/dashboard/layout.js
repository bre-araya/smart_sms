import styles from "./layout.module.css";

export default function DashboardLayout({ children }) {
  return <div className={styles.dashboardLayout}>{children}</div>;
}
