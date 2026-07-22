"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../Login.module.css";

export default function ResetPasswordPage() {
  const [form, setForm] = useState({
    token: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <main className={styles.wrapper}>
      <section className={styles.card}>
        <div className={styles.logo} aria-hidden="true">
          🔑
        </div>

        <h1>Reset Password</h1>
        <p>Enter the reset token from your email and choose a new password.</p>

        {submitted ? (
          <>
            <div className={styles.success} role="status">
              Your password has been reset successfully.
            </div>
            <Link href="/login" className={styles.loginButton}>
              Back to Login
            </Link>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            {error && (
              <div className={styles.error} role="alert">
                {error}
              </div>
            )}

            <div className={styles.group}>
              <label htmlFor="token">Reset Token</label>
              <input
                id="token"
                type="text"
                name="token"
                placeholder="Enter your reset token"
                value={form.token}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.group}>
              <label htmlFor="password">New Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your new password"
                value={form.password}
                onChange={handleChange}
                minLength={8}
                required
              />
            </div>

            <div className={styles.group}>
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your new password"
                value={form.confirmPassword}
                onChange={handleChange}
                minLength={8}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={styles.loginButton}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>

            <Link href="/login" className={styles.backLink}>
              Back to Login
            </Link>
          </form>
        )}
      </section>
    </main>
  );
}
