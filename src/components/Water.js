import React from "react";
import Icon from "./core/Icon"

class Water extends React.Component {
  render(){
    return(
      <div className="box col-md-3 col-6">
        <p>Water</p>
        <Icon 
          name={"local_drink"} 
          style={{
            fontSize:100, 
            color:"blue"}}
        />
        <p>Aujourd'hui tu dois boire</p>
        <h3>{this.props.calculateWaterFn}L d'eau !</h3>
      </div>
    )
  }
}

export default Water;