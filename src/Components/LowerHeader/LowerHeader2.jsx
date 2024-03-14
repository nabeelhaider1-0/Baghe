import "./LowerHeader.css";
import lowerbg2 from "../../assets/lowerheaderbg3.png";

const LowerHeader2 = () => {
  return (
    <>
      <div className="lowerheaderbg">
        <img src={lowerbg2} alt="lowerbg2 " />
        <div className="text-overlay1">
          <h1 data-aos="zoom-in" data-aos-duration="2000" data-aos-once="true">
            New Infrastructure and Equipment Leasing.
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
            className="comingsoon"
          >
            Coming Soon!
          </p>
        </div>
      </div>
    </>
  );
};

export default LowerHeader2;
