import styles from "./RecentActivity.module.css";

function getRelativeTime(timestamp) {
  const now = new Date();
  const value = new Date(timestamp);
  const diffMs = now - value;
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffHours < 24) {
    return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
  }

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
}

export default function RecentActivity({ activities = [] }) {
  return (
    <div className={styles.recentActivity}>
      <div className={styles.header}>
        <h3>Recent Activity</h3>
        <a href="#" className={styles.viewAll}>
          View All →
        </a>
      </div>
      <div className={styles.activityList}>
        {activities.map((activity) => (
          <div key={activity.id} className={styles.activityItem}>
            <div className={styles.iconWrapper}>📌</div>
            <div className={styles.details}>
              <p className={styles.message}>{activity.title}</p>
              <span className={styles.time}>{activity.description}</span>
              <span className={styles.time}>{getRelativeTime(activity.timestamp)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
