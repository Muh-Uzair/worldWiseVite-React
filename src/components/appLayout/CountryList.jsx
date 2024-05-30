import styles from "../appLayout/CountryList.module.css";
import { CitiesContext } from "../../../ContextApp";
import { useContext } from "react";

export default function CountryList() {
  const { citiesData, isLoading } = useContext(CitiesContext);
  const countries = citiesData.reduce((accumulator, currentValue) => {
    if (!accumulator.some((item) => item.country === currentValue.country)) {
      accumulator.push({
        emoji: currentValue.emoji,
        country: currentValue.country,
      });
    }
    return accumulator;
  }, []);

  return (
    <>
      {isLoading && <img className={styles.imgSpinner} src="Spinner.gif" />}
      {!isLoading && (
        <ul className={styles.countryList}>
          {countries?.map((val, i) => (
            <li key={i} className={styles.countryItem}>
              <div>
                <span>{val.emoji}</span>
                <h3>{val.country}</h3>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
