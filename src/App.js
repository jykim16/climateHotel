import React, { Component } from 'react';
import './App.css';
import 'c3';
import C3Chart from 'react-c3js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      entry: [{Room: 7, Water: 10, 'Trash/Recycling':15 ,'Laundry': 300, 'Lighting': 130,'Thermostat': 10, date: '2017-11-10'},
        {Room: 7, Water: 30, 'Trash/Recycling':0, 'Laundry': 350,'Lighting': 130,'Thermostat': 100,  date: '2017-11-11'},
        {Room: 7, Water: 20, 'Trash/Recycling':50, 'Laundry': 120,'Lighting': 200,'Thermostat': 0,  date: '2017-11-12'},
      ],
      room: 7
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hotel Dashboard: Room #{this.state.room}</h1>
        </header>
        <C3Chart
          data={{
            json: this.state.entry,
            keys: {
                x: 'date', // it's possible to specify 'x' when category axis
                value: ['Laundry', "Lighting", "Thermostat", "Trash/Recycling", "Water"],
            },
            types: {
                Laundry: 'area',
                Lighting: 'area',
                Thermostat: 'area',
                "Trash/Recycling": 'area',
                Water: 'area'
            },
            groups: [['Laundry', 'Lighting', 'Thermostat', "Trash/Recycling", "Water"]]
          }}
          axis={{
            x: {
                type: 'timeseries',
                tick:  {
                    format: '%m-%d'
                }
            }
          }}
        />
        <button onClick={()=>{this.setState({entry: this.state.entry.concat([{Room: 7, Water: 0, 'Trash/Recycling':5, 'Laundry': 120,'Lighting': 200,'Thermostat': 0,  date: '2017-11-13'}])})}}>hi</button>
        <button onClick={()=>{this.setState({entry: this.state.entry.map()})}}>update</button>

      </div>
    );
  }
}

export default App;
