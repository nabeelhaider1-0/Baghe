/* eslint-disable react/no-unescaped-entities */
import { useLayoutEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ForClients.css";
import LowerHeader1 from "../LowerHeader/LowerHeader1";
import ContactUs from "../Contactus/ContactUs";

const ForClients = () => {
  useLayoutEffect(() => {
    const aboutBgElement = document.getElementById("clientstop");
    if (aboutBgElement) {
      aboutBgElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <div id="clientstop">
        <Navbar />
      </div>
      <div className="wrapperclients1">
        <div className="clientsbg1">
          <div className="casetextbg">
            <h1
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              contact us
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Let's connect! Reach out to us for any inquiries or support needed
              to join our platform and empower your farming journey.
            </p>
          </div>
        </div>
      </div>
      <ContactUs />
      <LowerHeader1 />
      <Footer />
    </>
  );
};

export default ForClients;
