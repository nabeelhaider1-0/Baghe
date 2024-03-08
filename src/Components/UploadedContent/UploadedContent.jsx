import "./UploadedContent.css";
import farmerbg1 from "../../assets/farmersbg1.png";
import farmerbg2 from "../../assets/farmersbg2.png";
import farmerbg3 from "../../assets/farmersbg3.png";
import farmerbg4 from "../../assets/farmersbg4.png";
import farmerbg5 from "../../assets/farmersbg5.png";
const UploadedContent = () => {
  return (
    <>
      <div className="uplaodedContentbg">
        <h5 data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          Uploaded Content
        </h5>
        <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Our social media content
        </h3>
        <div
          className="farmerspic"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <div className="row">
            <div className="col-md-4 farmerspics">
              <img src={farmerbg1} alt="farmerbg1" />
            </div>
            <div className="col-md-4 farmerspics">
              <img src={farmerbg2} alt="farmerbg2" />
            </div>
            <div className="col-md-4 farmerspics">
              <img src={farmerbg3} alt="farmerbg3" />
            </div>
            <div className="col-md-4 farmerspics">
              <img src={farmerbg4} alt="farmerbg4" />
            </div>
            <div className="col-md-4 farmerspics    ">
              <img src={farmerbg5} alt="farmerbg5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadedContent;
