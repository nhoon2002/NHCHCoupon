import React from "react";
import "../css/ProductCard.css";

const ProductCard = props => (
  <div className="halves">
    <div className="product-card">
      <div className="product-card-content">
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
  </div>
);

export default ProductCard;
