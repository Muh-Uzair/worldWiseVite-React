// import Button from "../components/general/Button";
import HomepageAllBtns from "../components/Homepage/HomepageAllBtns";
import styles from "../components/Homepage/Homepage.module.css";
import Button from "../components/general/Button";
import HomepageAllText from "../components/Homepage/HomepageAllText";
import { AuthnContextC } from "../../AuthnContext";
import { useContext } from "react";

export default function Homepage() {
  const { isAuthenticated } = useContext(AuthnContextC);
  return (
    <main className="mainBox">
      <img className={styles.imgHomepage} src="bg.jpg" alt="img" />

      <div
        className={styles.divHomepageModal}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.667)" }}
      >
        <HomepageAllBtns />

        <div className={styles.divAllText}>
          <HomepageAllText />
          <Button
            class_name={"btnTracking"}
            navLinkTo={!isAuthenticated ? "/LogIn" : "/appLayout"}
          >
            START TRACKING NOW
          </Button>
        </div>
      </div>
    </main>
  );
}
