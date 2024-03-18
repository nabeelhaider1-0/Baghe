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
                    <h5 className="card-title teamcardtitle">Hassan Nomani</h5>
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
              We're a team filled with diversity and ambition, thrilled about
              our work. Our goal is to cultivate a culture that prioritizes
              individuals over procedures. We wholeheartedly endorse the concept
              of a Dream Team, where exceptional and admirable individuals
              collaborate to instigate revolutionary changes that positively
              impact humanity.
            </p>
            <Link to="/team">
              <button>More Team</button>
            </Link>
            {/* <i className="fas fa-arrow-right"></i> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
