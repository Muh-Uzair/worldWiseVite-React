import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useContext, useEffect } from "react";
import { URL } from "../../../api-related/apiRelated";
import { CitiesContext } from "../../../ContextApp";

// function formatDate(inputDate) {
//   const date = new Date(inputDate);
//   const options = { day: "2-digit", month: "long", year: "numeric" };
//   const formattedDate = date.toLocaleDateString("en-US", options);
//   let formattedDateString = formattedDate.replace(",", "");
//   const lastIndex = formattedDateString.lastIndexOf(" ");
//   formattedDateString =
//     formattedDateString.slice(0, lastIndex) +
//     ", " +
//     formattedDateString.slice(lastIndex + 1);

//   return `(${formattedDateString})`;
// }

function formatDate(dateString) {
  // Parse the input date string to a Date object
  const date = new Date(dateString);

  // Define the options for formatting the date
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  // Create a new Intl.DateTimeFormat object with the specified options
  const formatter = new Intl.DateTimeFormat("en-US", options);

  // Format the date and return the formatted string
  return formatter.format(date);
}

export default function City() {
  const { currCity, setCurrCity } = useContext(CitiesContext);
  const paramObj = useParams();

  // const [searchParams, set_searchParams] = useSearchParams();

  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  useEffect(
    function () {
      async function getCityData() {
        try {
          const res = await fetch(`${URL}/cities/${paramObj.id}`);
          const data = await res.json();
          setCurrCity(data);
        } catch (error) {
          console.log(error);
        }
      }

      if (paramObj.id) getCityData();
    },
    [paramObj.id, currCity]
  );

  return (
    <div className={styles.divCity}>
      <p>CITY NAME</p>
      <p>
        {currCity.emoji} {currCity.cityName}
      </p>
      <p>YOU WENT TO {currCity.cityName.toUpperCase()} ON</p>
      <p>{formatDate(currCity.date)}</p>
      <p>LEARN MORE</p>
      <p>
        <a>
          <u>Check out {currCity.cityName} on Wikipedia &rarr;</u>
        </a>
      </p>
      <button>&larr; BACK</button>
    </div>
  );
}
