import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { URL } from "./api-related/apiRelated";

const CitiesContext = createContext();

ContextApp.propTypes = {
  children: PropTypes.object,
};

const initialState = {
  citiesData: [],
  isLoading: false,
  currCity: {},
  errorMsg: "",
};

function reducer(state, action) {
  switch (action.type) {
    case `loading/city`:
      return { ...state, isLoading: true };

    case "arrived/cityData":
      return { ...state, citiesData: action.payload, isLoading: false };

    case "rejected/error":
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };

    case "uploadCitySuccessful":
      return {
        ...state,
        isLoading: true,
        currCity: action.payload1,
        citiesData: [...state.citiesData, action.payload2],
      };

    case "deleteCitySuccess":
      return {
        ...state,
        isLoading: false,
        citiesData: state.citiesData.filter((val) => val.id !== action.payload),
      };
    case "loadCitySuccess":
      return {
        ...state,
        currCity: action.payload,
      };

    default:
      throw new Error(`Unknown action performed`);
  }
}

///////////////////////////////////////////////////////////////////////
function ContextApp({ children }) {
  const [{ citiesData, isLoading, currCity }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(
    function () {
      async function fetchCitiesData() {
        try {
          dispatch({ type: "loading/city" });
          const res = await fetch(`${URL}/cities`);
          const data = await res.json();
          dispatch({ type: "arrived/cityData", payload: data });
        } catch (err) {
          dispatch({
            type: "rejected/error",
            payload: "Unable to load cities",
          });
        }
      }
      fetchCitiesData();
    },
    [currCity]
  );

  async function uploadCityDetails(newCity) {
    try {
      dispatch({ type: "loading/city" });
      const res = await fetch(`${URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({
        type: "uploadCitySuccessful",
        payload1: data,
        payload2: newCity,
      });
    } catch (error) {
      dispatch({
        type: "rejected/error",
        payload: "Unable to upload city",
      });
    }
  }

  async function deleteCity(cityID) {
    try {
      dispatch({ type: "loading/city" });
      await fetch(`${URL}/cities/${cityID}`, {
        method: "DELETE",
      });

      dispatch({ type: "deleteCitySuccess", payload: cityID });
    } catch (error) {
      dispatch({
        type: "rejected/error",
        payload: "Unable to delete city",
      });
    }
  }

  async function getCityData(paramObjID) {
    if (paramObjID === currCity.id) return;
    try {
      dispatch({ type: "loading/city" });
      const res = await fetch(`${URL}/cities/${paramObjID}`);
      const data = await res.json();
      dispatch({ type: "loadCitySuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "rejected/error",
        payload: "Unable to load city information",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        citiesData,
        isLoading,
        currCity,
        uploadCityDetails,
        deleteCity,
        getCityData,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export { ContextApp, CitiesContext };
