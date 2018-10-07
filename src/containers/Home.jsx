import React, { Component } from "react";
import HomeBanner from "../components/HomeBanner.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import FeaturedContainer from "../components/FeaturedContainer.jsx";
import CategoryContainer from "../components/CategoryContainer.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "https://placehold.it/1920x740?text=Main+Banner"
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    //Get categories
    this.props.modalToggle(true);
    this.props.getTest();
    // setTimeout(
    //   () =>
    //     this.props.notificationToggle({
    //       currentlyShowing: false,
    //       msg: "Welcome to eZion Market!",
    //       type: "success"
    //     }),
    //   2000
    // );
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
        <HomeBanner imgSrc={this.state.imgSrc} />
        <SectionHeader title="Featured Products" />
        <FeaturedContainer {...this.props} />
        <SectionHeader title="Category" />
        <CategoryContainer categories={items} router={this.props.router} />
      </div>
    );
  }
}
export default Home;
