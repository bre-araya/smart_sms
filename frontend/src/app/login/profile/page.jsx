"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import styles from "../Login.module.css";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return (
      <main className={styles.wrapper}>
        <section className={styles.card}>
          <p>Loading profile...</p>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.wrapper}>
      <section className={styles.card}>
        <div className={styles.logo} aria-hidden="true">
          👤
        </div>

        <h1>Your Profile</h1>
        <p>Manage your account details and security settings.</p>

        <div className={styles.profileInfo}>
          <div className={styles.profileRow}>
            <span className={styles.profileLabel}>Name</span>
            <span>{user.name || "—"}</span>
          </div>
          <div className={styles.profileRow}>
            <span className={styles.profileLabel}>Email</span>
            <span>{user.email || "—"}</span>
          </div>
          <div className={styles.profileRow}>
            <span className={styles.profileLabel}>Role</span>
            <span>{user.role || "—"}</span>
          </div>
          {user.phone && (
            <div className={styles.profileRow}>
              <span className={styles.profileLabel}>Phone</span>
              <span>{user.phone}</span>
            </div>
          )}
        </div>

        <div className={styles.profileActions}>
          <Link href="/login/change-password" className={styles.loginButton}>
            Change Password
          </Link>
          <button
            type="button"
            className={styles.backLink}
            onClick={logout}
          >
            Logout
          </button>
        </div>

        <Link href="/dashboard" className={styles.backLink}>
          Back to Dashboard
        </Link>
      </section>
    </main>
  );
}
