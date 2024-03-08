import { useLayoutEffect } from "react";
import ContactUs from "../Contactus/ContactUs";
import Empowering from "../EmpoweringFarmers/Empowering";
import Footer from "../Footer/Footer";
import Leadership from "../LeaderShip/Leadership";
import LowerHeader from "../LowerHeader/LowerHeader";
import Navbar from "../Navbar/Navbar";
import AppShowcase from "../OurMission/AppShowcase";
import OurMission from "../OurMission/OurMission";
import Transforming from "../TransformingCards/Transforming";
import UploadedContent from "../UploadedContent/UploadedContent";
import "./AboutUs.css";

const AboutUs = () => {
  useLayoutEffect(() => {
    const aboutBgElement = document.getElementById("abouttop");
    if (aboutBgElement) {
      aboutBgElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <div id="abouttop">
        <Navbar />
      </div>
      <div className="wrapperabout">
        <div className="aboutbg">
          <div className="casetextbg">
            <h1
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              About Us
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Bagh-e is small aims to revolutionize agricultural practices and
              empower farmers in agri-based developing countries.
            </p>
          </div>
        </div>
      </div>
      <OurMission />
      <Empowering />
      <Transforming />
      <Leadership />
      <AppShowcase />
      <ContactUs />
      <UploadedContent />
      <LowerHeader />
      <Footer />
    </>
  );
};

export default AboutUs;
