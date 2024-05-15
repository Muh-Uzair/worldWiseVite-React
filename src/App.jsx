import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import LogIn from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CitiesList from "./components/appLayout/CitiesList";
import CountryList from "./components/appLayout/CountryList";
import { URL } from "../api-related/apiRelated";
import { useEffect, useState } from "react";

export default function App() {
  const [citiesData, set_citiesData] = useState([]);
  const [isLoading, set_isLoading] = useState(false);

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
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="appLayout" element={<AppLayout />}>
          <Route
            index
            element={
              <CitiesList citiesData={citiesData} isLoading={isLoading} />
            }
          />
          <Route
            path="cities"
            element={
              <CitiesList citiesData={citiesData} isLoading={isLoading} />
            }
          />
          <Route
            path="countries"
            element={
              <CountryList citiesData={citiesData} isLoading={isLoading} />
            }
          />
        </Route>
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Product" element={<Product />} />
        <Route path="LogIn" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}
