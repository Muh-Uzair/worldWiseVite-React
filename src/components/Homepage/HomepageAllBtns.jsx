import { NavLink } from "react-router-dom";
import styles from "../Homepage/Homepage.module.css";
import LogInButton from "../general/LogInButton";
import LogoButton from "../general/LogoButton";
import { AuthnContextC } from "../../../AuthnContext";
import { useContext } from "react";

export default function HomepageAllBtns() {
  const { isAuthenticated } = useContext(AuthnContextC);
  return (
    <div className={styles.divAllButtons}>
      <LogoButton linkTo={"/"} />

      <ul>
        <li>
          <NavLink to="/Pricing">PRICING</NavLink>
        </li>
        <li>
          <NavLink to="/Product">PRODUCT</NavLink>
        </li>
        <li>
          <LogInButton navLinkTo={!isAuthenticated ? "/Login" : "/appLayout"} />
        </li>
      </ul>
    </div>
  );
}
