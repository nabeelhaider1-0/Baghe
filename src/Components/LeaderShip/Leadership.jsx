/* eslint-disable react/no-unescaped-entities */
import "./Leadership.css";
import farmer1 from "../../assets/farmer1.png";
import farmer2 from "../../assets/hassannomani.png";
import { Link } from "react-router-dom";

const Leadership = () => {
  return (
    <>
      <div className="TeamExcutive">
        <div className="row">
          <div
            className="TeamExcutiveLeft col-md-6"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <div className="row ">
              <div className="col-md-6">
                <div className="card text-white mb-3 teamcards">
                  <div className="card-body teamcardbody">
                    <img src={farmer1} alt="farmer1" />
                    <h5 className="card-title teamcardtitle">Mujtaba Khalid</h5>
                    <p className="card-text teamcardtext">Co-Founder</p>
                    <Link
                      to="https://www.linkedin.com/in/mujtaba-khalid-60664620/"
                      target="blank"
                    >
                      <i className="fab fa-linkedin" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card text-white mb-3 teamcards">
                  <div className="card-body teamcardbody">
                    <img src={farmer2} alt="farmer2" />
                    <h5 className="card-title teamcardtitle">Hasan Nomani</h5>
                    <p className="card-text teamcardtext">Co-Founder</p>
                    <Link
                      to="https://www.linkedin.com/in/hasan-nomani-6a502194/"
                      target="blank"
                    >
                      <i className="fab fa-linkedin" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="TeamExcutiveRight col-md-6"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <h5>Our Team</h5>
            <h3>Meet Our Executive Leadership</h3>
            <p>
              Guiding Bagh-e is a team of leaders who merge innovation with
              adherence to Shariah principles, dedicated to uplifting
              economically disadvantaged farmers. With backgrounds in digital
              finance, agronomy, and Islamic economics, they’ve developed Bagh-e
              to offer digital credit and tailored farming insights, aiming to
              boost both financial access and crop yields. Their combined vision
              fosters a brighter, more sustainable future for farmers worldwide.
            </p>
            {/* <Link to="/team">
              <button>More Team</button>
            </Link> */}
            {/* <i className="fas fa-arrow-right"></i> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
