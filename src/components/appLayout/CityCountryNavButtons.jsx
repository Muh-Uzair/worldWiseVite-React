import styles from "./appLayout.module.css";
import { NavLink } from "react-router-dom";

export default function CityCountryNavButtons() {
  return (
    <div className={styles.divCityCountryButtons}>
      <ul>
        <li className={styles.buttonCities}>
          <NavLink to="cities">CITIES</NavLink>
        </li>
        <li className={styles.buttonCountries}>
          <NavLink to="countries">COUNTRIES</NavLink>
        </li>
      </ul>
    </div>
  );
}
