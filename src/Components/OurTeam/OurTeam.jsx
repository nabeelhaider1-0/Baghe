import { useLayoutEffect } from "react";
import Navbar from "../Navbar/Navbar";
import farmer1 from "../../assets/farmer1.png";
import farmer2 from "../../assets/farmer2.png";
import hassannomani from "../../assets/hassannomani.png";
import Footer from "../Footer/Footer";
import LowerHeader1 from "../LowerHeader/LowerHeader1";
import ContactUs from "../Contactus/ContactUs";
import "./OurTeam.css";

const OurTeam = () => {
  useLayoutEffect(() => {
    const aboutBgElement = document.getElementById("teamtop");
    if (aboutBgElement) {
      aboutBgElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <div id="teamtop">
        <Navbar />
      </div>
      <div className="wrapperteam">
        <div className="teambg">
          <div className="casetextbg">
            <h1
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Our Team
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Meet the dedicated team behind our mission, a group of passionate
              professionals committed to empowering farmers and transforming
              agriculture.
            </p>
          </div>
        </div>
      </div>
      <div className="teamsbg">
        <h3 data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
          Our Team
        </h3>
        <div className="teamcardsstart">
          <div className="row">
            <div
              className="col-md-4 teamcard"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="card text-white mb-3 teamcards">
                <div className="card-body teamcardbody">
                  <img src={farmer1} alt="farmer1" />
                  <h5 className="card-title teamcardtitle">Mujtaba Khalid</h5>
                  <p className="card-text teamcardtext">Founder</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 teamcard"
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="card text-white mb-3 teamcards">
                <div className="card-body teamcardbody">
                  <img src={farmer2} alt="farmer1" />
                  <h5 className="card-title teamcardtitle">Ehtisham Hameed</h5>
                  <p className="card-text teamcardtext">Co-Founder</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 teamcard"
              data-aos="zoom-in"
              data-aos-duration="1800"
              data-aos-once="true"
            >
              <div className="card text-white mb-3 teamcards">
                <div className="card-body teamcardbody">
                  <img src={hassannomani} alt="farmer1" />
                  <h5 className="card-title teamcardtitle">Hassan Nomani</h5>
                  <p className="card-text teamcardtext">Director Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LowerHeader1 />
      <ContactUs />
      <Footer />
    </>
  );
};

export default OurTeam;
