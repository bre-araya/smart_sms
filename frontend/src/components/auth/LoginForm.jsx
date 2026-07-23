"use client";// this directive is necessary for Next.js 13+ to indicate that this component should be rendered on the client side

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";// Importing the Link component from Next.js for client-side navigation
import { useAuth } from "@/hooks/useAuth"; // Importing a custom hook for authentication
import styles from "@/app/login/Login.module.css";

export default function LoginForm() {
  const { login, loading } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");

  function handleChange(e) { // Handle input changes
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) { // Handle form submission
    e.preventDefault();

    setError("");

    try {
      await login(form);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.wrapper}>

      <div className={styles.card}>

        <div className={styles.loginGrid}>
          <div className={styles.logoPanel}>
            <h4>WEL_COME TO 𝐘𝐎𝐘𝐎  ACADEMY</h4>
            <Image
              src="/school-logo-1.png"
              alt="School Logo"
              width={320}
              height={320}
              className={styles.logoImage}
            />
            <h2>𝐘𝐎𝐘𝐎  ACADEMY</h2>
            <p>
              Empowering Administrators, Teachers, Students, and Parents with a
              Smarter, Faster, and Connected School Management Experience.
            </p>
          </div>

          <div className={styles.formPanel}>
            <div className={styles.logo}>
              🎓
            </div>

            <h1>Welcome Back</h1>

            <p>
              Login to your School Management System
            </p>

            {error && (
              <div className={styles.error}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={styles.group}>
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.group}>
                <label>Password</label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.options}>
                <label>
                  <input
                    type="checkbox"
                    name="remember"
                    onChange={handleChange}
                  />
                  Remember me
                </label>

                <Link href="/login/forgot-password">
                  Forgot Password?
                </Link>
              </div>

              <button
                disabled={loading}
                className={styles.loginButton}
              >
                {loading ? "Signing In..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}