/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import "./ContactUs.css";
import { useEffect, useRef, useState } from "react";

const ContactUs = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // Function to update form data as user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isMissingName, setIsMissingName] = useState(false);
  const [isMissingEmail, setIsMissingEmail] = useState(false);
  const [isMissingMessage, setIsMissingMessage] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Array to store missing fields
    let missingFields = [];

    // Check for missing required fields
    if (formData.name === "") {
      missingFields.push("Name");
      setIsMissingName(true);
    } else {
      setIsMissingName(false);
    }

    if (formData.email === "") {
      missingFields.push("Email");
      setIsMissingEmail(true);
    } else {
      setIsMissingEmail(false);
    }

    if (formData.message === "") {
      missingFields.push("Message");
      setIsMissingMessage(true);
    } else {
      setIsMissingMessage(false);
    }

    // If any required field is missing, prevent form submission
    if (missingFields.length > 0) {
      return;
    }

    // Clear form fields after successful submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Reset placeholder states
    setIsTyping(false);
    setIsTyping1(false);
    setIsTyping4(false);
    console.log(formData); // Log form data to console
    // You can perform additional actions here, like sending the data to a backend server
  };

  const [isTyping, setIsTyping] = useState(false);
  const [isTyping1, setIsTyping1] = useState(false);
  const [isTyping4, setIsTyping4] = useState(false);

  const handleFocus = () => {
    setIsTyping(true);
  };

  const handleBlur = (event) => {
    const { value } = event.target;
    if (value.trim() === "") {
      setIsTyping(false);
    }
  };
  const handleFocus1 = () => {
    setIsTyping1(true);
  };

  const handleBlur1 = (event) => {
    const { value } = event.target;
    if (value.trim() === "") {
      setIsTyping1(false);
    }
  };

  const handleFocus4 = () => {
    setIsTyping4(true);
  };

  const handleBlur4 = (event) => {
    const { value } = event.target;
    if (value.trim() === "") {
      setIsTyping4(false);
    }
  };
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const [namePlaceholderWidth, setNamePlaceholderWidth] = useState(0);
  const [emailPlaceholderWidth, setEmailPlaceholderWidth] = useState(0);
  const [messagePlaceholderWidth, setMessagePlaceholderWidth] = useState(0);

  // This function calculates the width of the placeholder text
  const calculatePlaceholderWidth = (
    inputRef,
    setPlaceholderWidth,
    placeholderText
  ) => {
    if (inputRef.current) {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.font = window.getComputedStyle(inputRef.current).font;
      const width = context.measureText(placeholderText).width;
      setPlaceholderWidth(width);
    }
  };

  // This hook ensures that the width of the placeholder text is recalculated whenever the placeholder changes
  useEffect(() => {
    calculatePlaceholderWidth(nameInputRef, setNamePlaceholderWidth, "Name");
    calculatePlaceholderWidth(emailInputRef, setEmailPlaceholderWidth, "Email");
    calculatePlaceholderWidth(
      messageInputRef,
      setMessagePlaceholderWidth,
      "Message"
    );
  }, ["Name", "Email", "Message"]);

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
                <form onSubmit={handleSubmit}>
                  <div
                    className={`input-wrapper ${
                      isMissingName && formData.name === "" ? "error" : ""
                    }`}
                  >
                    <input
                      ref={nameInputRef}
                      type="text"
                      className={`form-control my-3 ${
                        isMissingName && formData.name === ""
                          ? "error-input"
                          : ""
                      }`}
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />

                    {!isTyping && (
                      <span
                        className={`asterisk ${
                          isMissingName && formData.name === ""
                            ? "error-asterisk"
                            : ""
                        }`}
                        style={{ left: `${namePlaceholderWidth + 16}px` }}
                      >
                        *
                      </span>
                    )}
                  </div>
                  <div
                    className={`input-wrapper ${
                      isMissingEmail && formData.email === "" ? "error" : ""
                    }`}
                  >
                    <input
                      ref={emailInputRef}
                      type="email"
                      className={`form-control my-3 ${
                        isMissingEmail && formData.email === ""
                          ? "error-input"
                          : ""
                      }`}
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={handleFocus1}
                      onBlur={handleBlur1}
                    />

                    {!isTyping1 && (
                      <span
                        className={`asterisk ${
                          isMissingEmail && formData.email === ""
                            ? "error-asterisk"
                            : ""
                        }`}
                        style={{ left: `${emailPlaceholderWidth + 16}px` }}
                      >
                        *
                      </span>
                    )}
                  </div>
                  <div
                    className={`input-wrapper ${
                      isMissingMessage && formData.message === "" ? "error" : ""
                    }`}
                  >
                    <textarea
                      ref={messageInputRef}
                      className={`form-control ${
                        isMissingMessage && formData.message === ""
                          ? "error-input"
                          : ""
                      }`}
                      placeholder="Message"
                      rows={1}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={handleFocus4}
                      onBlur={handleBlur4}
                    />

                    {!isTyping4 && (
                      <span
                        className={`asterisk ${
                          isMissingMessage && formData.message === ""
                            ? "error-asterisk"
                            : ""
                        }`}
                        style={{ left: `${messagePlaceholderWidth + 16}px` }}
                      >
                        *
                      </span>
                    )}
                  </div>

                  <button>Send a Message</button>
                </form>
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
                <i className="fas fa-map-marker-alt"></i>
                Harvard Innovation Labs, Batten Hall, 125 Western Ave, Allston,
                MA 02134, United States
              </p>
              <p>
                <i className="fas fa-phone"></i>001-7814989799
              </p>
              <p>
                <i className="fas fa-envelope"></i>info@baghe.com
              </p>

              <div className="contactMap">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.0002942332735!2d-71.1240706!3d42.363833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377602b41553f%3A0xfdc59254062cc57a!2sHarvard%20Innovation%20Labs!5e0!3m2!1sen!2s!4v1710321285665!5m2!1sen!2s"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <p className="mt-4 mb-2">Follow Us:</p>
              <li className=" d-flex .justify-content-center align-items-center socialMedia">
                <Link
                  to="https://www.facebook.com/company/bagh-e/"
                  target="blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </Link>

                <Link
                  to="https://www.twitter.com/company/bagh-e/"
                  target="blank"
                >
                  <i className="fab fa-x-twitter"></i>
                </Link>

                <Link
                  to="https://www.linkedin.com/company/bagh-e/"
                  target="blank"
                >
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
