import { useLayoutEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Servicesmain.css";
// import TrustedCompanies from "../TrustedCompanies/TrustedCompanies";
import ContactUs from "../Contactus/ContactUs";
import LowerHeader from "../LowerHeader/LowerHeader";
import UnlockingAgri from "../Unlocking Agriculture/UnlockingAgri";
import LowerHeader2 from "../LowerHeader/LowerHeader2";
import Transforming from "../TransformingCards/Transforming";
import Empowering from "../EmpoweringFarmers/Empowering";
const Servicesmain = () => {
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
      <div className="wrapperserviceDetails">
        <div className="servicedetailbg">
          <div className="casetextbg">
            <h1
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Services Details
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Explore our comprehensive services designed for the modern farmer:
              from crop-funding to digital financing, every tool you need for
              success is here.
            </p>
          </div>
        </div>
      </div>
      <LowerHeader2 />
      <Transforming />
      <UnlockingAgri />
      {/* <TrustedCompanies /> */}
      <Empowering />
      <ContactUs />
      <LowerHeader />
      <Footer />
    </>
  );
};

export default Servicesmain;
