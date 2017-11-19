import React, { Component } from 'react';
import './App.css';
import 'c3';
import C3Chart from 'react-c3js';
import { Button, Icon } from 'semantic-ui-react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      entry: [{Room: 7, Water: 10, 'Trash/Recycling':15 ,'Laundry': 300, 'Lighting': 130,'Thermostat': 10, date: '2017-11-10'},
        {Room: 7, Water: 30, 'Trash/Recycling':0, 'Laundry': 350,'Lighting': 130,'Thermostat': 100,  date: '2017-11-11'},
        {Room: 7, Water: 20, 'Trash/Recycling':50, 'Laundry': 120,'Lighting': 200,'Thermostat': 0,  date: '2017-11-12'},
      ],
      room: {
        number: 7,
        area: 200,
        guests: 2,
        stay: 3,
      }
    }
  }
  render() {
    var calculateRating = (num) => {
      if(num < 100) {
        return 5;
      } else if (num < 120) {
        return 4;
      } else if (num < 150) {
        return 3;
      } else if (num < 200) {
        return 2;
      } else {
        return 1;
      }
    }
    const totalFootprint = this.state.entry.reduce((accum, entry)=>{return accum+entry.Room+entry.Water+entry["Trash/Recycling"]+entry.Thermostat}, 0);
    const avgFootprint = (totalFootprint/this.state.room.stay).toFixed(2);
    const footprintPerArea = (avgFootprint/this.state.room.area).toFixed(2);
    const footprintRating = "*****".slice(0, calculateRating(footprintPerArea))
    return (
      <div className="App">
        <header className="App-header">
          <img className="logo" src="./hilton.jpg" alt="hilton"/>
          <div className="room">
            <div className="roomText">Room #{this.state.room.number}</div>
          </div>
          <div className="App-title">Make A Difference, See Your Impact At Hilton!</div>
        </header>
        <div className="scoreboard">
          <h2>Room Statistics</h2>
          <div className="roomStats">
            <div>
              <div>Carbon footprint during stay: {totalFootprint}</div>
              <div>Footprint per day: {avgFootprint}</div>
              <div>consumption/m2: {footprintPerArea}</div>
            </div>
            <div>
              <div>guest count: {this.state.room.guests}</div>
              <div>guest total stay: {this.state.room.stay}</div>
              <div>Carbon footprint rating: {footprintRating}</div>

            </div>
          </div>
        </div>
        <div className="graph">
          <C3Chart
            padding={{
              right: 20
            }}
            data={{
              json: this.state.entry.filter(entry=>entry.Room===this.state.room.number),
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
              },
              y: {
                label: {
                  text: 'CO2 Output',
                  position: 'outer-middle'
                }
              }
            }}
          />
        </div>

        <div>
        <br/>

            <Button.Group widths='5'>
              <Button icon = 'magic' content='Laundry + 1' />
              <Button icon ='lightbulb' content='Lighting +1' />
              <Button icon = 'thermometer' content='Thermostat +1' />
              <Button icon ='trash' content='Trash/Recycling +1'/>
              <Button icon ='s15' content='Water +1'/>
            </Button.Group>
        </div>
        <div>
            <Button.Group widths='5'>
              <Button icon = 'magic' content='Laundry - 1' />
              <Button icon ='lightbulb' content='Lighting - 1' />
              <Button icon = 'thermometer' content='Thermostat -1' />
              <Button icon ='trash' content='Trash/Recycling -1'/>
              <Button icon ='s15' content='Water -1'/>
            </Button.Group>
        </div>
        <div>
          <br/>
          <Button color='facebook'>
            <Icon name='facebook' /> Facebook
          </Button>
          <Button color='twitter'>
            <Icon name='twitter' /> Twitter
          </Button>
          <Button color='google plus'>
            <Icon name='google plus' /> Google Plus
          </Button>
          <Button color='instagram'>
            <Icon name='instagram' /> Instagram
          </Button>
        </div>

      </div>
    );
  }
}

export default App;
