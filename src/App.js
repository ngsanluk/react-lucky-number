import './App.css';
import React from 'react';

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { luckyNumber: 0 };
    this.play = this.play.bind(this);
  }

  play(e) {
    console.log("play() function called");
    var luckyNumber = Math.floor((Math.random() * 100) + 1);
    console.log(luckyNumber);
    this.setState({luckyNumber: luckyNumber});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Lucky Number</h3>
          <h1 className="LuckyNumber display-1">
          {this.state.luckyNumber==0 ? '?' : this.state.luckyNumber}
          </h1>
          <button className="btn btn-primary" onClick={this.play}>Play</button>
        </header>

      </div>
    );
  }
}

export default App;
