import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerColumn">
          <h3 className='classify '>Classified</h3>
          <p>Aliquam adio euismond lectus</p>
          <div className="socialContainer">
            <h3 className="followUs">Follow us</h3>
            <ul className="socialIcons">
              <li><a href="#"><FaFacebookF /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaLinkedinIn /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
            </ul>
          </div>
        </div>
        <div className="footerColumn">
          <h3>Quick links</h3>
          <ul>
            <li><a href="#">Login panel</a></li>
            <li><a href="#">Shop Items</a></li>
            <li><a href="#">Profile page</a></li>
            <li><a href="#">Register Link</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footerColumn">
          <h3>Search products</h3>
          <ul>
            <li><a href="#">Default search</a></li>
            <li><a href="#">Search top bar</a></li>
            <li><a href="#">Map search</a></li>
            <li><a href="#">Product search</a></li>
            <li><a href="#">Article search</a></li>
          </ul>
        </div>
        <div className="footerColumn">
          <h3>Check posts</h3>
          <ul>
            <li><a href="#">United States</a></li>
            <li><a href="#">AUSTRIA</a></li>
            <li><a href="#">UAE Listing</a></li>
            <li><a href="#">Germany</a></li>
            <li><a href="#">Pakistan</a></li>
          </ul>
        </div>
        <div className="footerColumn">
          <h3>User Menu</h3>
          <ul>
            <li><a href="#">My profile</a></li>
            <li><a href="#">Login panel</a></li>
            <li><a href="#">Registration</a></li>
            <li><a href="#">Quick Answers</a></li>
            <li><a href="#">Vendors Dashboard</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


