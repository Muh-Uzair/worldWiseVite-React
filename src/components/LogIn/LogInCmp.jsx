import styles from "../LogIn/LogInCmp.module.css";
import LogInButton from "../general/LogInButton";

export default function LogInCmp() {
  return (
    <form className={styles.formUserNamePassword}>
      <label>Email Address</label>
      <br />
      <input type="text" placeholder="example@gmail.com" />
      <br />
      <label>Password</label>
      <br />
      <input
        type="password"
        placeholder="Password"
        style={{ marginBottom: "25px", letterSpacing: "3px" }}
      />
      <br />

      <LogInButton navLinkTo={"/"} />
    </form>
  );
}
