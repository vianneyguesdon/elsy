import React from "react";
import Icon from "./core/Icon";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Person extends React.Component {
  render() {
    return(
      <div className="box col-md-3 col-6">
        <p>Number of steps</p>
        <Icon name={"directions_walk"} style={{
          fontSize: 100, 
          color:"black"
        }}/>
        <Slider min={this.props.min} max={this.props.max} value={this.props.steps} onChange={(val) => this.props.onChangeFn(val)}/>
        <p>{this.props.steps} steps</p>
      </div>
    )
  }
}

export default Person;