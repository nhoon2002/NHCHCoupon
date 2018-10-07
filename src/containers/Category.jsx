import React, { Component } from "react";
import SectionHeader from "../components/SectionHeader.jsx";
import CategoryContainer from "../components/CategoryContainer.jsx";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "https://placehold.it/1920x740?text=Main+Banner",
      categories: []
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.modalToggle(true);
    //Get categories
    this.props.getCategories();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.categories !== prevState.categories) {
      return { categories: nextProps.categories };
    }
    return null;
  }
  render() {
    let items = this.state.categories;
    return (
      <div className="Home-content">
        <SectionHeader title="Category" />
        <CategoryContainer categories={items} />
      </div>
    );
  }
}
export default Category;
