import React from 'react';
import ReactNative, { View, Text, AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import reducer from './js/reducers';
import AppContainer from './js/containers/app';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const loggerMiddleware = createLogger({
    predicate: (getState, action) => __DEV__
});

function configureStore(initialState) { 
    const enhancer = applyMiddleware(
        loggerMiddleware,
        thunk
    );
    return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const App = () => { 
    return ( 
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
};

AppRegistry.registerComponent('TestApp', () => App);