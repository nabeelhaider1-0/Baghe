import "./Footer.css";
import footerlogo from "../../assets/footerlogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footerbg">
        <div className="row">
          <div className="footerLeft col-md-2">
            <Link to="/">
              <img src={footerlogo} alt="footerlogo" />
            </Link>
          </div>
          <div className="col-md-1 footerRight greeni">Quick Links</div>
          <div className="col-md-1 footerRight foothov">
            <Link to="/aboutUs">About Us</Link>
          </div>
          <div className="col-md-1 footerRight foothov">
            <Link to="/team">Our Team</Link>
          </div>
          <div className="col-md-1 footerRight foothov">
            <Link to="/servicesDetails">Services</Link>
          </div>
          <div className="col-md-1 footerRight foothov">
            <Link to="/clients">Clients</Link>
          </div>
          <div className="col-md-1 footerRight foothov footmore">
            <Link to="/termsofuse">Terms & Conditions</Link>
          </div>
          <div className="col-md-1 footerRight foothov footmore1">
            <Link to="/privacypolicy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
