import styles from "./ProductCmp.module.css";

export default function ProductCmpAllText() {
  return (
    <section className={styles.sectionImgText}>
      <img className={styles.imgMan} src="img-1.jpg" />

      <div className={styles.allAllText}>
        <h1 className={styles.h1AboutWorld}>About WorldWide.</h1>
        <p className={styles.smallText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
          dicta illum vero culpa cum quaerat architecto sapiente eius non
          soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
          perspiciatis?
        </p>
        <p className={styles.smallText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          doloribus libero sunt expedita ratione iusto, magni, id sapiente sequi
          officiis et.
        </p>
      </div>
    </section>
  );
}
