import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/school-logo-1.png"
            alt="School Logo"
            width={50}
            height={50}
          />
          <span>𝐘𝐎𝐘𝐎  ACADEMY</span>
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>

          <Link href="/">Home</Link>

          <Link href="/about">About Us</Link>

          <Link href="/features">Features</Link>

          {/* Dropdown */}
          <div className={styles.dropdown}>
            <span className={styles.dropbtn}>
              Application ▾
            </span>

            <div className={styles.dropdownContent}>

              <Link href="/admin" className={styles.appCard}>
                <div className={styles.icon}>🖥️</div>
                <div>
                  <h4>Admin Dashboard</h4>
                  <p>
                    Complete control center for school
                    administrators and staff.
                  </p>
                </div>
              </Link>

              <Link href="/teacher" className={styles.appCard}>
                <div className={styles.icon}>🎓</div>
                <div>
                  <h4>Teacher App</h4>
                  <p>
                    Attendance, grading and communication.
                  </p>
                </div>
              </Link>

              <Link href="/parent" className={styles.appCard}>
                <div className={styles.icon}>👨‍👩‍👧</div>
                <div>
                  <h4>Parent App</h4>
                  <p>
                    Fee tracking and real-time updates.
                  </p>
                </div>
              </Link>

              <Link href="/student" className={styles.appCard}>
                <div className={styles.icon}>📖</div>
                <div>
                  <h4>Student App</h4>
                  <p>
                    Timetable, assignments and results.
                  </p>
                </div>
              </Link>

            </div>
          </div>

          <Link href="/contact">Contact</Link>

        </nav>

        {/* Login */}
        <Link href="/login" className={styles.loginBtn}>
          Login
        </Link>

      </div>
    </header>
  );
}