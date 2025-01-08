/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import "./Landing.css";

import intropic from "../../assets/bg-home1.png";

// import ContactUs from "../Contactus/ContactUs";
// import Footer from "../Footer/Footer";
import { useLayoutEffect } from "react";
import LandingNav from "../Navbar/LandingNav";
import LandingContact from "../Contactus/LandingContact";
import LandingFooter from "../Footer/LandingFooter";

const Landing = () => {
  useLayoutEffect(() => {
    const aboutBgElement = document.getElementById("hometop");
    if (aboutBgElement) {
      aboutBgElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div id="hometop">
        <LandingNav />
      </div>
      <div className="wrapperhome">
        <div className="homebgLanding">
          <div className="homebgtext">
            <h1
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              کسانوں کے لیے جدید ڈیجیٹل حل
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
            >
               آپ کی فصلوں کی پیداوار اور مالی معاملات کو بہتر بنانے کے لیے
              ڈیجیٹل کریڈٹ اور زراعتی مشورے۔
            </p>
          </div>
        </div>
      </div>
      <div className="introductionbg">
        <div className="row">
          <div
            className="introductionUrduRight col-md-6"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-once="true"
            dir="rtl" /* Enables right-to-left text direction */
          >
            <h3>باغ-e کیا ہے؟</h3>
            <p>
              باغِ ایک ٹیکنالوجی پر مبنی، شریعت کے مطابق پلیٹ فارم ہے جو زراعت
              پر مبنی ترقی پذیر ممالک میں کسانوں کو بااختیار بنانے کا مقصد رکھتا
              ہے۔ ہم جدید مالیاتی حل، فصل کی پیداوار کے لیے رہنمائی، اور براہ
              راست فروخت کے روابط فراہم کرتے ہیں۔
            </p>
            <h3>باغ-e کے فوائد:</h3>
            <div className="buttons-container">
              <button className="btn urdu-btn">فوری قرض کی سہولت</button>
              <button className="btn urdu-btn">
                فصل کی پیداوار بڑھانے کے لیے مشورے
              </button>
            </div>
            <div className="buttons-container">
              <button className="btn urdu-btn">زراعت کی جدید تکنیکیں</button>

              <button className="btn urdu-btn">
                کسانوں کے کامیاب تجربات کی کہانیاں
              </button>
            </div>
          </div>

          <div
            className="introductionUrduLeft col-md-6"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <div className="image-container">
              <img src={intropic} alt="intropic" />
            </div>{" "}
          </div>
        </div>
      </div>

      <LandingContact />
      <LandingFooter />
    </>
  );
};

export default Landing;
