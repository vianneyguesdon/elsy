import React from "react";

class Icon extends React.Component {
  render() {
    return(
      <div>
        <i className="material-icons" style={this.props.style}>{this.props.name}</i>
      </div>
    )
  }
}

export default Icon;