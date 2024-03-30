/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-irregular-whitespace */
import "./UnlockingAgri.css";
import plant from "../../assets/microgreen.png";
import { useEffect, useRef, useState } from "react";
const UnlockingAgri = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [isCollapsed1, setIsCollapsed1] = useState(true);

  const toggleCollapse1 = () => {
    setIsCollapsed1(!isCollapsed1);
  };
  const [isCollapsed2, setIsCollapsed2] = useState(true);

  const toggleCollapse2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };
  const [isCollapsed3, setIsCollapsed3] = useState(true);

  const toggleCollapse3 = () => {
    setIsCollapsed3(!isCollapsed3);
  };

  const [unlocking, setUnlocking] = useState(0);

  const UnlockingRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value based on how much of the element should be visible before triggering the animation
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      });
    }, options);

    if (UnlockingRef.current) {
      observer.observe(UnlockingRef.current);
    }

    return () => {
      if (UnlockingRef.current) {
        observer.unobserve(UnlockingRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      const animateValues = () => {
        const animateValue = (setter, end, duration) => {
          let start = 0;
          const range = end - start;
          const increment = end > start ? 1 : -1;
          const stepTime = Math.abs(Math.floor(duration / range));
          const timer = setInterval(() => {
            start += increment;
            setter(start);
            if (start === end) {
              clearInterval(timer);
            }
          }, stepTime);
        };
        animateValue(setUnlocking, 28, 2500);
      };

      animateValues();
    }
  }, [isIntersecting]);

  return (
    <>
      <div className="unlockingbg">
        <div className="row">
          <div
            className="unlockingLeft col-md-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="infoincard" ref={UnlockingRef}>
              <h5>{unlocking}%</h5>
              <p>Of the World is Employed in Agriculture</p>
            </div>
            <img src={plant} alt="plant" />
          </div>
          <div
            className="unlockingRight col-md-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {/* <p> Why choose us?</p> */}
            <h3>
              Unlocking <br /> Agricultural Potential.
            </h3>
            <div className="plusview flexipad">
              <div
                className="itemplus"
                onClick={toggleCollapse}
                role="button"
                aria-expanded={!isCollapsed}
                aria-controls="collapseExample"
              >
                <i className={`fas ${isCollapsed ? "fa-plus" : "fa-minus"} `} />
                <span className="plusviewText">
                  Flexible and Customizable Products
                </span>
              </div>
              <div
                className={`collapse ${isCollapsed ? "" : "show"}`}
                id="collapseExample"
              >
                <div className="itemplus ">
                  <span className="plusviewText">
                    Offering a wide range of products tailored to meet the
                    unique needs and challenges of our clients, ensuring
                    flexibility and customization at every step.
                  </span>
                </div>
              </div>
              <div
                className="itemplus"
                onClick={toggleCollapse1}
                role="button"
                aria-expanded={!isCollapsed}
                aria-controls="collapseExample"
              >
                <i className={`fas ${isCollapsed1 ? "fa-plus" : "fa-minus"}`} />
                <span className="plusviewText">Focused and Experienced</span>
              </div>
              <div
                className={`collapse ${isCollapsed1 ? "" : "show"}`}
                id="collapseExample"
              >
                <div className="itemplus">
                  <span className="plusviewText">
                    Leveraging years of industry experience to provide focused
                    and effective solutions, driving success through expertise
                    and insight.
                  </span>
                </div>
              </div>
              <div
                className="itemplus"
                onClick={toggleCollapse2}
                role="button"
                aria-expanded={!isCollapsed}
                aria-controls="collapseExample"
              >
                <i className={`fas ${isCollapsed2 ? "fa-plus" : "fa-minus"}`} />
                <span className="plusviewText">Clients Centric Services</span>
              </div>
              <div
                className={`collapse ${isCollapsed2 ? "" : "show"}`}
                id="collapseExample"
              >
                <div className="itemplus">
                  <span className="plusviewText">
                    Dedicated to putting our clients at the center of everything
                    we do, ensuring personalized service and unparalleled
                    support for their needs.
                  </span>
                </div>
              </div>
              <div
                className="itemplus"
                onClick={toggleCollapse3}
                role="button"
                aria-expanded={!isCollapsed}
                aria-controls="collapseExample"
              >
                <i className={`fas ${isCollapsed3 ? "fa-plus" : "fa-minus"}`} />
                <span className="plusviewText">Have a Best Solutions</span>
              </div>
              <div
                className={`collapse ${isCollapsed3 ? "" : "show"}`}
                id="collapseExample"
              >
                <div className="itemplus">
                  <span className="plusviewText">
                    Committed to excellence, we pride ourselves on delivering
                    best-in-class solutions that are innovative, efficient, and
                    effective.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnlockingAgri;
