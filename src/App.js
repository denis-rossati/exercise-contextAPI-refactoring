import React from 'react';
import './App.css';
import carsContext from './context/useContext';
import Cars from './Cars';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    };
  }
  
  moveCar = (color, value) => {
    this.setState({
      [color]: value,
    });
  }

  render() {
    const moveCar = this.moveCar;
    return (
      <carsContext.Provider value={ { ...this.state, moveCar } }>
        <Cars />
      </carsContext.Provider>
    );
  }
}

export default App;
