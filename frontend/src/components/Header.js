"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>📱</span>
          <span className={styles.logoText}>Smart SMS</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/dashboard" className={styles.navLink}>
            Dashboard
          </Link>
          <Link href="/students" className={styles.navLink}>
            Students
          </Link>
          <Link href="/teachers" className={styles.navLink}>
            Teachers
          </Link>
          <Link href="/settings" className={styles.navLink}>
            Settings
          </Link>
        </nav>
        <div className={styles.userMenu}>
          <button className={styles.profileButton}>👤</button>
        </div>
      </div>
    </header>
  );
}
