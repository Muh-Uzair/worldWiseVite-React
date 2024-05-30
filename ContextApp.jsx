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
  return (
    <CitiesContext.Provider
      value={{
        citiesData,
        isLoading,
        currCity,
        setCurrCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export { ContextApp, CitiesContext };
