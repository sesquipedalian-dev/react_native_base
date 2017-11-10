import { combineReducers } from 'redux';
import * as simpleReducers from './simpleReducers';
import * as complicatedReducers from './wholeStateReducers';
import * as types from '../actions/types';

// const baseReducer = combineReducers(Object.assign(
    // simpleReducers,
// ));

// const wholeStateReducers = [
    // complicatedReducers.aSecondInt
// ];

const thunkReducer = function(prevState = {}, action) {
    // first do simple reducers - these are reducers that operate on a single
    // 'slice' of state, and don't even see the rest of the state
    const allSimpleReducers = Object.assign(simpleReducers);
    const reducerNames = Object.keys(allSimpleReducers);

    let newState = prevState;
    for(let i = 0; i < reducerNames.length; i++) { 
        const key = reducerNames[i];
        const reducer = allSimpleReducers[key];
        const newValue = reducer(newState[key], action);
        newState = Object.assign(newState, {
            [key]: newValue
        });
    }

    const allComplexReducers = Object.assign(complicatedReducers);
    const complexReducerNames = Object.keys(allComplexReducers);

    for(let i = 0; i < complexReducerNames.length; i++) { 
        const key = complexReducerNames[i]; 
        const reducer = allComplexReducers[key];
        newState = reducer(newState, action);
    }

    return newState;
};

export default thunkReducer;