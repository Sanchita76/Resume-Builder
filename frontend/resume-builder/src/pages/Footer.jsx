import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub ,faLinkedin, faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faFile, faFolder } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div>
      {/* Your Landing Page Content */}

      <footer className="bg-gray-300 pt-8 pb-4 text-sm text-black-100 ml-3 mr-3 mb-3 rounded-t-lg" style={{fontFamily: "Trebuchet MS"}}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
            
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-gray-800" style={{fontSize:"1.2rem"}}>Build Your Resume</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">AI Resume Builder</a></li>
              <li><a href="#" className="hover:text-blue-500">Make Resume Online</a></li>
              <li><a href="#" className="hover:text-blue-500">Tips To Write Resume</a></li>
              <li><a href="#" className="hover:text-blue-500">Resume Builder App</a></li>
              <li><a href="#" className="hover:text-blue-500">Cover Letter Builder</a></li>
              <li><a href="#" className="hover:text-blue-500">Resume Formats</a></li>
              <li><a href="#" className="hover:text-blue-500">Resume Templates</a></li>
            </ul>
            {/* <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mehuli-biswas-817246334/" className="text-gray-600 hover:text-blue-500"><FontAwesomeIcon icon={faLinkedin} className="fa-lg" style={{color: "black"}} /></a>
              <a href="#"><FontAwesomeIcon icon={faFacebookF} className="text-gray-600 hover:text-blue-500" /></a>
              <a href="https://github.com/Sanchita76" className="text-gray-600 hover:text-blue-500"><FontAwesomeIcon icon={faGithub} className="fa-lg" /></a>
              <a href="#"><FontAwesomeIcon icon={faYoutube} className="text-gray-600 hover:text-blue-500" /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-gray-600 hover:text-blue-500" /></a>
            </div> */}
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-gray-800" style={{fontSize:"1.2rem"}}>Career Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">How To Write a Resume</a></li>
              <li><a href="#" className="hover:text-blue-500">Professional Resume Summary</a></li>
              <li><a href="#" className="hover:text-blue-500">Best Resume Format For You</a></li>
              <li><a href="#" className="hover:text-blue-500">How To List References on a Resume</a></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-gray-800" style={{fontSize:"1.2rem"}}>About Resume Builder</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500">Press</a></li>
              <li><a href="#" className="hover:text-blue-500">Accessibility</a></li>
              <li><a href="#" className="hover:text-blue-500">Do Not Sell My Info</a></li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-gray-800 flex items-center" style={{ fontSize: "1.2rem" }}>
                 <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                  Resume Builder
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">How To Write a Resume</a></li>
              <li><a href="#" className="hover:text-blue-500">Professional Resume Summary</a></li>
              <li><a href="#" className="hover:text-blue-500">Best Resume Format For You</a></li>
              <li><a href="#" className="hover:text-blue-500">How To List References on a Resume</a></li>
            </ul>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mehuli-biswas-817246334/" className="text-gray-600 hover:text-blue-500"><FontAwesomeIcon icon={faLinkedin} className="fa-lg" style={{color: "black"}} /></a>
              <a href="#"><FontAwesomeIcon icon={faFacebookF} className="text-gray-600 hover:text-blue-500" /></a>
              <a href="https://github.com/Sanchita76" className="text-gray-600 hover:text-blue-500"><FontAwesomeIcon icon={faGithub} className="fa-lg" /></a>
              <a href="#"><FontAwesomeIcon icon={faYoutube} className="text-gray-600 hover:text-blue-500" /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-gray-600 hover:text-blue-500" /></a>
            </div>
          </div>
        </div>
        <div className="text-center font-bold text-black-800 text-xs mt-8 mb-12" style={{fontSize: "1.0rem"}}>
          &copy; 2025, IntelliSense Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );

};

export default Footer;