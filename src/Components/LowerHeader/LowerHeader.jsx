import "./LowerHeader.css";
import lowerbg1 from "../../assets/lowerheaderbg.png";

const LowerHeader = () => {
  return (
    <>
      <div className="lowerheaderbg">
        <img src={lowerbg1} alt="lowerbg1" className="blurybg" />
        <div className="text-overlay2">
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            Join us on this transformative journey as we empower farmers,
            advance agricultural practices, and drive economic prosperity.
            Together, we can create a sustainable future for agriculture.
          </p>
        </div>
      </div>
    </>
  );
};

export default LowerHeader;
