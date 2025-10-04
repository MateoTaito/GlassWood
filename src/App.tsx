import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='team' element={<TeamPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='about-us' element={<AboutUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
