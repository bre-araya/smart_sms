"use client";

import { useState, useEffect } from "react";
import StatCard from "@/components/dashboard/StatCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";
import AcademicOverview from "@/components/dashboard/AcademicOverview";
import styles from "./page.module.css";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - will be replaced with API calls
    const mockStats = {
      totalStudents: 1250,
      totalTeachers: 85,
      totalSchools: 5,
      activeEnrollments: 1180,
      currentTerm: "Term 2, 2024",
      pendingTasks: 12,
    };

    setTimeout(() => {
      setStats(mockStats);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading dashboard...</div>;
  }

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h1>Dashboard</h1>
          <p className={styles.headerSubtitle}>Welcome back! Here's what's happening today.</p>
        </div>
        <div className={styles.headerInfo}>
          <span className={styles.currentTerm}>{stats.currentTerm}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <StatCard
          title="Total Students"
          value={stats.totalStudents}
          icon="👥"
          trend="+12% from last month"
          color="blue"
        />
        <StatCard
          title="Active Teachers"
          value={stats.totalTeachers}
          icon="👨‍🏫"
          trend="+5 new this term"
          color="green"
        />
        <StatCard
          title="Schools"
          value={stats.totalSchools}
          icon="🏫"
          trend="All active"
          color="purple"
        />
        <StatCard
          title="Pending Tasks"
          value={stats.pendingTasks}
          icon="📋"
          trend="Requires attention"
          color="orange"
          highlight
        />
      </div>

      {/* Main Content Grid */}
      <div className={styles.contentGrid}>
        <div className={styles.columnMain}>
          <AcademicOverview />
          <RecentActivity />
        </div>
        <div className={styles.columnSide}>
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
