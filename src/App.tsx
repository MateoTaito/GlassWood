import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import ServiciosPage from "./pages/ServiciosPage";
import PrivacyPage from "./pages/legal/PrivacyPage";
import TermsPage from "./pages/legal/TermsPage";
import CookiesPage from "./pages/legal/CookiesPage";
import CatalogPage from "./pages/CatalogPage";
import WorkWithUsPage from "./pages/WorkWithUsPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='team' element={<TeamPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='about-us' element={<AboutUsPage />} />
          <Route path='servicios/:serviceId' element={<ServiciosPage />} />
          <Route path='work-with-us' element={<WorkWithUsPage />} />
          <Route path='catalogo' element={<CatalogPage />} />
          <Route path='carrito' element={<CartPage />} />
          <Route path='privacy' element={<PrivacyPage />} />
          <Route path='terms' element={<TermsPage />} />
          <Route path='cookies' element={<CookiesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
