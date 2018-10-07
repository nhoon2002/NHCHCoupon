import React, { Component } from "react";
// import Header from "../components/Header.jsx";
import HeaderAlt from "../components/HeaderAlt.jsx";
import HeaderLogged from "../components/HeaderLogged.jsx";
import Footer from "../components/Footer.jsx";
import ModalOverlay from "../components/ModalOverlay.jsx";
import Notification from "../components/Notification.jsx";
import "../css/App.css";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStatus: false,
      notificationStatus: false,
      notificationType: "",
      notificationMsg: "",
      loginStatus: ""
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.loginStatus !== prevState.loginStatus) {
      return { loginStatus: nextProps.loginStatus };
    }
    if (nextProps.modalStatus !== prevState.modalStatus) {
      return { modalStatus: nextProps.modalStatus };
    }
    if (nextProps.notificationStatus !== prevState.notificationStatus) {
      return {
        notificationStatus: nextProps.notificationStatus,
        notificationMsg: nextProps.notificationMsg,
        notificationType: nextProps.notificationType
      };
    }

    return null;
  }
  render() {
    const Header = this.state.loginStatus ? (
      <HeaderLogged {...this.props} />
    ) : (
      <HeaderAlt {...this.props} />
    );
    return (
      <div className="Main">
        <Notification
          notification={this.state.notificationStatus}
          type={this.state.notificationType}
          msg={this.state.notificationMsg}
        />
        {/* <HeaderAlt {...this.props} /> */}
        {/* <HeaderLogged {...this.props} /> */}
        {Header}
        <ModalOverlay modal={this.state.modalStatus} />

        <div className="container Main-content">
          {React.cloneElement(this.props.children, this.props)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
