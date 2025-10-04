import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import ServiciosPage from "./pages/ServiciosPage";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
