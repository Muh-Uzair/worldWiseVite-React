import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import LogIn from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CitiesList from "./components/appLayout/CitiesList";
import CountryList from "./components/appLayout/CountryList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="appLayout" element={<AppLayout />}>
          <Route index element={<CitiesList />} />
          <Route path="cities" element={<CitiesList />} />
          <Route path="countries" element={<CountryList />} />
        </Route>
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Product" element={<Product />} />
        <Route path="LogIn" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}
