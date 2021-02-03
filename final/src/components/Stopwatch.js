import React, {Component} from 'react';

class Stopwatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 100);
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState(prevState => ({
        previousTime: now,
        elapsedTime: prevState.elapsedTime + (now - prevState.previousTime)
      }));
    }
  }

  handleStopwatch = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}));
    if (!this.state.isRunning) { // Stopwatch is stop
      this.setState(prevState => ({
        previousTime: Date.now()
      }));
    }
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">0</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;