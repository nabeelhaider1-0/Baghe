import { useLayoutEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./CaseStudy.css";
import mission from "../../assets/mission1.png";
import LowerHeader1 from "../LowerHeader/LowerHeader1";
const CaseStudy = () => {
  useLayoutEffect(() => {
    const aboutBgElement = document.getElementById("servicetop");
    if (aboutBgElement) {
      aboutBgElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <div id="servicetop">
        <Navbar />
      </div>
      <div className="wrappercasestudy">
        <div className="casestudybg">
          <div className="casetextbg">
            <h1
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              CaseStudies
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
      <div className="missionbg">
        <div className="row">
          <div
            className="missionRight col-md-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h3 className="growing">
              Grow to Your Full Potential With DoFarm Leasing
            </h3>
            <p>
              Our mission is to revolutionize agricultural finance to support
              the development of sustainable food systems, empowering farmers,
              and ensuring food security for future generations. Through
              innovative financial solutions, strategic partnerships, and
              knowledge-sharing, we aim to transform the agricultural sector,
              making it more resilient, efficient, and environmentally
              sustainable.
            </p>
            <div className="triospan">
              <span className="accessibilty">Access to Capital</span>
              <span className="accessibilty">
                Knowledge and Capacity Building
              </span>
            </div>
            <div className="triospan">
              <span className="accessibilty">Risk Management</span>
              <span className="accessibilty">Technology Adoption</span>
              <span className="accessibilty">Privacy Advocacy</span>
            </div>
          </div>
          <div
            className="missionLeft col-md-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="image-container">
              <img src={mission} alt="mission" />
              <div className="text-overlay">
                <div className="row">
                  <div className="col-md-4 missionpicinner">
                    <h5>2,799</h5>
                    <p>Ranked on Inc. 10000 Fastest Growing Companies</p>
                  </div>
                  <div className="col-md-4 missionpicinner">
                    <h5>87%</h5>
                    <p>Ranked on Inc. 10000 Fastest Growing Companies</p>
                  </div>
                  <div className="col-md-4 missionpicinner">
                    <h5>#188</h5>
                    <p>Ranked on Inc. 10000 Fastest Growing Companies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapperpicbg">
        <div className="casepiclower"></div>
      </div>
      <LowerHeader1 />
      <Footer />
    </>
  );
};

export default CaseStudy;
