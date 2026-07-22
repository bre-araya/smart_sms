"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../Login.module.css";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    // Replace this delay with the password-reset API request later.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmitted(true);
    setLoading(false);
  }

  return (
    <main className={styles.wrapper}>
      <section className={styles.card}>
        <div className={styles.logo} aria-hidden="true">
          🔐
        </div>

        <h1>Forgot Password?</h1>
        <p>
          Enter your email address and we will send you instructions to reset
          your password.
        </p>

        {submitted ? (
          <>
            <div className={styles.success} role="status">
              If an account exists for {email}, password reset instructions
              have been sent.
            </div>

            <Link href="/login" className={styles.loginButton}>
              Back to Login
            </Link>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={styles.group}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={styles.loginButton}
            >
              {loading ? "Sending..." : "Send Reset Instructions"}
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
