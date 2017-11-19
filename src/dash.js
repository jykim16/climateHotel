import React, { Component } from 'react';

export default class App extends Component {
  render() {
    var calculateRating = (num) => {
      if(num < .45) {
        return 5;
      } else if (num < .55) {
        return 4;
      } else if (num < .65) {
        return 3;
      } else if (num < .75) {
        return 2;
      } else {
        return 1;
      }
    }
    const totalFootprint = this.props.entry.reduce((accum, entry)=>{return accum+entry.Room+entry.Water+entry["Trash/Recycling"]+entry.Thermostat}, 0);
    const avgFootprint = (totalFootprint/this.props.room.stay).toFixed(2);
    const footprintPerArea = (avgFootprint/this.props.room.area).toFixed(2);
    const footprintRating = "*****".slice(0, calculateRating(footprintPerArea))
    return (
      <div className="scoreboard">
        <h2>Room Statistics</h2>
        <div className="roomStats">
          <div>
            <div>Carbon footprint during stay: {totalFootprint}</div>
            <div>Footprint per day: {avgFootprint}</div>
            <div>consumption/m2: {footprintPerArea}</div>
          </div>
          <div>
            <div>guest count: {this.props.room.guests}</div>
            <div>guest total stay: {this.props.room.stay}</div>
            <div>Carbon footprint rating: {footprintRating}</div>

          </div>
        </div>
      </div>
    )
  }
}
