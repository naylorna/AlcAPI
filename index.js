import React from 'react';
import ReactDOM from 'react-dom';

//import data from api
var drinkIngredients = require('./indexi.js');

class Random extends React.Component {
    render() {
      return (
        <button className="random">
          {this.props.value}
        </button>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  