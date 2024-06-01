import { useNavigate } from "react-router-dom";
import styles from "../appLayout/City.module.css";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className={styles.buttonBack}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        &larr; BACK
      </button>
    </div>
  );
}
