/* eslint-disable react-hooks/exhaustive-deps */
import "./LandingContact.css";
import { useState } from "react";
import Loader from "../../assets/loader.gif";
import intropic from "../../assets/bg-home3.jpg";

const LandingContact = () => {
  // State variables to store form data and validation
  const [formData, setFormData] = useState({
    name: "",
    area: "",
    crop: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Function to update form data as user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error for the specific field
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Validate required fields
    if (!formData.name.trim()) validationErrors.name = "نام درج کریں۔";
    if (!formData.area.trim()) validationErrors.area = "علاقہ درج کریں۔";
    if (!formData.crop.trim()) validationErrors.crop = "فصل کی قسم درج کریں۔";
    if (!formData.phone.trim() || !/^\d{10,15}$/.test(formData.phone)) {
      validationErrors.phone = "فون نمبر 10-15 اعداد میں ہونا چاہیے۔";
    }
    if (!formData.message.trim())
      validationErrors.message = "پیغام کا خانہ خالی نہیں ہوسکتا۔";

    // If errors exist, set them and prevent form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Show loader and simulate form submission
    setIsLoading(true);
    setTimeout(() => {
      console.log("Form Submitted:", formData);

      // Reset form
      setFormData({
        name: "",
        area: "",
        crop: "",
        phone: "",
        message: "",
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="contactform">
      <div className={`spacingContact ${isLoading ? "loading" : ""}`}>
        {isLoading && <img src={Loader} className="loader" alt="Loading..." />}
        <div className="row">
          <h3>ہمیں اپنی تفصیلات دیں تاکہ ہم آپ کی مدد کر سکیں</h3>
          <div
            className="introductionUrduLeft col-md-6"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <div className="image-container">
              <img src={intropic} alt="intropic" />
            </div>
          </div>
          <div
            className="contactUrduLeft col-md-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="contactForm" dir="rtl">
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="input-wrapper">
                  <input
                    type="text"
                    className={`form-control my-3 ${
                      errors.name ? "error-input" : ""
                    }`}
                    placeholder="نام"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="error-text">{errors.name}</span>
                  )}
                </div>

                {/* Area Field */}
                <div className="input-wrapper">
                  <input
                    type="text"
                    className={`form-control my-3 ${
                      errors.area ? "error-input" : ""
                    }`}
                    placeholder="علاقہ"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                  />
                  {errors.area && (
                    <span className="error-text">{errors.area}</span>
                  )}
                </div>

                {/* Crop Type Field */}
                <div className="input-wrapper">
                  <input
                    type="text"
                    className={`form-control my-3 ${
                      errors.crop ? "error-input" : ""
                    }`}
                    placeholder="فصل کی قسم"
                    name="crop"
                    value={formData.crop}
                    onChange={handleChange}
                  />
                  {errors.crop && (
                    <span className="error-text">{errors.crop}</span>
                  )}
                </div>

                {/* Phone Number Field */}
                <div className="input-wrapper">
                  <input
                    type="text"
                    className={`form-control my-3 ${
                      errors.phone ? "error-input" : ""
                    }`}
                    placeholder="فون نمبر"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <span className="error-text">{errors.phone}</span>
                  )}
                </div>
                <button type="submit" disabled={isLoading}>
                  پیغام بھیجیں
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContact;
