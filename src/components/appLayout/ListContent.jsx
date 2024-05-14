import { Outlet } from "react-router-dom";
import styles from "../appLayout/appLayout.module.css";

export default function ListContent() {
  return (
    <div className={styles.listContent}>
      <Outlet />
    </div>
  );
}
