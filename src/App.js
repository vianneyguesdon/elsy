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

  // Etape 2 : On créer des fonctions qui change la valeur du state et qu'on l'on va envoyer dans les composants
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

  calculateWater = (temperature, steps, heart) => {
    var water = this.state.water;
    console.log("test")
    if (temperature > 20){
      water = water + (0.02*(temperature-20))
    }
    if (heart > 120){
      water = water + (0.0008*(heart-120))
    }
    if (steps > 10000){
      water = water + (0.00002*(steps-10000))
    }
    return Math.round(water * 100) / 100; // Pour arrondir 2 chiffres après la virgule
  }
  
  // Etape 3 : On envoie la valeur du state et la fonction dans les composants
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Person
            //envoie les constantes dans le composant
            min={MIN_STEPS} 
            max={MAX_STEPS}
            //envoie l'état inital dans le composant 
            steps={this.state.steps} 
            //envoie la fonction avec this.nomDeLaFonction dans le composant 
            onChangeFn={this.onChangeSteps}
          />
          <HeartRate 
            min={MIN_HEART} 
            max={MAX_HEART} 
            heart={this.state.heart} 
            onChangeFn={this.onChangeHeartRate}
          />
          <Weather 
            min={MIN_TEMPERATURE} 
            max={MAX_TEMPERATURE} 
            temperature={this.state.temperature} 
            onChangeFn={this.onChangeTemperature}
          />
          <Water 
            //envoie la fonction avec this.nomDeLaFonction dans le composant 
            calculateWaterFn={this.calculateWater(this.state.temperature, this.state.steps, this.state.heart)}
          />
        </div>
      </div>
    )
  }
}

export default App;
