import React from "react";
import "../css/FeatureCard.css";
const FeatureCard = props => (
  <div className="feature-card">
    <div className="feature-card-content">
      <span className="delivery-tag">Delivery Only</span>
      <img className="fullwidthImg" src={props.imgSrc} alt="placeholder" />
      <p className="bold-title">
        {props.price}
        <span className="price-unit-tag">{props.perunit}</span>
      </p>
      <span className="title-tag">{props.title}</span>
      <div className="description-tag-holder">
        <span className="description-tag">{props.description}</span>
      </div>
      <span className="weight-tag">{props.weight}</span>
      <img
        className="addtoCart"
        width="25"
        src="/assets/images/icon-addtocart.png"
        alt="tocart"
      />
    </div>
  </div>
);

export default FeatureCard;
