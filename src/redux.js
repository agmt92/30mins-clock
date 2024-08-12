// src/redux.js

import { createStore } from 'redux';

// Action Types
const INCREMENT_SESSION = 'INCREMENT_SESSION';
const DECREMENT_SESSION = 'DECREMENT_SESSION';
const INCREMENT_BREAK = 'INCREMENT_BREAK';
const DECREMENT_BREAK = 'DECREMENT_BREAK';
const START_PAUSE = 'START_PAUSE';
const RESET = 'RESET';
const TICK = 'TICK';
const TOGGLE_COLOR_CLASS = 'TOGGLE_COLOR_CLASS';

// Action Creators
export const incrementSession = () => ({ type: INCREMENT_SESSION });
export const decrementSession = () => ({ type: DECREMENT_SESSION });
export const incrementBreak = () => ({ type: INCREMENT_BREAK });
export const decrementBreak = () => ({ type: DECREMENT_BREAK });
export const startPause = () => ({ type: START_PAUSE });
export const reset = () => ({ type: RESET });
export const tick = () => ({ type: TICK });
export const toggleColorClass = () => ({ type: TOGGLE_COLOR_CLASS });

// Initial State
const initialState = {
  sessionTime: 25,
  breakTime: 5,
  isRunning: false,
  secondsSession: 25 * 60,
  secondsBreak: 5 * 60,
  stage: 'Session',
  colorClass: 'timer-container'
};

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_SESSION:
      return { 
        ...state, 
        sessionTime: state.sessionTime + 1,
        secondsSession: (state.sessionTime + 1) * 60 
      };
    case DECREMENT_SESSION:
      if (state.sessionTime > 1) {
        return { 
          ...state, 
          sessionTime: state.sessionTime - 1,
          secondsSession: (state.sessionTime - 1) * 60 
        };
      } else {
        return state;
      }
    case INCREMENT_BREAK:
      return { 
        ...state, 
        breakTime: state.breakTime + 1,
        secondsBreak: (state.breakTime + 1) * 60 
      };
    case DECREMENT_BREAK:
      if (state.breakTime > 1) {
        return { 
          ...state,
          breakTime: state.breakTime - 1,
          secondsBreak: (state.breakTime - 1) * 60 
        };
      } else {
        return state;
      }
    case START_PAUSE:
      return {
        ...state,
        isRunning: !state.isRunning
      };
    case RESET:
      return initialState;
    case TOGGLE_COLOR_CLASS:
        if (state.secondsBreak < 60) {
            return {
                ...state,
                colorClass: 'timer-container red-text'
            };
        }
        break;
    case TICK:
      if (state.isRunning) {
        if (state.stage === 'Session') {
          if (state.secondsSession > 0) {
            return {
              ...state,
              secondsSession: state.secondsSession - 1
            };
          } else {
            return {
              ...state,
              stage: 'Break',
              secondsBreak: state.breakTime * 60
            };
          }
        } else if (state.stage === 'Break') {
          if (state.secondsBreak > 0) {
            return {
              ...state,
              secondsBreak: state.secondsBreak - 1
            };
          } else {
            return initialState;
          }
        }
      }
      return state;
    default:
      return state;
  }
};

// Store
export const store = createStore(counterReducer);