import React from "react";
import Icon from "./core/Icon";

import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

class HeartRate extends React.Component {
  render() {
    return (
      <div className="box col-md-3 col-6">
        <p>Heart Rate</p>
        <Icon name={"favorite"} style={{fontSize:100, color:"red"}}/>
        <Slider min={this.props.min} max={this.props.max} value={this.props.heart} onChange={(val) => this.props.onChangeFn(val)}/>
        <p>{this.props.heart} BPM</p>
      </div>
    )
  }
}

export default HeartRate;