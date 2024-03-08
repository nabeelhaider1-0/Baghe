/* eslint-disable no-irregular-whitespace */
import "./Empowering.css";
import insect from "../../assets/insect.svg";
import money from "../../assets/money.svg";
import vegitable from "../../assets/vegitable.svg";
import smartplants from "../../assets/smartplant.svg";
import growth from "../../assets/growth.svg";
import lifecycle from "../../assets/lifecycle.svg";
const Empowering = () => {
  return (
    <>
      <div className="empoweringbg">
        <div className="empowertitle">
          <h3 data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
            Empowering Farmers
          </h3>
          <p data-aos="slide-up" data-aos-duration="1500" data-aos-once="true">
            At Bagh-E, we are revolutionizing the way farmers in agri-based
            developing countries access financing and improve their per-acre
            yields. Our tech-based, Shariah-compliant platform offers a
            groundbreaking solution to address the challenges faced by farmers,
            ensuring sustainable agricultural practices and economic growth.
          </p>
        </div>

        <div className="minicardsline">
          <div className="container">
            <div className="row">
              <div
                className="col-md-2"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="card minicards">
                  <div className="card-body minicardsbody">
                    <img src={insect} alt="insect" />
                    <p className="card-text minicardstext">
                       Personalised best practices
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div className="card minicards">
                  <div className="card-body minicardsbody">
                    <img src={money} alt="money" />
                    <p className="card-text minicardstext">
                      Shariah compliant financing
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <div className="card minicards">
                  <div className="card-body minicardsbody">
                    <img src={vegitable} alt="vegitable" />
                    <p className="card-text minicardstext">
                      Access to consultants
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2"
                data-aos="fade-down"
                data-aos-duration="2500"
                data-aos-once="true"
              >
                <div className="card minicards">
                  <div className="card-body minicardsbody">
                    <img src={smartplants} alt="smartplants" />
                    <p className="card-text minicardstext">
                      Direct to Market Sale
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2"
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-once="true"
              >
                <div className="card minicards">
                  <div className="card-body minicardsbody">
                    <img src={growth} alt="growth" />
                    <p className="card-text minicardstext">Better Yields</p>
                  </div>
                </div>
              </div>
              <div
                className="col-md-2"
                data-aos="fade-down"
                data-aos-duration="3000"
                data-aos-once="true"
              >
                <div className="card minicards">
                  <div className="card-body minicardsbody">
                    <img src={lifecycle} alt="lifecycle" />
                    <p className="card-text minicardstext">
                      High quality inputs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Empowering;
