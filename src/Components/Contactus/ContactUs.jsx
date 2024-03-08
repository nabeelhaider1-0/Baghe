import { Link } from "react-router-dom";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div className="contactform">
        <div className="spacingContact">
          <div className="row">
            <div
              className="contactLeft col-md-6"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <h5>Get in Touch </h5>

              <div className="contactForm">
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="form-control my-3"
                  placeholder="Email"
                />
                <input className="form-control" placeholder="Message" />

                <button>Send a Message</button>
              </div>
            </div>
            <div
              className="contactRight col-md-6"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <h5>Visit Us </h5>
              <p>
                <i className="fas fa-map-marker-alt"></i> 99 Roving St., Big
                City, Pekanbaru, Indonesia
              </p>
              <p>
                <i className="fas fa-phone"></i> +123-234-1234
              </p>
              <p>
                <i className="fas fa-envelope"></i> hello@awesomesite.com
              </p>

              <div className="contactMap">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.546467503257!2d-0.1220941238727517!3d51.50318971101151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2s!4v1704625766095!5m2!1sen!2s"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <p className="mt-4 mb-2">Follow Us:</p>
              <li className=" d-flex .justify-content-center align-items-center socialMedia">
                <Link to="/contactUs">
                  <i className="fa-brands fa-facebook"></i>
                </Link>

                <Link to="/contactUs">
                  <i className="fab fa-x-twitter"></i>
                </Link>

                <Link to="/contactUs">
                  <i className="fab fa-linkedin"></i>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
