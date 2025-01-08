/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import baghilogo from "../../assets/baghelogo.png"; // Import the image
import "./Navbar.css";
import { Link } from "react-router-dom";

const LandingNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10; // You can adjust the scroll threshold as needed
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg "> */}

      <nav
        dir="rtl"
        className={`navbar navbar-expand-lg ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <Link className="navbar-brand" to="/">
          <img
            src={baghilogo}
            alt="Company logo"
            style={{ maxHeight: "50px" }} // Adjust the logo size as needed
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/">
                باغ-e کیا ہے
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/faq">
                باغ-e کے فوائد
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/contactUs">
                باغ-e مدد
              </Link>
            </li>
            <li className="nav-item d-flex justify-content-center align-items-center socialnav mx-3">
              <Link
                to="https://www.facebook.com/company/bagh-e/"
                target="blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to="https://www.twitter.com/company/bagh-e/" target="blank">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/company/bagh-e/"
                target="blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default LandingNav;
