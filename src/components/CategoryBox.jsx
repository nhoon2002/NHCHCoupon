import React from "react";
import "../css/CategoryBox.css";
const CategoryBox = props => (
  <div
    className="CategoryBox-container"
    onClick={() => props.router.push(`/products/${props.categoryName}`)}
  >
    <div className="CategoryBox-header">{props.categoryName}</div>
    <div className="CategoryBox-imgHolder">
      <img
        src={props.categoryImg || "https://placehold.it/90x90"}
        alt="placeholder"
      />
    </div>
  </div>
);
export default CategoryBox;
