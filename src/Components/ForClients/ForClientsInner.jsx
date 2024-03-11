/* eslint-disable react/no-unescaped-entities */
import { useLayoutEffect } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ForClientsInner.css";
import LowerHeader1 from "../LowerHeader/LowerHeader1";
import book from "../../assets/book.svg";
import pcstar from "../../assets/pcstar.svg";
import dollarbag from "../../assets/dollarbag.svg";
import givetake from "../../assets/givetake.svg";

const ForClientsInner = () => {
  useLayoutEffect(() => {
    const aboutBgElement = document.getElementById("clientstop");
    if (aboutBgElement) {
      aboutBgElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <div id="clientstop">
        <Navbar />
      </div>
      <div className="wrapperclients">
        <div className="clientsbg">
          <div className="casetextbg">
            <h1
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              For clients
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Our partners in growth: Meet the farmers and agricultural
              businesses thriving with our digital financial solutions and
              support.
            </p>
          </div>
        </div>
      </div>
      <div className="empoweringbg">
        <div className="empowertitle">
          <h3
            className="innerclienthead"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Your Reliable Land Lender, At Your Service.
          </h3>
          <p data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            Experience seamless land lending services with our dedicated team,
            offering competitive rates and flexible terms tailored to your
            needs. With a commitment to transparency and integrity, we ensure
            hassle-free transactions, empowering you to achieve your property
            ownership goals with confidence. Trust in our reliability and
            expertise to guide you through the process, allowing you to unlock
            the possibilities of land ownership effortlessly.
          </p>
        </div>

        <div className="clientcardsline">
          <div className="container">
            <div className="row">
              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="card clientcards">
                  <div className="card-body clientcardsbody">
                    <img src={book} alt="book" />
                    <h1>Make a Payment</h1>
                    <p className="card-text clientcardstext">
                      Making your payment is simple and convenient. Whether
                      you're settling your monthly dues or making an extra
                      contribution towards your loan, we ensure a seamless
                      process.
                    </p>
                    {/* <button>Pay Now</button> */}
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="card clientcards">
                  <div className="card-body clientcardsbody">
                    <img src={pcstar} alt="pcstar" />
                    <h1>Client Portal</h1>
                    <p className="card-text clientcardstext">
                      <p className="card-text clientcardstext">
                        Welcome to your personalized Client Portal, your gateway
                        to seamless management of your accounts and
                        transactions. With our intuitive interface and advanced
                        features.
                      </p>
                    </p>
                    {/* <button>Pay Now</button> */}
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-once="true"
              >
                <div className="card clientcards">
                  <div className="card-body clientcardsbody">
                    <img src={dollarbag} alt="dolarbag" />
                    <h1>Loan Servicing</h1>
                    <p className="card-text clientcardstext">
                      Managing your loan has never been easier. Our
                      comprehensive loan servicing platform offers a range of
                      features designed to simplify your experience and empower
                      you to stay on top of your payments.
                    </p>
                    {/* <button>Pay Now</button> */}
                  </div>
                </div>
              </div>
              <div
                className="col-md-3"
                data-aos="zoom-in"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <div className="card clientcards">
                  <div className="card-body clientcardsbody">
                    <img src={givetake} alt="givetake" />
                    <h1>Refer a Client</h1>
                    <p className="card-text clientcardstext">
                      <p className="card-text clientcardstext">
                        Spread the word and reap the rewards! Our referral
                        program allows you to share the benefits of our services
                        with friends, family, and colleagues.day and make a
                        positive impact in your community.
                      </p>
                    </p>
                    {/* <button>Pay Now</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LowerHeader1 />
      <Footer />
    </>
  );
};

export default ForClientsInner;
