import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class FullButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = () => {
    this.props.action();
  };

  render() {
    const classList = this.props.classList;
    const icon = this.props.icon ? (
      <button onClick={this.handleClick} className={classList}>
        <FontAwesomeIcon
          color="white"
          style={{ verticalAlign: "middle", fontSize: "22px" }}
          icon={this.props.icon}
          size="2x"
        />
        &nbsp; &nbsp;
        {this.props.btnText}
      </button>
    ) : (
      <button onClick={this.handleClick} className={classList}>
        {this.props.btnText}
      </button>
    );
    return icon;
  }
}
export default FullButton;
