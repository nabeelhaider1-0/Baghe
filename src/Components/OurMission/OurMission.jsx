/* eslint-disable react/no-unescaped-entities */
import "./OurMission.css";
import mission from "../../assets/mission1.png";

const OurMission = () => {
  return (
    <>
      <div className="missionbg">
        <div className="row">
          <div
            className="missionLeft col-md-6"
            data-aos="fade-right"
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
          <div
            className="missionRight col-md-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h3>Our Mission</h3>
            <p>
              At Bagh-e, we're on a mission to revolutionize the agricultural
              landscape in developing nations through innovative solutions that
              empower farmers and drive sustainable growth. With a deep
              understanding of the challenges faced by farmers in accessing
              financing and optimizing their yields, we've developed a
              groundbreaking, tech-based platform that offers Shariah-compliant
              financial services and cutting-edge agricultural resources.
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
        </div>
      </div>
    </>
  );
};

export default OurMission;
