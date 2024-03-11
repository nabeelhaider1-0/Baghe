/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import baghilogo from "../../assets/baghelogo.png"; // Import the image
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        className={`navbar navbar-expand-lg ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <Link className="navbar-brand" to="/">
          <img
            src={baghilogo}
            alt="Company logo"
            // Update the style prop here
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
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Who Are We
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/aboutUS">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/team">
                    Our Team
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/clients">
                    Clients
                  </Link>
                </li>

                <li></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/servicesDetails">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/casestudy">
                    Case Studies
                  </Link>
                </li>
                <li></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">
                FAQ's
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">
                Contact Us
              </Link>
            </li>
            <li className="nav-item d-flex .justify-content-center align-items-center socialnav">
              <Link to="/contactUs">
                <i className="fa-brands fa-facebook"></i>
              </Link>

              <Link to="/contactUs">
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

export default Navbar;
