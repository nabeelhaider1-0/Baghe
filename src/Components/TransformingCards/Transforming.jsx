/* eslint-disable no-irregular-whitespace */
import "./Transforming.css";
import bulb from "../../assets/businessidea.svg";
import dollar from "../../assets/dollar.svg";
import usersetting from "../../assets/usersetting.svg";
import data from "../../assets/data.svg";
import access from "../../assets/access.svg";
import supplier from "../../assets/supplier.svg";
function Transforming() {
  return (
    <>
      <div className="transformingbg">
        <div className="row">
          <div
            className="transformingLeft col-md-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h4>Services</h4>
            <h3>
              Cultivating Innovation and Growth through Comprehensive
              Agricultural Solutions
            </h3>
            <p>
              At Bagh-e, we provide solutions tailored to meet the diverse needs
              of farmers and drive their success in the agricultural sector. Our
              services are designed to empower farmers with the necessary tools,
              resources, and support to enhance productivity, optimize yields,
              and achieve sustainable growth. 
            </p>
          </div>

          <div className="transformingRight col-md-7">
            <div className="container">
              <div className="row ">
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="card text-white mb-3 transformingcards">
                    <div className="card-body transformingbody">
                      <img src={bulb} alt="bulb" />
                      <h5 className="card-title transformingtitle">
                        Crop-Specific Funding
                      </h5>
                      <p className="card-text transformingtext">
                        Crop-specific funding provides targeted financial
                        support to farmers and agricultural stakeholders for the
                        development and cultivation of specific crops. This
                        specialized funding aims to address the unique needs and
                        requirements of various crops, such as high-value cash
                        crops.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div className="card text-white mb-3 transformingcards">
                    <div className="card-body transformingbody">
                      <img src={dollar} alt="dollar" />
                      <h5 className="card-title transformingtitle transformrightpadding">
                        Digital Financing
                      </h5>
                      <p className="card-text transformingtext">
                        Bagh-E offers digital financing solutions to farmers,
                        adhering to Shariah principles. Our technology-driven
                        platform enables farmers to access funds conveniently
                        and securely, eliminating the need for traditional
                        paperwork and lengthy approval processes.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <div className="card text-white mb-3 transformingcards">
                    <div className="card-body transformingbody">
                      <img src={usersetting} alt="usersetting" />
                      <h5 className="card-title transformingtitle">
                        Risk Management Solutions
                      </h5>
                      <p className="card-text transformingtext">
                        We understand the inherent risks involved in
                        agriculture. Bagh-E offers risk management solutions,
                        and weather-based risk assessment, to protect farmers
                        from unforeseen events that may impact their yields and
                        financial stability. 
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-once="true"
                >
                  <div className="card text-white mb-3 transformingcards">
                    <div className="card-body transformingbody">
                      <img src={data} alt="data" />
                      <h5 className="card-title transformingtitle">
                        Data Analytics and Insights
                      </h5>
                      <p className="card-text transformingtext">
                        Leveraging advanced data analytics and AI technology,
                        Bagh-E provides valuable insights to farmers. By
                        analyzing historical data, weather patterns, and market
                        trends, we help farmers make informed decisions
                        regarding crop selection, yield optimization, and market
                        timing. 
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div className="card text-white mb-3 transformingcards">
                    <div className="card-body transformingbody">
                      <img src={access} alt="access" />
                      <h5 className="card-title transformingtitle">
                        Access to Constraints
                      </h5>
                      <p className="card-text transformingtext">
                        By analyzing historical data, weather patterns, and
                        market trends, we help farmers make informed decisions
                        regarding crop selection, yield optimization, and market
                        timing. 
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-once="true"
                >
                  <div className="card text-white mb-3 transformingcards">
                    <div className="card-body transformingbody">
                      <img src={supplier} alt="supplier" />
                      <h5 className="card-title transformingtitle">
                        Data Analytics and Insights
                      </h5>
                      <p className="card-text transformingtext">
                        Bagh-E facilitates direct payments to approved
                        raw-material suppliers, ensuring transparency and
                        accountability. Farmers can conveniently make purchases
                        through our platform,complexity and increasing
                        efficiency in the procurement process. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transforming;
