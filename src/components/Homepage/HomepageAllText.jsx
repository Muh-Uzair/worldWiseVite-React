import styles from "./Homepage.module.css";

export default function HomepageAllText() {
  return (
    <div>
      <h1 className={`${styles.heading} ${styles.heading_1}`}>
        You travel the world.
      </h1>
      <h1 className={`${styles.heading} ${styles.heading_2}`}>
        WorldWise keeps track of your adventures.
      </h1>
      <p className={styles.smallText}>
        A world map that tracks your footsteps into every city you can think of.
        Never forget your wonderful experiences, and show your friends how you
        have wandered the world.
      </p>
    </div>
  );
}
