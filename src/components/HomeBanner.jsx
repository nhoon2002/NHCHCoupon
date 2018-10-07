import React from "react";
import "../css/HomeBanner.css";
export default class HomeBanner extends React.Component {
  render() {
    return (
      <div className="homeBanner-container">
        {/* <div className="homeBanner-left-container">
          <img src="/assets/images/truck.png" alt="truck" />
        </div>
        <div className="homeBanner-right-container">
          <div className="paddedInside">
            <p className="right-title">{this.props.homeBanner.title}</p>
            <span className="right-subtitle">
              {this.props.homeBanner.subtitle1}
            </span>
            <br />
            <span className="right-subtitle">
              {this.props.homeBanner.subtitle2}
            </span>
          </div>
        </div> */}
        <img src={this.props.imgSrc} alt="mainbanner" />
      </div>
    );
  }
}
