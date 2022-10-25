import React from 'react';
import {AppLogo} from '../constant/imagepath_home';
import { Link } from 'react-router-dom';

const Footer = () => {
	
	return (
		<footer className="footer">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <img src={AppLogo} alt="logo" />
                  </div>
                  <div className="footer-about-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#" target="_blank"><i aria-hidden="true" className="fab fa-facebook-f" /> </a>
                        </li>
                        <li>
                          <a href="#" target="_blank"><i className="fab fa-twitter" /> </a>
                        </li>
                        <li>
                          <a href="#" target="_blank"><i className="fab fa-linkedin-in" /></a>
                        </li>
                        <li>
                          <a href="#" target="_blank"><i className="fab fa-instagram" /></a>
                        </li>
                        <li>
                          <a href="#" target="_blank"><i className="fab fa-dribbble" /> </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Mentee</h2>
                  <ul>
                    <li><Link to="/app/Mentee/search">Search Mentors</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/app/Mentee/booking">Booking</Link></li>
                    <li><Link to="/app/Mentee/dashboard-mentee">Mentee Dashboard</Link></li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Mentors</h2>
                  <ul>
                    <li><Link to="/app/Mentor/appointments">Appointments</Link></li>
                    <li><Link to="/app/Mentor/chat">Chat</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/app/Mentor/dashboard">Mentor Dashboard</Link></li>
                  </ul>
                </div>
                {/* /Footer Widget */}
              </div>
              <div className="col-lg-3 col-md-6">
                {/* Footer Widget */}
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Contact Us</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <span><i className="fas fa-map-marker-alt" /></span>
                      <p> 3556  Beech Street, San Francisco,<br /> California, CA 94108 </p>
                    </div>
                    <p>
                      <i className="fas fa-phone-alt" />
                      +1 315 369 5943
                    </p>
                    <p className="mb-0">
                      <i className="fas fa-envelope" />
                      mentoring@example.com
                    </p>
                  </div>
                </div>
                {/* /Footer Widget */}
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container-fluid">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-12 text-center">
                  <div className="copyright-text">
                    <p className="mb-0">© 2020 Mentoring. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
	);
};

export default Footer;