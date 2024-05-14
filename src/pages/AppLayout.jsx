import styles from "../components/appLayout/appLayout.module.css";
import LogoButton from "../components/general/LogoButton";
import CityCountryNavButtons from "../components/appLayout/CityCountryNavButtons";
import SideBarFooter from "../components/appLayout/SideBarFooter";
import ListContent from "../components/appLayout/ListContent";

export default function AppLayout() {
  return (
    <main
      className="mainBox"
      style={{ backgroundColor: "rgba(45, 52, 57,0.5)" }}
    >
      <div className={styles.divSideBarMap}>
        <section className={styles.sideBar}>
          <LogoButton linkTo={"/"} />

          <CityCountryNavButtons />

          <ListContent />

          <SideBarFooter />
        </section>
        <section className={styles.map}>map</section>
      </div>
    </main>
  );
}
