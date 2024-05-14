import { NavLink } from "react-router-dom";
import styles from "../Homepage/Homepage.module.css";
import LogInButton from "../general/LogInButton";
import LogoButton from "../general/LogoButton";

export default function HomepageAllBtns() {
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
          <LogInButton navLinkTo="/Login" />
        </li>
      </ul>
    </div>
  );
}
