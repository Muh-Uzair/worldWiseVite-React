import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { URL } from "./api-related/apiRelated";

const CitiesContext = createContext();

ContextApp.propTypes = {
  children: PropTypes.object,
};

function ContextApp({ children }) {
  const [citiesData, set_citiesData] = useState([]);
  const [isLoading, set_isLoading] = useState(false);
  const [currCity, setCurrCity] = useState({});

  useEffect(function () {
    async function fetchCitiesData() {
      try {
        set_isLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        set_citiesData(data);
      } catch (err) {
        console.log(err);
      } finally {
        set_isLoading(false);
      }
    }
    fetchCitiesData();
  }, []);

  async function uploadCityDetails(newCity) {
    try {
      const res = await fetch(`${URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      // set_citiesData((citiesData) => ({ ...citiesData, newCity }));
      // console.log(citiesData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        citiesData,
        isLoading,
        set_isLoading,
        currCity,
        setCurrCity,
        uploadCityDetails,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export { ContextApp, CitiesContext };
