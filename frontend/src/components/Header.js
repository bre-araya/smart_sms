"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiBars3 } from "react-icons/hi2";
import { useAuth } from "@/hooks/useAuth";
import styles from "./Header.module.css";

export default function Header() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isDashboardRoute = pathname?.startsWith("/dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [toggleHover, setToggleHover] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleSidebarState = (event) => {
      setSidebarOpen(Boolean(event.detail));
    };

    window.addEventListener("smart-sms-sidebar-state", handleSidebarState);

    return () => {
      window.removeEventListener("smart-sms-sidebar-state", handleSidebarState);
    };
  }, []);

  const handleSidebarToggle = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("smart-sms-sidebar-toggle"));
    }
  };

  const renderToggleIcon = () => {
    if (toggleHover) {
      return sidebarOpen ? "❮" : "❯";
    }

    return <HiBars3 />;
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Sidebar Toggle */}
          {isDashboardRoute && (
            <button
              type="button"
              className={styles.menuToggle}
              onClick={handleSidebarToggle}
              onMouseEnter={() => setToggleHover(true)}
              onMouseLeave={() => setToggleHover(false)}
              aria-label="Toggle sidebar"
            >
              {renderToggleIcon()}
            </button>
          )}


          {/* Center Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/school-logo-1.png"
              alt="School Logo"
              width={50}
              height={50}
            />

            <span>
              𝐘𝐎𝐘𝐎 ACADEMY
            </span>
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

        {user ? (
          <div className={styles.authDropdown}>
            <button
              className={styles.authToggle}
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {user.name || `${user.firstName || ""} ${user.lastName || ""}`.trim() || "Account"} ▾
            </button>
            <div className={`${styles.authMenu} ${menuOpen ? styles.open : ""}`}>
              <Link
                href="/login/profile"
                className={styles.authMenuItem}
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </Link>
              <Link
                href="/login/change-password"
                className={styles.authMenuItem}
                onClick={() => setMenuOpen(false)}
              >
                Change Password
              </Link>
              <button
                type="button"
                className={styles.authMenuItem}
                onClick={() => {
                  setMenuOpen(false);
                  logout();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link href="/login" className={styles.loginBtn}>
            Login
          </Link>
        )}

      </div>
    </header>
  );
}