/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { useLayoutEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./FAQ.css";
import Footer from "../Footer/Footer";
import LowerHeader1 from "../LowerHeader/LowerHeader1";
import Accordion from "react-bootstrap/Accordion";
const FAQ = () => {
  useLayoutEffect(() => {
    const aboutBgElement = document.getElementById("faqtop");
    if (aboutBgElement) {
      aboutBgElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div id="faqtop">
        <Navbar />
      </div>
      <div className="wrapperfaq">
        <div className="faqbg">
          <div className="casetextbg">
            <h1
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              FAQ’s
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Have questions? Find answers to frequently asked questions about
              our services, platform, and how we're changing the face of
              agriculture.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid faq-accordion-wrapper text-center">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="px-4 faqQue">
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Questions Looks Here
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                some basic suggestions for starters below
              </p>
              <Accordion
                className="custom-accordion"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-once="true"
              >
                <Accordion.Item eventKey="0" className="item">
                  <Accordion.Header>1. What is Bagh-E?</Accordion.Header>
                  <Accordion.Body>
                    At Bagh-e, we're at the forefront of a transformative
                    initiative aimed at empowering farmers in developing nations
                    with agri-based economies. Our innovative approach
                    revolutionizes access to financing and boosts per-acre
                    yields.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="item">
                  <Accordion.Header>
                    2. How does Bagh-E provide optimal crop recommendations?
                  </Accordion.Header>
                  <Accordion.Body>
                    Bagh-E ensures optimal crop recommendations by employing a
                    state-of-the-art, technology-driven platform. Through
                    sophisticated algorithms and data analytics, we scrutinize
                    factors like soil quality, climate nuances, and market
                    dynamics. This meticulous analysis enables us to prescribe
                    the most fitting crops for individual farmers, aiming to
                    optimize yields and profitability. Our overarching objective
                    is to champion sustainable agricultural practices that align
                    precisely with the unique circumstances of each farmer.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="item">
                  <Accordion.Header>
                    {" "}
                    3.How can I access financing through Bagh-E?
                  </Accordion.Header>
                  <Accordion.Body>
                    Securing financing through Bagh-E is a simple and
                    streamlined process. Our user-friendly platform allows
                    farmers to apply for funding effortlessly, providing key
                    details about their farming operations and financial
                    requirements. After the application is submitted, our team
                    assesses it against predefined criteria. Upon approval, the
                    funds are promptly disbursed directly to the farmer.
                    Moreover, Bagh-E emphasizes the Shariah-compliance of all
                    financial transactions, ensuring farmers have ethical and
                    accessible financing options to bolster their
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="item">
                  <Accordion.Header>
                    {" "}
                    4. What is the Bagh-E Store?
                  </Accordion.Header>
                  <Accordion.Body>
                    The Bagh-E Store serves as a comprehensive marketplace
                    embedded within our platform, specifically crafted to grant
                    farmers easy access to top-notch agricultural inputs,
                    equipment, and crucial resources essential for maximizing
                    their farming endeavors. Whether it's seeds, fertilizers,
                    irrigation systems, or machinery, the Bagh-E Store features
                    a varied selection of products meticulously chosen to cater
                    to the distinct requirements of farmers. This integrated
                    platform enables farmers to seamlessly explore, purchase,
                    and receive vital supplies directly, streamlining the
                    procurement process and elevating overall efficiency in
                    agricultural practices. Reply
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="item">
                  <Accordion.Header>
                    5. What support does Bagh-E provide?
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <strong>Financial Aid:</strong> Bagh-E provides
                        accessible financing solutions tailored to farmers'
                        needs, facilitating funds for input purchases,
                        technological investments, and operational expansion.
                      </li>
                      <li>
                        <strong>Crop Guidance:</strong> Leveraging our
                        tech-driven platform, Bagh-E furnishes farmers with
                        optimal crop recommendations, considering factors like
                        soil quality, climate nuances, and market trends. This
                        empowers farmers to make informed choices for maximizing
                        yields.
                      </li>
                      <li>
                        <strong>Agricultural Supplies:</strong> The Bagh-E Store
                        boasts a diverse array of top-quality agricultural
                        inputs, including seeds, fertilizers, pesticides, and
                        equipment. This ensures farmers have ready access to
                        resources that elevate productivity.
                      </li>
                      <li>
                        <strong>Training and Education:</strong> Bagh-E equips
                        farmers with training and educational materials,
                        enhancing their agricultural practices, promoting
                        sustainability, and refining overall farming skills.
                      </li>
                      <li>
                        <strong>Technical Assistance:</strong> Our team of
                        experts stands ready to provide technical support and
                        guidance, addressing any challenges farmers may face and
                        aiding them in optimizing their farming operations.
                      </li>
                      <li>
                        <strong>Market Connectivity:</strong> Bagh-E acts as a
                        bridge, connecting farmers with markets and buyers,
                        opening avenues for them to explore new opportunities to
                        sell their produce and maximize profitability.
                      </li>
                    </ul>
                    <p>
                      Through this comprehensive range of support services,
                      Bagh-E empowers farmers to navigate challenges, embrace
                      sustainable practices, and achieve prosperity in their
                      agricultural pursuits.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className="item">
                  <Accordion.Header>6. How can I join Bagh-E?</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <strong>Sign Up:</strong> Visit our website or download
                        the Bagh-E mobile app to create an account. Fill in your
                        profile details, including your name, contact
                        information, and farm location.
                      </li>
                      <li>
                        <strong>Complete Profile:</strong> After signing up,
                        provide additional information about your farming
                        activities, such as the crops you cultivate, your farm
                        size, and your financial requirements.
                      </li>
                      <li>
                        <strong>Access Services:</strong> Explore Bagh-E's array
                        of services, ranging from financial assistance and crop
                        recommendations to agricultural inputs, training,
                        technical support, and market access.
                      </li>
                      <li>
                        <strong>Apply for Financing:</strong> If you need
                        financial support for your farming operations, submit a
                        financing application through the Bagh-E platform. Our
                        team will review your application and, upon approval,
                        disburse funds directly to you.
                      </li>
                      <li>
                        <strong>Utilize Resources:</strong> Take advantage of
                        the resources available on the Bagh-E platform to refine
                        your farming practices, boost productivity, and enhance
                        profitability.
                      </li>
                      <li>
                        <strong>Connect with Community:</strong> Engage with
                        fellow farmers and experts in the Bagh-E community.
                        Share knowledge, experiences, and best practices,
                        fostering collaboration and continuous learning.
                      </li>
                    </ul>
                    <p>
                      By following these steps, you'll seamlessly join Bagh-E
                      and gain access to the support you need for success in
                      your agricultural pursuits. Welcome to the Bagh-E family!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" className="item">
                  <Accordion.Header>
                    7.Can I use the financing provided by Bagh-E for any purpose
                    related to agriculture?
                  </Accordion.Header>
                  <Accordion.Body>
                    Bagh-E's financing options are flexible, allowing farmers to
                    address their specific needs and invest in initiatives that
                    contribute to the overall improvement and sustainability of
                    their agricultural operations.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7" className="item">
                  <Accordion.Header>
                    8. Is Bagh-E compliant with Shariah principles?
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      <li>
                        <strong>Prohibition of Riba (Interest):</strong> Bagh-E
                        strictly avoids any form of interest in financial
                        transactions, aligning with the Islamic prohibition of
                        riba.
                      </li>
                      <li>
                        <strong>Ethical Investment:</strong> Bagh-E ensures that
                        all investments and financing activities adhere to
                        Shariah principles, avoiding involvement in
                        non-compliant sectors such as gambling, alcohol, and
                        unethical practices.
                      </li>
                      <li>
                        <strong>Transparency and Fairness:</strong> Bagh-E
                        upholds transparency in all its operations and financial
                        dealings, guaranteeing fair and equitable treatment for
                        all stakeholders.
                      </li>
                    </ul>
                    <p>
                      By steadfastly following these principles, Bagh-E provides
                      farmers with access to Shariah-compliant financing
                      options, reflecting a commitment to ethical and moral
                      values within the realm of Islamic finance.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <LowerHeader1 />
      <Footer />
    </>
  );
};

export default FAQ;
