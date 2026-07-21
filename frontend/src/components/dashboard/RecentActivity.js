import styles from "./RecentActivity.module.css";

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "enrollment",
      message: "New student enrollment: John Doe",
      time: "2 hours ago",
      icon: "✅",
    },
    {
      id: 2,
      type: "grade",
      message: "Grade submission for Mathematics - Grade 10A",
      time: "4 hours ago",
      icon: "📊",
    },
    {
      id: 3,
      type: "teacher",
      message: "New teacher assigned: Mrs. Johnson",
      time: "1 day ago",
      icon: "👨‍🏫",
    },
    {
      id: 4,
      type: "enrollment",
      message: "3 students transferred to Grade 11B",
      time: "2 days ago",
      icon: "🔄",
    },
    {
      id: 5,
      type: "system",
      message: "Academic year 2024/2025 activated",
      time: "3 days ago",
      icon: "⚙️",
    },
  ];

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
            <div className={styles.iconWrapper}>{activity.icon}</div>
            <div className={styles.details}>
              <p className={styles.message}>{activity.message}</p>
              <span className={styles.time}>{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
