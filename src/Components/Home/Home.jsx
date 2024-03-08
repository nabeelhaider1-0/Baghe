/* eslint-disable no-irregular-whitespace */
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Empowering from "../EmpoweringFarmers/Empowering";
import UnlockingAgri from "../Unlocking Agriculture/UnlockingAgri";
import TrustedCompanies from "../TrustedCompanies/TrustedCompanies";
import Transforming from "../TransformingCards/Transforming";
import Leadership from "../LeaderShip/Leadership";
import intropic from "../../assets/bagheintro.png";
import dashboard from "../../assets/Dashboard.png";
import home from "../../assets/Home.png";
import consultant from "../../assets/Consultant.png";
import testi from "../../assets/testmonialpic.jpg";
import UploadedContent from "../UploadedContent/UploadedContent";
import ContactUs from "../Contactus/ContactUs";
import LowerHeader from "../LowerHeader/LowerHeader";
import Footer from "../Footer/Footer";
import { useLayoutEffect } from "react";

const Home = () => {
  useLayoutEffect(() => {
    const aboutBgElement = document.getElementById("hometop");
    if (aboutBgElement) {
      aboutBgElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div id="hometop">
        <Navbar />
      </div>
      <div className="wrapperhome">
        <div className="homebg">
          <div className="homebgtext">
            <h1
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Empowering Farmers
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
      <Empowering />
      <UnlockingAgri />
      <TrustedCompanies />
      <Transforming />
      <Leadership />
      <div className="introductionbg">
        <div className="row">
          <div
            className="introductionLeft col-md-6"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <img src={intropic} alt="intropic" />
          </div>
          <div
            className="introductionRight col-md-6"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <h5>Introduction</h5>
            <h3>Bagh-e App</h3>
            <p>
              Our goal is to transform agricultural finance, fostering
              sustainable food systems, empowering farmers, and securing food
              for generations to come. Through pioneering solutions, strategic
              partnerships, and knowledge dissemination, we endeavor to reshape
              the sector, fostering resilience, efficiency, and environmental
              sustainability.
            </p>
          </div>
        </div>
      </div>
      <div className="featurebg">
        <div className="feature col-md-12">
          <h5 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Features
          </h5>
          <h3 data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            Enhancing Farmers Lives Simplifying Agricultural Work
          </h3>
          <p data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
            The Bag-e Farmer App is designed to streamline and enhance the
            agricultural experience for farmers. With a user-friendly interface
            and robust features, it offers numerous benefits to farmers:
          </p>
        </div>
      </div>
      <div
        className="featurecontainer"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <div className="row">
          <div className="col-md-4 featurewidth">
            <div className="card text-white featurecards">
              <div className="card-body featurebody">
                <img src={dashboard} alt="dashboard" />
                <h5 className="card-title featuretitle">
                  User Friendly Dashboard
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 featurewidth">
            <div className="card text-white featurecards">
              <div className="card-body featurebody">
                <img src={home} alt="home" />
                <h5 className="card-title featuretitle">
                  All the required features in one place
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 featurewidth">
            <div className="card text-white featurecards">
              <div className="card-body featurebody">
                <img src={consultant} alt="consultant" />
                <h5 className="card-title featuretitle">
                  Strong Communication
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testomonialsbg">
        <div className="testomonials col-md-12">
          <h5
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Testimonials
          </h5>
          <h3
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Hear from Our Satisfied Farmers
          </h3>
          <div
            className="testomonialcard"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className="testomonialcardimg">
              <img src={testi} alt="testi" />
            </div>
            <div className="testomonialcardname">
              <h5>Abdullah Saleem</h5>
            </div>
            <div className="testomonialcardpostion">
              <h6>Farmer</h6>
            </div>
            <div className="testomonialcardquote">
              <p>
                “The agriculture finance team understood my unique needs as a
                farmer, providing tailored solutions that helped me modernize
                and expand my business.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <UploadedContent />
      <ContactUs />
      <LowerHeader />
      <Footer />
    </>
  );
};

export default Home;
