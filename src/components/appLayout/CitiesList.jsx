import PropTypes from "prop-types";
import styles from "../appLayout/appLayout.module.css";

CitiesList.propTypes = {
  citiesData: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

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

export default function CitiesList({ citiesData, isLoading }) {
  return (
    <>
      {isLoading && <img className={styles.imgSpinner} src="Spinner.gif" />}
      {!isLoading && (
        <ul className={styles.CitiesListUl}>
          {citiesData?.map((val, i) => (
            <li key={i}>
              <span className={styles.countryEmoji}>{val.emoji}</span>
              <h3 className={styles.cityName}>{val.cityName}</h3>
              <time className={styles.visitDate}>{formatDate(val.date)}</time>

              <button className={styles.closeButton}>&times;</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
