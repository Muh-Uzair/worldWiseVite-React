import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CitiesList from "./components/appLayout/CitiesList";
import CountryList from "./components/appLayout/CountryList";
import City from "./components/appLayout/City";
import Form from "./components/appLayout/Form";
import { ContextApp } from "../ContextApp";
import { AuthnContext } from "../AuthnContext";
import SecuredRoutePg from "./pages/SecuredRoutePg";

import { Suspense, lazy } from "react";
import SuspenseCMP from "./components/Suspense/SuspenseCMP";

// import Homepage from "./pages/Homepage";
// import AppLayout from "./pages/AppLayout";
// import Pricing from "./pages/Pricing";
// import Product from "./pages/Product";
// import LogIn from "./pages/Login";
// import PageNotFoundCMP from "./components/PageNotFound/PageNotFoundCMP";

const Homepage = lazy(() => import("./pages/Homepage"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const LogIn = lazy(() => import("./pages/Login"));
const PageNotFoundCMP = lazy(() =>
  import("./components/PageNotFound/PageNotFoundCMP")
);

export default function App() {
  return (
    <AuthnContext>
      <ContextApp>
        <BrowserRouter>
          <Suspense fallback={<SuspenseCMP />}>
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
              <Route path="*" element={<PageNotFoundCMP />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ContextApp>
    </AuthnContext>
  );
}
