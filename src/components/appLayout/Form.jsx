import { useNavigate } from "react-router-dom";
import styles from "../appLayout/Form.module.css";

export default function Form() {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.divForm}></div>
      <button
        className={styles.buttonBack}
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        BACK
      </button>
    </div>
  );
}
