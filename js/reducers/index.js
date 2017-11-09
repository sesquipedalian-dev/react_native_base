import { combineReducers } from 'redux';
import * as simpleReducers from './simpleReducers';
import * as complicatedReducers from './wholeStateReducers';
import * as types from '../actions/types';

const baseReducer = combineReducers(Object.assign(
    simpleReducers,
));

const wholeStateReducers = [
    complicatedReducers.aSecondInt
];

const thunkReducer = function(prevState, action) {
    let newState = baseReducer(prevState, action);

    wholeStateReducers.forEach((reducer) => newState = reducer(newState));

    return newState;
};

export default thunkReducer;