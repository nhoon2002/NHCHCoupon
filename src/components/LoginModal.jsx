import React from "react";
import { Link } from "react-router";
import FullButton from "./FullButton.jsx";
import "../css/LoginModal.css";
import { faGoogle, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
class LoginModal extends React.Component {
  componentDidMount() {}
  render() {
    const { modalStatus, modalToggle } = this.props;
    const showModalContent = modalStatus
      ? "LoginModal-container"
      : "LoginModal-container shrink";
    return (
      <div className={showModalContent}>
        <form className="input-wrapper">
          <input
            className="input-full rounded input-grey"
            type="email"
            placeholder="Email address"
          />
        </form>
        <form className="input-wrapper">
          <input
            className="input-full rounded input-grey"
            type="password"
            placeholder="Password"
          />
        </form>
        <FullButton classList="btn btn-full rounded btn-xen" btnText="Log in" />
        <div className="horiz-line">or</div>
        <FullButton
          icon={faFacebookSquare}
          classList="btn btn-full rounded btn-fb"
          btnText="Log in w/ Facebook"
          action={this.props.SigninFacebook}
        />
        <FullButton
          icon={faGoogle}
          classList="btn btn-full rounded btn-google"
          btnText="Log in w/ Google"
          action={this.props.SigninGoogle}
        />
        <div style={{ textAlign: "center" }}>
          <Link className="LoginModal-link" to="#">
            Don't have an account?
          </Link>
          <br />
          <Link className="LoginModal-link" to="#">
            Forgot your password?
          </Link>
        </div>

        <div
          className="close-modal"
          onClick={() => modalToggle(this.props.modalStatus)}
        >
          <span>&times;</span>
        </div>
      </div>
    );
  }
}
export default LoginModal;
