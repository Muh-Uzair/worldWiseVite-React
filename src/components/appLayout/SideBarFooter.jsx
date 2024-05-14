import styles from "./appLayout.module.css";

export default function SideBarFooter() {
  return (
    <footer className={styles.footerWorldWise}>
      &copy; Copyright {new Date().getFullYear()} by WorldWise Inc
    </footer>
  );
}
