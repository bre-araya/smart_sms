"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import styles from "./Profile.module.css";

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
    <main className={styles.profileWrapper}>
  <section className={styles.profileCard}>

    <div className={styles.profileAvatar}>
      👤
    </div>

    <h1 className={styles.profileTitle}>
      My Profile
    </h1>

    <p className={styles.profileSubtitle}>
      Manage your account information and security.
    </p>

    <div className={styles.infoCard}>
      <div className={styles.infoRow}>
        <span className={styles.infoLabel}>Name</span>
        <span>{user.name || `${user.firstName || ""} ${user.lastName || ""}`.trim() || "—"}</span>
      </div>

      <div className={styles.infoRow}>
        <span className={styles.infoLabel}>Email</span>
        <span>{user.email || "—"}</span>
      </div>

      <div className={styles.infoRow}>
        <span className={styles.infoLabel}>Role</span>
        <span>{user.role || "—"}</span>
      </div>

      {user.phone && (
        <div className={styles.infoRow}>
          <span className={styles.infoLabel}>Phone</span>
          <span>{user.phone}</span>
        </div>
      )}
    </div>

    <div className={styles.actionButtons}>
      <Link
        href="/login/change-password"
        className={styles.primaryButton}
      >
        Change Password
      </Link>

      <button
        type="button"
        className={styles.secondaryButton}
        onClick={logout}
      >
        Logout
      </button>
    </div>

    <Link
      href="/dashboard"
      className={styles.backButton}
    >
      ← Back to Dashboard
    </Link>

  </section>
</main>
  )
}
    
