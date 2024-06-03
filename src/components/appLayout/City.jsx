import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useContext, useEffect } from "react";
import { CitiesContext } from "../../../ContextApp";
import BackButton from "../general/BackButton";

function formatDate(timeSt) {
  const date = new Date(timeSt);
  const daysArr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const monthsArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${daysArr[date.getDay()]}, ${
    monthsArr[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
}

export default function City() {
  const { getCityData, isLoading, currCity } = useContext(CitiesContext);
  const paramObj = useParams();

  useEffect(
    function () {
      if (paramObj.id) getCityData(paramObj.id);
    },
    [paramObj.id]
  );

  return (
    <div className={styles.divCity}>
      {isLoading && <span className={styles.textLoading}>LOADING...</span>}
      {!isLoading && (
        <>
          <p className={styles.textCityName}>CITY NAME</p>
          <p className={styles.textActualCityName}>
            {currCity.emoji} {currCity.cityName}
          </p>
          <p className={styles.textYouWentTo}>
            YOU WENT TO {`${currCity.cityName}`.toUpperCase()} ON
          </p>
          <p className={styles.textDate}>{formatDate(currCity.date)}</p>
          <p className={styles.textYourNotes}>YOUR NOTES</p>
          <p className={styles.textActualNotes}>{currCity.notes}</p>
          <p className={styles.textLearnMore}>LEARN MORE</p>
          <p className={styles.wikipediaLink}>
            <a>
              <u>Check out {currCity.cityName} on Wikipedia &rarr;</u>
            </a>
          </p>
          <BackButton />
        </>
      )}
    </div>
  );
}
