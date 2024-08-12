// src/App.js

import React from 'react';
import { connect } from 'react-redux';
import { incrementSession,
  incrementBreak, 
  decrementSession, 
  decrementBreak, 
  startPause, 
  reset, 
  tick,
  toggleColorClass
  } from './redux';
import './App.scss';


const mapDispatchToProps = {
  incrementSession,
  incrementBreak,
  decrementSession,
  decrementBreak,
  startPause,
  reset,
  tick,
  toggleColorClass
};

const mapStateToProps = (state) => {
  return {
    sessionLength: state.sessionTime,
    breakLength: state.breakTime,
    isRunning: state.isRunning,
    timerLabel: state.stage,
    timeLeft: state.stage === 'Session' ? state.secondsSession : state.secondsBreak,
    colorClass: state.colorClass
  };
};

class Lengths extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    const id = event.target.id;
    switch (id) {
      case 'break-decrement':
        this.props.decrementBreak();
        break;
      case 'break-increment':
        this.props.incrementBreak();
        break;
      case 'session-decrement':
        this.props.decrementSession();
        break;
      case 'session-increment':
        this.props.incrementSession();
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className='toggle-container' id='time-setup'>
        <h1>25 + 5 Clock</h1>
        <div className='time-setup' id='break-label'>
          <h2>Break Length</h2>
          <button id="break-decrement" className="button" onClick={this.handleClick}>-</button>
          <div id='break-length'>
            <span>{this.props.breakLength}</span>
          </div>
          <button id="break-increment" className="button" onClick={this.handleClick}>+</button>
        </div>
        <div className='time-setup' id='session-label'>
          <h2>Session Length</h2>
          <button id="session-decrement" className="button" onClick={this.handleClick}>-</button>
          <div id='session-length'>
            <span>{this.props.sessionLength}</span>
          </div>
          <button id="session-increment" className="button" onClick={this.handleClick}>+</button>
        </div>
      </div>
    );
  }
}

const ConnectedLengths = connect(mapStateToProps, mapDispatchToProps)(Lengths);

class Timer extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.timeLeft === 0 && prevProps.timeLeft !== 0) {
      this.playAlarm();
    }
    if (this.props.timeLeft < 60 && this.props.timerLabel !== 'Session') {
      this.props.toggleColorClass();
    }
  }

  playAlarm = () => {
    const alarm = document.getElementById('beep');
    alarm.play();
  };

  formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  handleStartPause = () => {
    this.props.startPause();
    if (!this.props.isRunning) {
      this.timerID = setInterval(() => this.props.tick(), 1000);
    } else {
      clearInterval(this.timerID);
    }
  };

  handleReset = () => {
    this.props.reset();
    clearInterval(this.timerID);
    const alarm = document.getElementById('beep');
    alarm.pause();
    alarm.currentTime = 0;
  };

  render() {
    console.log(this.props.colorClass);
    return (
    <div id='timer-container'>
      <ConnectedLengths />
      <h2 id='timer-label' className={this.props.colorClass}>{this.props.timerLabel}</h2>
      <div id='time-left' className={this.props.colorClass}>{this.formatTime(this.props.timeLeft)}</div>
      <button id='start_stop' onClick={this.handleStartPause}>{this.props.isRunning ? 'Pause' : 'Start'}</button>
      <button id='reset' onClick={this.handleReset}>Reset</button>
      <audio id="beep" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav" />      
    </div>
        );
  }
}

const ConnectedTimer = connect(mapStateToProps, mapDispatchToProps)(Timer);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ConnectedTimer />
      </div>
    );
  }
}

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;