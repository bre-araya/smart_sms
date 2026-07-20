import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Smart SMS</p>
        <h1>Build your communication workflow with clarity.</h1>
        <p className={styles.description}>
          This frontend is now organized for growth with dedicated folders for components,
          layouts, services, hooks, utilities, styles, and configuration.
        </p>
      </section>
    </main>
  );
}
