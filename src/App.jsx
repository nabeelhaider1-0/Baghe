import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import ServicesDetails from "./Components/Services/ServicesDetails";
import ForClients from "./Components/ForClients/ForClients";
import OurTeam from "./Components/OurTeam/OurTeam";
import Servicesmain from "./Components/Services/Servicesmain";
import CaseStudy from "./Components/CaseStudies/CaseStudy";
import ForClientsInner from "./Components/ForClients/ForClientsInner";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsofUse from "./Components/TermsofUse/TermsofUse";
import FAQ from "./Components/FAQ/FAQ";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Landing from "./Components/Landing/Landing";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Landing" element={<Landing />} />
        </Routes>
        <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Routes>
          <Route path="/allservices" element={<ServicesDetails />} />
        </Routes>
        <Routes>
          <Route path="/servicesDetails" element={<Servicesmain />} />
        </Routes>

        <Routes>
          <Route path="/casestudy" element={<CaseStudy />} />
        </Routes>
        <Routes>
          <Route path="/contactUs" element={<ForClients />} />
        </Routes>
        <Routes>
          <Route path="/clients" element={<ForClientsInner />} />
        </Routes>
        <Routes>
          <Route path="/team" element={<OurTeam />} />
        </Routes>

        <Routes>
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>

        <Routes>
          <Route path="/termsofuse" element={<TermsofUse />} />
        </Routes>

        <Routes>
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
