import React, { Component } from 'react';
import './App.css';
import 'c3';
import C3Chart from 'react-c3js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hotel Dashboard</h1>
        </header>
        <C3Chart
          data={{
            columns: [
                ['data1', 300, 350, 300, 0, 0, 120],
                ['data2', 130, 100, 140, 200, 150, 50],
                ['data3', 10, 100, 0, 100, 120, 10]
            ],
            types: {
                data1: 'area',
                data2: 'area',
                data3: 'area'
                // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
            },
            groups: [['data1', 'data2', 'data3']]

          }}
        />
      </div>
    );
  }
}

export default App;
