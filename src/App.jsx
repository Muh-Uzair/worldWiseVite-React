import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import LogIn from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CitiesList from "./components/appLayout/CitiesList";
import CountryList from "./components/appLayout/CountryList";
// import { useEffect, useState } from "react";
import City from "./components/appLayout/City";
import Form from "./components/appLayout/Form";
import { ContextApp } from "../ContextApp";
import { AuthnContext } from "../AuthnContext";
import SecuredRoutePg from "./pages/SecuredRoutePg";

export default function App() {
  return (
    <AuthnContext>
      <ContextApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="appLayout"
              element={
                <SecuredRoutePg>
                  <AppLayout />
                </SecuredRoutePg>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CitiesList />}></Route>

              <Route path="cities/:id" element={<City />} />

              <Route path="countries" element={<CountryList />} />

              <Route path="form" element={<Form />} />
            </Route>
            <Route path="Pricing" element={<Pricing />} />
            <Route path="Product" element={<Product />} />
            <Route path="LogIn" element={<LogIn />} />
          </Routes>
        </BrowserRouter>
      </ContextApp>
    </AuthnContext>
  );
}
