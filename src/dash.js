import React, { Component } from 'react';

export default class App extends Component {
  render() {
    var calculateRating = (num) => {
      if(num < 1.6) {
        return 5;
      } else if (num < 1.7) {
        return 4;
      } else if (num < 1.85) {
        return 3;
      } else if (num < 2) {
        return 2;
      } else {
        return 1;
      }
    }
    const totalFootprint = this.props.entry.reduce((accum, entry)=>{return accum+entry.Laundry+entry.Room+entry.Water+entry["Trash/Recycling"]+entry.Thermostat}, 0);
    const avgFootprint = (totalFootprint/this.props.room.stay).toFixed(2);
    const footprintPerArea = (avgFootprint/this.props.room.area).toFixed(2);
    const footprintRating = "*****".slice(0, calculateRating(footprintPerArea))
    return (
      <div className="scoreboard">
        <h2>Room Statistics</h2>
        <div className="roomStats">
          <div>
            <div>Carbon footprint during stay: <b>{totalFootprint}</b></div>
            <div>Footprint per day: <b>{avgFootprint}</b></div>
            <div>consumption/m2: <b>{footprintPerArea}</b></div>
          </div>
          <div>
            <div>guest count: <b>{this.props.room.guests}</b></div>
            <div>guest total stay: <b>{this.props.room.stay}</b></div>
            <div>Carbon footprint rating: <b>{footprintRating}</b></div>

          </div>
        </div>
      </div>
    )
  }
}
