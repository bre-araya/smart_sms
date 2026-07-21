import styles from "./page.module.css";

export default function Home() {
  const features = [
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Track student performance and school metrics in real-time with intuitive dashboards"
    },
    {
      icon: "👥",
      title: "Student Management",
      description: "Effortlessly manage student enrollment, grades, and academic progress"
    },
    {
      icon: "📚",
      title: "Academic Planning",
      description: "Organize subjects, teachers, and curriculum with powerful planning tools"
    },
    {
      icon: "📱",
      title: "Smart Communication",
      description: "Intelligent SMS notifications for parents, students, and staff"
    },
    {
      icon: "🎯",
      title: "Performance Tracking",
      description: "Monitor teacher performance and student outcomes with detailed insights"
    },
    {
      icon: "🔐",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with role-based access control"
    }
  ];

  return (
    <main className={styles.page}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>📲</span>
            <span className={styles.logoText}>Smart SMS</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#features" className={styles.navLink}>Features</a>
            <a href="#" className={styles.navLink}>Pricing</a>
            <a href="#" className={styles.navLink}>About</a>
            <button className={styles.navButton}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Welcome to Smart SMS</p>
          <h1 className={styles.heroTitle}>
            Intelligent School Management System
          </h1>
          <p className={styles.heroDescription}>
            Streamline your school operations with our comprehensive platform. 
            Manage students, teachers, academics, and communications all in one place.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.buttonPrimary}>Start Free Trial</button>
            <button className={styles.buttonSecondary}>Watch Demo</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.heroPlaceholder}>
            <span>📈 Dashboard Preview</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.features}>
        <div className={styles.featuresHeader}>
          <h2>Powerful Features</h2>
          <p>Everything you need to manage your school effectively</p>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Transform Your School?</h2>
          <p>Join hundreds of schools using Smart SMS to streamline their operations</p>
          <button className={styles.buttonPrimary}>Get Started Today</button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Smart SMS. All rights reserved.</p>
      </footer>
    </main>
  );
}
