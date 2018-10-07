import React from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import FeaturedContainer from "../components/FeaturedContainer.jsx";
import ProductsContainer from "../components/ProductsContainer.jsx";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentCat: "" };
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.categories !== prevState.categories) {
  //     return { categories: nextProps.categories };
  //   }
  //   return null;
  // }
  componentDidMount() {
    window.scrollTo(0, 0);
    const currentLocation = this.props.router.params.cat;
    // TODO: make request to api for populating content.
    this.setState({ currentCat: currentLocation });
  }
  render() {
    return (
      <div className="Products-container">
        <SectionHeader title={"Featured " + this.state.currentCat} />
        <FeaturedContainer {...this.props} />
        <SectionHeader title={this.state.currentCat} />
        <ProductsContainer {...this.props} />
      </div>
    );
  }
}
export default Products;
