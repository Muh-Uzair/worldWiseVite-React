import styles from "./PricingCmp.module.css";

export default function PricingCmpAllText() {
  return (
    <section className={styles.sectionImgText}>
      <img style={styles.imgBuilding} src="img-2.jpg" />

      <div className={styles.divText}>
        <h1>
          Simple pricing.<br></br>Just $9/month.
        </h1>

        <p className={styles.smallText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
          labore mollitia iusto. Recusandae quos provident, laboriosam fugit
          voluptatem iste.
        </p>
      </div>
    </section>
  );
}
