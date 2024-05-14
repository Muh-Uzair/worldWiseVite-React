import { NavLink, Outlet } from "react-router-dom";
import styles from "../components/appLayout/appLayout.module.css";
import LogoButton from "../components/general/LogoButton";

export default function AppLayout() {
  return (
    <main
      className="mainBox"
      style={{ backgroundColor: "rgba(45, 52, 57,0.5)" }}
    >
      <div className={styles.divSideBarMap}>
        <section className={styles.sideBar}>
          <LogoButton linkTo={"/"} />

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

          <div className={styles.listCities}>
            <Outlet />
          </div>

          <footer className={styles.footerWorldWise}>
            &copy; Copyright {new Date().getFullYear()} by WorldWise Inc
          </footer>
        </section>
        <section className={styles.map}>map</section>
      </div>
    </main>
  );
}
