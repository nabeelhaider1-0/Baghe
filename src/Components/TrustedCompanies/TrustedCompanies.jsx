import "./TrustedCompanies.css";
import trustedcompany from "../../assets/trustimage.svg";
import greenworld from "../../assets/greenworld.svg";
import roster from "../../assets/Roster.svg";
import oakhill from "../../assets/oakhill.svg";
const TrustedCompanies = () => {
  return (
    <>
      <div className="trsutedbg">
        <div className="row">
          <div
            className="col-md-4 trsutedLeft"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h3>Powering the Confidence of Industry Giants</h3>
            <div className="trustincard">
              <img src={trustedcompany} alt="trustedcompany" />
              <p>Bagh-e is part of the Harvard Innovation labs</p>
            </div>
          </div>
          <div
            className="col-md-2 trsutedRight mobiletop"
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <img src={greenworld} alt="greenworld" />
          </div>
          <div
            className="col-md-2 trsutedRight"
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <img src={roster} alt="roster" />
          </div>
          <div
            className="col-md-2 trsutedRight"
            data-aos="zoom-in"
            data-aos-duration="2500"
            data-aos-once="true"
          >
            <img src={oakhill} alt="oakhill" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustedCompanies;
