import styles from "../appLayout/CitiesList.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CitiesContext } from "../../../ContextApp";

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  let formattedDateString = formattedDate.replace(",", "");
  const lastIndex = formattedDateString.lastIndexOf(" ");
  formattedDateString =
    formattedDateString.slice(0, lastIndex) +
    ", " +
    formattedDateString.slice(lastIndex + 1);

  return `(${formattedDateString})`;
}

export default function CitiesList() {
  const { citiesData, isLoading, currCity } = useContext(CitiesContext);
  // console.log(currCity);
  return (
    <>
      {isLoading && <img className={styles.imgSpinner} src="Spinner.gif" />}
      {!isLoading && (
        <ul className={styles.CitiesListUl}>
          {citiesData?.map((val, i) => (
            <li key={i}>
              <Link
                className={
                  currCity.id === val.id
                    ? styles.currCityClass
                    : styles.CitiesListLi
                }
                to={`${val.id}?lat=${val.position.lat}&lng=${val.position.lng}`}
              >
                <span className={styles.countryEmoji}>{val.emoji}</span>
                <h3 className={styles.cityName}>{val.cityName}</h3>
                <time className={styles.visitDate}>{formatDate(val.date)}</time>
                <button className={styles.closeButton}>&times;</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
