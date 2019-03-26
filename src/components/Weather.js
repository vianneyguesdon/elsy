import React from "react";
import Icon from "./core/Icon";

import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

class Weather extends React.Component {
  render() {
    return (
      <div className="box col-md-3 col-6">
        <p>Weather</p>
        <Icon name={"wb_sunny"} style={{
          fontSize:100, 
          color:"yellow"
        }}/>
        <Slider min={this.props.min} max={this.props.max} value={this.props.temperature} onChange={(val) => this.props.onChangeFn(val)}/>
        <p>{this.props.temperature}°C</p>
      </div>
    )
  }
}

export default Weather;