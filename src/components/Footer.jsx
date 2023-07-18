import React from 'react';
import './Footer.css'
import twitter from '../logos/twitter-256.png';
import instagram from '../logos/instagram-6-256.png';
import facebook from '../logos/facebook-3-256.png';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-top">
        <ul className="foot-list-vert">
          <li><a href="#" className="footer-link1">sign up for email</a></li>
          <li><a href="#" className="footer-link1">become a member</a></li>
          <li><a href="#" className="footer-link1">Dre's PickleBall Guide</a></li>
          <li><a href="#" className="footer-link1">send us feedback</a></li>
        </ul>

        <ul className="foot-list-vert">
          <li><a href="help.html" className="footer-link1">Contact</a></li>
          <li><a href="#" className="footer-link2">123-456-7890</a></li>
          <li><a href="#" className="footer-link2">Example@gmail.com</a></li>
          <li><a href="#" className="footer-link2">123 Example st, Charlotte, NC</a></li>
        </ul>

        <ul className="foot-list-vert">
          <li><a href="#" className="footer-link1">About Us</a></li>
          <li><a href="#" className="footer-link2">News</a></li>
          <li><a href="#" className="footer-link2">Careers</a></li>
          <li><a href="#" className="footer-link2">Investors</a></li>
        </ul>

        <ul className="foot-list-vert">
          <li><a href="https://www.facebook.com/" target="_blank" className="footer-link2"><img src={facebook} alt='facebook logo'/></a></li>
          <li><a href="https://twitter.com/" target="_blank" className="footer-link2"><img src={twitter} alt='twitter logo'/></a></li>
          <li><a href="https://www.instagram.com/" target="_blank" className="footer-link2"><img src={instagram} alt='instagram logo'/></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="fbl-left1">
            <i className="fa-solid fa-location-dot"></i>
            <p className="fblp">United States</p>
          </div>
          <div className="fbl-left2">
            <p className="copyright">&copy; 2023 Dre's Pickleball Paradise All Rights Reserved</p>
          </div>
        </div>
        <div className="footer-bottom-right">
          <div className="fbr-top">
            <ul className="fbr-list">
              <li><p>Terms of Sale </p></li>
              <li><p>Terms of Use</p></li>
              <li><p>DPBP Privacy Policy</p></li>
              <li><p>Your Privacy Choices</p></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
