import styles from "../Map/Map.module.css";
import { AuthnContextC } from "../../../../AuthnContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutCmp() {
  const { user, logOut } = useContext(AuthnContextC);
  const navigate = useNavigate();

  function handleLogOutClick() {
    logOut();
    navigate("/");
  }

  return (
    <div className={styles.divLogout}>
      <div className={styles.divImg}>
        <img className={styles.imgPerson} src={`${user.avatar}`} />
      </div>
      <div className={styles.divWelcome}>
        <span>Welcome, {user.name}</span>
      </div>
      <div className={styles.divLogoutInner}>
        <button
          className={styles.btnLogout}
          onClick={() => handleLogOutClick()}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
}
