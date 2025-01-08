import "./LandingFooter.css";
import footerlogo from "../../assets/footerlogo.png";
import { Link } from "react-router-dom";

const LandingFooter = () => {
  return (
    <>
      <div className="landingFooterbg" dir="rtl">
        <div className="row">
          {/* Left Section: Logo and Links */}
          <div className="footerLeft col-12 col-md-6 d-flex flex-column">
            {/* Logo at the top */}
            <Link to="/">
              <img src={footerlogo} alt="footerlogo" className="footer-logo" />
            </Link>

            {/* Links inline and at the very bottom of the logo */}
            <div className="social-links d-flex mt-3 mb-0">
              <Link
                to="https://www.facebook.com/company/bagh-e/"
                target="blank"
                className="mx-2"
              >
                <i className="fa-brands fa-facebook text-white"></i>
              </Link>
              <Link
                to="https://www.twitter.com/company/bagh-e/"
                target="blank"
                className="mx-2"
              >
                <i className="fa-brands fa-x-twitter text-white"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/company/bagh-e/"
                target="blank"
                className="mx-2"
              >
                <i className="fa-brands fa-youtube text-white"></i>
              </Link>
            </div>
          </div>

          {/* Right Section: Contact Information */}
          <div className="footerRight col-12 col-md-6 d-flex flex-column justify-content-between align-items-start">
            <div className="contact-info text-white d-flex flex-column w-100">
              <h3>رابطہ کریں:</h3>

              {/* Contact items */}
              <div className="d-flex flex-column flex-md-row justify-content-between w-100">
                <p className="d-flex align-items-center mb-3">
                  <span className="mr-2">+123-456-7890</span>
                  <i className="fa fa-phone-alt ml-2"></i>
                </p>
                <p className="d-flex align-items-center mb-3">
                  <span className="mr-2">info@bagh-e.com</span>
                  <i className="fa fa-envelope ml-2"></i>
                </p>
                <p className="d-flex align-items-center mb-3">
                  <span className="mr-2">www.bagh-e.com</span>
                  <i className="fa fa-globe ml-2"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFooter;
