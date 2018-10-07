import React, { Component } from "react";
import { Link } from "react-router";
import "../css/HeaderAlt.css";
import HeaderInput from "./HeaderInput.jsx";
import LoginModal from "./LoginModal.jsx";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { modalStatus: false, zipcode: "Zipcode" };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.modalStatus !== prevState.modalStatus) {
      return { modalStatus: nextProps.modalStatus };
    } else return null;
  }
  render() {
    return (
      <div className="Header-container">
        <div className="Top-bar">
          <Link to="/">
            <img
              className="zp-img zp-logo"
              src="/assets/images/logo.png"
              alt="logo"
            />
          </Link>
          <HeaderInput icon="/assets/images/icon-search.png" />
        </div>
        <div className="Mid-bar">
          <div className="Mid-img-holder">
            <div className="zp-icon-holder">
              <img
                className="zp-img zp-icon hamburger"
                src="/assets/images/icon-hamburger.png"
                alt="login"
                onClick={() => this.props.router.push("/category")}
              />
            </div>
            <div className="zp-icon-holder">
              <img
                className="zp-img zp-icon login"
                src="/assets/images/icon-login.png"
                alt="login"
                onClick={() => this.props.modalToggle(this.state.modalStatus)}
              />
            </div>
            <div className="zp-icon-holder">
              <img
                className="zp-img zp-icon zipcode"
                src="/assets/images/icon-zipcode.png"
                alt="login"
              />
            </div>
            <div className="zp-icon-holder">
              <img
                className="zp-img zp-icon cart"
                src="/assets/images/icon-cart.png"
                alt="login"
              />
            </div>
          </div>
          <div className="Mid-span-holder">
            <div className="zp-span-holder">
              <span className="zp-cattext">Category</span>
            </div>
            <div className="zp-span-holder">
              <span className="zp-cattext">Log in</span>
            </div>
            <div className="zp-span-holder">
              <span className="zp-cattext">{this.state.zipcode}</span>
            </div>
            <div className="zp-span-holder">
              <span className="zp-cattext">Cart</span>
            </div>
          </div>
        </div>
        <LoginModal {...this.props} />
      </div>
    );
  }
}
