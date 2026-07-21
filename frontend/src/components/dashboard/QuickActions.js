import styles from "./QuickActions.module.css";

export default function QuickActions() {
  const actions = [
    {
      id: 1,
      title: "Add Student",
      icon: "➕",
      href: "/students/new",
      color: "blue",
    },
    {
      id: 2,
      title: "Assign Teacher",
      icon: "👥",
      href: "/teachers/assign",
      color: "green",
    },
    {
      id: 3,
      title: "View Reports",
      icon: "📈",
      href: "/reports",
      color: "purple",
    },
    {
      id: 4,
      title: "Manage Grades",
      icon: "📝",
      href: "/grades",
      color: "orange",
    },
    {
      id: 5,
      title: "School Settings",
      icon: "⚙️",
      href: "/settings",
      color: "gray",
    },
  ];

  return (
    <div className={styles.quickActions}>
      <h3>Quick Actions</h3>
      <div className={styles.actionGrid}>
        {actions.map((action) => (
          <a
            key={action.id}
            href={action.href}
            className={`${styles.actionButton} ${styles[`btn-${action.color}`]}`}
          >
            <div className={styles.actionIcon}>{action.icon}</div>
            <span className={styles.actionTitle}>{action.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
