import React, { Component } from 'react';
import './App.css';
import 'c3';
import C3Chart from 'react-c3js';
import { Button, Icon } from 'semantic-ui-react'
import Dash from './dash.js'
class App extends Component {
  constructor() {
    super();
    this.state = {
      entry: [{id: 1, Room: 7, Water: 10, 'Trash/Recycling':15 ,'Laundry': 300, 'Lighting': 130,'Thermostat': 10, date: '2017-11-10'},
        {id: 2, Room: 7, Water: 30, 'Trash/Recycling':0, 'Laundry': 350,'Lighting': 130,'Thermostat': 100,  date: '2017-11-11'},
        {id: 3, Room: 7, Water: 20, 'Trash/Recycling':50, 'Laundry': 120,'Lighting': 200,'Thermostat': 0,  date: '2017-11-12'},
        {id: 3, Room: 7, Water: 20, 'Trash/Recycling':50, 'Laundry': 120,'Lighting': 200,'Thermostat': 0,  date: '2017-11-13'},
      ],
      room: {
        number: 7,
        area: 200,
        guests: 2,
        stay: 4,
      },
      interval: {
        'Water': 0,
        'Trash/Recycling':0 ,
        'Laundry': 0,
        'Lighting': 0,
        'Thermostat': 0,
        date: 2017-11-10
      }
    }
    this.addData = this.addData.bind(this);
    this.stopData = this.stopData.bind(this);
    this.addToLaundry = this.addToLaundry.bind(this);
    this.addToTrash = this.addToTrash.bind(this);
    this.addToWater = this.addToWater.bind(this);

    this.interval;
  }
  stopData() {
    clearInterval(this.interval)
    console.log(this.interval)
  }
  addToTrash(num) {
    var last = this.state.entry.slice(this.state.entry.length - 1)[0];
    last['Trash/Recycling'] += num;
    var entry = this.state.entry.slice(0, this.state.entry.length - 1).concat([last])
    console.log(last, entry)

    this.setState({entry})
  }
  addToWater(num) {
    var last = this.state.entry.slice(this.state.entry.length - 1)[0];
    last['Water'] += num;
    var entry = this.state.entry.slice(0, this.state.entry.length - 1).concat([last])
    console.log(last, entry)

    this.setState({entry})
  }
  addToLaundry(num) {
    var last = this.state.entry.slice(this.state.entry.length - 1)[0];
    last['Laundry'] += num;
    var entry = this.state.entry.slice(0, this.state.entry.length - 1).concat([last])
    console.log(last, entry)

    this.setState({entry})
  }
  addData() {
    let that = this;
    let newDateArray = [
      {id: 3, Room: 7, Water: 20, 'Trash/Recycling':50, 'Laundry': 120,'Lighting': 300,'Thermostat': 100,  date: '2017-11-14'},
      {id: 3, Room: 7, Water: 20, 'Trash/Recycling':55, 'Laundry': 300,'Lighting': 100,'Thermostat': 4,  date: '2017-11-15'},
      {id: 3, Room: 7, Water: 50, 'Trash/Recycling':70, 'Laundry': 120,'Lighting': 100,'Thermostat': 6,  date: '2017-11-16'},
      {id: 3, Room: 7, Water: 20, 'Trash/Recycling':60, 'Laundry': 620,'Lighting': 400,'Thermostat': 8,  date: '2017-11-17'},
      {id: 3, Room: 7, Water: 70, 'Trash/Recycling':30, 'Laundry': 120,'Lighting': 200,'Thermostat': 10,  date: '2017-11-18'},
      {id: 3, Room: 7, Water: 20, 'Trash/Recycling':20, 'Laundry': 620,'Lighting': 400,'Thermostat': 2,  date: '2017-11-19'},
      {id: 3, Room: 7, Water: 100, 'Trash/Recycling':100, 'Laundry': 120,'Lighting': 200,'Thermostat': 20,  date: '2017-11-20'},
      {id: 3, Room: 7, Water: 20, 'Trash/Recycling':10, 'Laundry': 120,'Lighting': 200,'Thermostat': 10,  date: '2017-11-21'},
      {id: 3, Room: 7, Water: 20, 'Trash/Recycling':45, 'Laundry': 120,'Lighting': 200,'Thermostat': 30,  date: '2017-11-22'},
      {id: 3, Room: 7, Water: 0, 'Trash/Recycling':20, 'Laundry': 20,'Lighting': 200,'Thermostat': 50,  date: '2017-11-23'},
      {id: 3, Room: 7, Water: 20, 'Trash/Recycling':0, 'Laundry': 120,'Lighting': 200,'Thermostat': 9,  date: '2017-11-24'},
      {id: 3, Room: 7, Water: 20, 'Trash/Recycling':90, 'Laundry': 120,'Lighting': 200,'Thermostat': 20,  date: '2017-11-25'},
      {id: 3, Room: 7, Water: 20, 'Trash/Recycling':80, 'Laundry': 0,'Lighting': 200,'Thermostat': 20,  date: '2017-11-26'},
      {id: 3, Room: 7, Water: 20, 'Trash/Recycling':20, 'Laundry': 120,'Lighting': 200,'Thermostat': 0,  date: '2017-11-27'},
      {id: 3, Room: 7, Water: 20, 'Trash/Recycling':40, 'Laundry': 120,'Lighting': 200,'Thermostat': 0,  date: '2017-11-28'},
      {id: 3, Room: 7, Water: 20, 'Trash/Recycling':20, 'Laundry': 0,'Lighting': 200,'Thermostat': 0,  date: '2017-11-29'},
      {id: 3, Room: 7, Water: 20, 'Trash/Recycling':50, 'Laundry': 120,'Lighting': 200,'Thermostat': 0,  date: '2017-11-30'},
    ]

    // let newState = this.state.entry.concat([newDate]);
    this.interval = setInterval(
      function(){
        let newDate = newDateArray.shift();
        let room = that.state.room;
        room['stay'] += 1
        that.setState({
          entry: that.state.entry.concat([newDate]),
          room
        })
      },
      2000
    )
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img className="logo" src="./hilton.jpg" alt="hilton"/>
          <div className="room">
            <div className="roomText">Room #{this.state.room.number}</div>
          </div>
          <div className="App-title">Make A Difference, See Your Impact At Hilton!</div>
        </header>
        <Dash
          entry={this.state.entry}
          room={this.state.room}
        />
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
              <Button color = 'teal' icon = 'magic' content='Laundry + 1 lb' onClick={()=>{this.addToLaundry(15)}}/>
              <Button color = 'orange'  icon ='lightbulb' content='Start Live' onClick={this.addData}/>
              <Button color = 'yellow' icon = 'thermometer' content='Thermostat +1 watt' />
              <Button color = 'brown' icon ='trash' content='Trash/Recycling +1 lb' onClick={()=>{this.addToTrash(10)}}/>
              <Button color = 'blue' icon ='s15' content='Water +1 gal' onClick={()=>{this.addToWater(10)}}/>
            </Button.Group>
        </div>
        <div>
            <Button.Group widths='5'>
              <Button color = 'teal' icon = 'magic' content='Laundry - 1 lb' onClick={()=>{this.addToLaundry(-15)}}/>
              <Button color = 'orange' icon ='lightbulb' content='Stop Live' onClick={this.stopData}/>
              <Button color = 'yellow' icon = 'thermometer' content='Thermostat -1 watt' />
              <Button color = 'brown' icon ='trash' content='Trash/Recycling -1 lb' onClick={()=>{this.addToTrash(-10)}}/>
              <Button color = 'blue' icon ='s15' content='Water -1 gal' onClick={()=>{this.addToWater(-10)}}/>
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
