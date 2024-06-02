import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { URL } from "./api-related/apiRelated";

const CitiesContext = createContext();

ContextApp.propTypes = {
  children: PropTypes.object,
};

// const initialState = {
//   citiesData: [],
//   isLoading: false,
//   currCity: {},
// };

///////////////////////////////////////////////////////////////////////
function ContextApp({ children }) {
  const [citiesData, set_citiesData] = useState([]);
  const [isLoading, set_isLoading] = useState(false);
  const [currCity, setCurrCity] = useState({});

  useEffect(
    function () {
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
    },
    [currCity]
  );

  async function uploadCityDetails(newCity) {
    try {
      set_isLoading(true);
      const res = await fetch(`${URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setCurrCity(data);
      set_citiesData((citiesData) => [...citiesData, newCity]);
    } catch (error) {
      console.log("Error in uploading city");
    } finally {
      set_isLoading(false);
    }
  }

  async function deleteCity(cityID) {
    try {
      set_isLoading(true);
      await fetch(`${URL}/cities/${cityID}`, {
        method: "DELETE",
      });

      set_citiesData(citiesData.filter((val) => val.id !== cityID));
    } catch (error) {
      console.log("Error in deleting city");
    } finally {
      set_isLoading(false);
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
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export { ContextApp, CitiesContext };
