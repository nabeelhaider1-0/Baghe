import { useLayoutEffect } from "react";
import Empowering from "../EmpoweringFarmers/Empowering";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import OurMission from "../OurMission/OurMission";
import "./ServicesDetails.css";
import LowerHeader1 from "../LowerHeader/LowerHeader1";
import TrustedCompanies from "../TrustedCompanies/TrustedCompanies";

const ServicesDetails = () => {
  useLayoutEffect(() => {
    const aboutBgElement = document.getElementById("servicetop");
    if (aboutBgElement) {
      aboutBgElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <div id="servicetop">
        <Navbar />
      </div>
      <div className="wrapperserviceDetails1">
        <div className="servicedetailbg1">
          <div className="casetextbg">
            <h1
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Services
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Bagh-E is small aims to revolutionize agricultural practices and
              empower farmers in agri-based developing countries.
            </p>
          </div>
        </div>
      </div>
      <OurMission />
      <TrustedCompanies />
      <Empowering />
      <LowerHeader1 />
      <Footer />
    </>
  );
};

export default ServicesDetails;
