import React from "react";
import "../css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faInstagram,
  faFacebookF
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="ul-holder">
          <ul className="left-ul">
            <li className="footer-li">Shipping & Delivery</li>
            <li className="footer-li">Return & Exchange</li>
            <li className="footer-li">Terms & Conditions</li>
            <li className="footer-li">Privacy Policy</li>
          </ul>
          <ul className="right-ul">
            <li className="footer-li">FAQ</li>
            <li className="footer-li">Contact Us</li>
            <li className="footer-li">About Us</li>
            <li className="footer-li">Corporate Site</li>
          </ul>
        </div>
        <div className="social-icons-holder">
          {/* <FontAwesomeIcon color="#ffffff" icon="{['fab', 'youtube']}" /> */}
          <div
            className="faHolder"
            style={{
              borderRadius: "50%",
              padding: "10px 11.5px",
              backgroundColor: "#222"
            }}
          >
            <FontAwesomeIcon
              color="white"
              style={{ verticalAlign: "middle" }}
              icon={faYoutube}
            />
          </div>
          <div
            className="faHolder"
            style={{
              borderRadius: "50%",
              padding: "10px 13.5px",
              backgroundColor: "#222"
            }}
          >
            <FontAwesomeIcon
              color="white"
              style={{ verticalAlign: "middle" }}
              icon={faInstagram}
            />
          </div>
          <div
            className="faHolder"
            style={{
              borderRadius: "50%",
              padding: "10px 13.5px",
              // width: "50px",
              // height: "50px",
              backgroundColor: "#222"
            }}
          >
            <FontAwesomeIcon
              color="white"
              style={{ padding: "2.5px", verticalAlign: "middle" }}
              icon={faFacebookF}
            />
          </div>
        </div>
        <p className="copyright">
          Copyright 2019 Zion Market. All rights reserved.
        </p>
      </footer>
    );
  }
}
