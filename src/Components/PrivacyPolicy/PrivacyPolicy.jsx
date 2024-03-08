import  { useLayoutEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import TopHeader from '../TopHeader/TopHeader';
import "./PrivacyPolicy.css";


const PrivacyPolicy = () => {

    useLayoutEffect(() => {
        const aboutBgElement = document.getElementById("privacypolicytop");
        if (aboutBgElement) {
          aboutBgElement.scrollIntoView({ behavior: "smooth" });
        }
      }, []);
  return (
    <>
      <div id="privacypolicytop">
        <Navbar />
      </div>
      <TopHeader title="Privacy Policy"  subtitle="Get to know legal terms and policies"/>
      <div className='container-fluid policy-content'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='px-4'>
            <p className="text-justify">Welcome to our website! We're excited to provide you with information and resources related to agricultural investment. By accessing and using this website, you agree to be bound by the following terms and conditions.</p>
            <h2>1.Information We Collect:</h2>
            <p className="text-justify"> We may collect the following information from you</p>

           
            <ul className="text-justify">
              <li>
              Personal Information: This may include your name, email address, phone number, and mailing address, if you provide it to us by registering for an account, contacting us, or subscribing to our newsletter.
              </li>
              <li>
              Non-Personal Information: This may include information collected automatically through your use of the website, such as your IP address, browser type, operating system, referring URL, pages visited on our website, and the time spent on each page.
              </li>
             
            </ul>
            <h2>2. How We Use Your Information:</h2>
            <p className="text-justify">  We may use your information for the following purposes:</p>
           
          
            <ul className="text-justify">
              <li>
              To provide you with the information and resources you request.
              </li>
              <li>
               To personalize your experience on our website.
              </li>
              <li>
               
To send you newsletters and other promotional materials (with your consent).
              </li>
              <li>
To improve our website and services.</li>
<li>
To analyze how users interact with our website.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
