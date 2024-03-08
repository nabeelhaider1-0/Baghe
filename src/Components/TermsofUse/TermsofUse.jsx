import {useLayoutEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import TopHeader from '../TopHeader/TopHeader';
import Footer from '../Footer/Footer';
import "./TermsofUse.css";

const TermsofUse = () => {
 
    useLayoutEffect(() => {
        const aboutBgElement = document.getElementById("termsofusetop");
        if (aboutBgElement) {
          aboutBgElement.scrollIntoView({ behavior: "smooth" });
        }
      }, []);
  return (
    <>
      <div id="termsofusetop">
        <Navbar />
      </div>
      <TopHeader title="Terms of Use"  subtitle="Get to know legal terms and policies"/>
      <div className='container-fluid termsofuse-content'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='px-4'>
          <h2>Terms of Use</h2>
          <p className="text-justify">Welcome to our website! We're excited to provide you with information and resources related to agricultural investment. By accessing and using this website, you agree to be bound by the following terms and conditions.</p>

            <h2>1. Use of the Website:</h2>
            <p className="text-justify"> You may use this website for personal, non-commercial purposes only.</p>

           
            <ul className="text-justify">
              <li>
              You agree not to use the website for any illegal or unauthorized purpose, including but not limited to.
              </li>
              <li>
              Infringing on any intellectual property rights of ours or others.
              </li>
              <li> Disrupting or damaging the website or its servers.</li>
             <li>Using the website to transmit any viruses or other harmful code.</li>
<li>Violating any applicable laws or regulations.</li>
            </ul>
            <h2>2. Content and Intellectual Property:</h2>
           
          
            <ul className="text-justify">
              <li>
              The content on this website, including text, graphics, logos, images, and software, is our property or the property of our licensors and is protected by copyright and other intellectual property laws.
              </li>
              <li>
              You may not copy, reproduce, modify, publish, distribute, transmit, display, or create derivative works from any content on this website without our prior written consent.
              </li>
             
            
            </ul>
          </div>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}
export default TermsofUse;
