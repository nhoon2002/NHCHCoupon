import React from "react";
import FeatureCard from "./FeatureCard.jsx";
import "../css/FeaturedContainer.css";
class FeaturedContainer extends React.Component {
  render() {
    return (
      <div className="featured-carousel">
        <FeatureCard
          imgSrc="https://placehold.it/120x120"
          price="$3.99"
          perunit=" / ea"
          weight="9 oz"
          deliveryOnly="true"
          title="Product Title"
          description="cut off to dotdotdot when 3 lines over"
        />
        <FeatureCard
          imgSrc="https://placehold.it/120x120"
          price="$3.99"
          perunit=" / ea"
          weight="9 oz"
          deliveryOnly="true"
          title="Product Title"
          description="cut off to dotdotdot when 3 lines and over"
        />
        <FeatureCard
          imgSrc="https://placehold.it/120x120"
          price="$3.99"
          perunit=" / ea"
          weight="9 oz"
          deliveryOnly="true"
          title="Product Title"
          description="cut off to dotdotdot when 3 lines and over and over and over"
        />
        <FeatureCard
          imgSrc="https://placehold.it/120x120"
          price="$3.99"
          perunit=" / ea"
          weight="9 oz"
          deliveryOnly="true"
          title="Product Title"
          description="cut off to dotdotdot when 3 lines and overand over and over"
        />
        <FeatureCard
          imgSrc="https://placehold.it/120x120"
          price="$3.99"
          perunit=" / ea"
          weight="9 oz"
          deliveryOnly="true"
          title="Product Title"
          description="cut off to dotdotdot when 3 lines and over"
        />
        <FeatureCard
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
export default FeaturedContainer;
