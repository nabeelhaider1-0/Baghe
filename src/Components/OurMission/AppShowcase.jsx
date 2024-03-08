/* eslint-disable react/no-unescaped-entities */
import "./OurMission.css";
import appshowcase from "../../assets/appshowcase.png";

const AppShowcase = () => {
  return (
    <>
      <div className="showcasebg">
        <div className="row">
          <div
            className="missionLeft col-md-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img src={appshowcase} alt="appshowcase" className="showcaser" />
          </div>
          <div
            className="showcaserRight col-md-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h3>App Showcase</h3>
            <p>
              We employ a tech-enabled field force and leverage data to ensure
              transparency, efficiency, and scalability in comprehending
              farmers' needs and behaviors. Through this approach, we provide
              customized financial solutions, input services, advisory support,
              and facilitate market access for farmers. Our utilization of a
              data and technology-driven strategy allows us to seamlessly
              oversee farmers and monitor each stage of the farming process.
              This ensures a streamlined and effective system that caters
              specifically to the unique requirements of farmers.
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

export default AppShowcase;
