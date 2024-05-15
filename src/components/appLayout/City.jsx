import { useParams, useSearchParams } from "react-router-dom";
import styles from "./City.module.css";

export default function City() {
  const paramObj = useParams();

  const [searchParams, set_searchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.divCity}>
      City : {paramObj.id}
      <p>{`lat=${lat} lng=${lng}`}</p>
      <button
        onClick={() => {
          set_searchParams({ lat: 32, lng: 69 });
        }}
      >
        change
      </button>
    </div>
  );
}
