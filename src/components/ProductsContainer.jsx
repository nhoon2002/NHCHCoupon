import React from "react";
import ProductCard from "./ProductCard.jsx";
import "../css/ProductsContainer.css";
class ProductsContainer extends React.Component {
  render() {
    return (
      <div className="ProductsContainer-container">
        <ProductCard
          imgSrc="https://placehold.it/120x120"
          price="$3.99"
          perunit=" / ea"
          weight="9 oz"
          deliveryOnly="true"
          title="Product Title"
          description="cut off to dotdotdot when 3 lines over"
        />
        <ProductCard
          imgSrc="https://placehold.it/120x120"
          price="$3.99"
          perunit=" / ea"
          weight="9 oz"
          deliveryOnly="true"
          title="Product Title"
          description="cut off to dotdotdot when 3 lines and over"
        />
        <ProductCard
          imgSrc="https://placehold.it/120x120"
          price="$3.99"
          perunit=" / ea"
          weight="9 oz"
          deliveryOnly="true"
          title="Product Title"
          description="cut off to dotdotdot when 3 lines and over and over and over"
        />
        <ProductCard
          imgSrc="https://placehold.it/120x120"
          price="$3.99"
          perunit=" / ea"
          weight="9 oz"
          deliveryOnly="true"
          title="Product Title"
          description="cut off to dotdotdot when 3 lines and overand over and over"
        />
        <ProductCard
          imgSrc="https://placehold.it/120x120"
          price="$3.99"
          perunit=" / ea"
          weight="9 oz"
          deliveryOnly="true"
          title="Product Title"
          description="cut off to dotdotdot when 3 lines and over"
        />
        <ProductCard
          imgSrc="https://placehold.it/120x120"
          price="$3.99"
          perunit=" / ea"
          weight="9 oz"
          deliveryOnly="true"
          title="Product Title"
          description="cut off to dotdotdot when 3 lines and over and over and over"
        />
      </div>
    );
  }
}
export default ProductsContainer;
