import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid_container}>
        <p>2024 Pedro Felipe © All Rights Reserved</p>

        <a href="https://storyset.com/web" target="_blank">
          Web illustrations by Storyset
        </a>
      </div>
    </footer>
  );
}
