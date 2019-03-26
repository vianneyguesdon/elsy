import React from "react";
import Person from "./components/Person.js"
import HeartRate from "./components/HeartRate.js"
import Weather from "./components/Weather.js"
import Water from "./components/Water.js"
const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000

class App extends React.Component {

  // Etape 1 : On crée le state avec la clef heart
  constructor(props) {
    super(props);
    this.state = {
      heart: 120,
      steps: 10000,
      temperature: 20,
      water: 1.5
    };
  }

  // Etape 2 : On crée la fonction qui change la valeur du state
  onChangeHeartRate = (value) => {
    console.log('App#onChangeHeartRate value', value);
    this.setState({heart: value})
  }
  onChangeSteps = (value) => {
    console.log('App#onChangeSteps value', value);
    this.setState({steps: value})
  }
  onChangeTemperature = (value) => {
    console.log('App#onChangeTemperature', value);
    this.setState({temperature: value})
  }
  shouldDrink = (result) => {
    if (this.state.temperature > 20) {
      result = this.state.water + 0.2 * (this.state.temperature - 20)
    }
    this.setState({water: result})
  }

  // Etape 3 : On envoie la valeur du state et la fonction dans les composants
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Person min={MIN_STEPS} max={MAX_STEPS} steps={this.state.steps} onChangeFn={this.onChangeSteps}/>
          <HeartRate min={MIN_HEART} max={MAX_HEART} heart={this.state.heart} onChangeFn={this.onChangeHeartRate}/>
          <Weather min={MIN_TEMPERATURE} max={MAX_TEMPERATURE} temperature={this.state.temperature} onChangeFn={this.onChangeTemperature}/>
          <Water water={this.state.water}/>
        </div>
      </div>
    )
  }
}

export default App;
