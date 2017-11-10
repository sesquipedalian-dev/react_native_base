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

import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Component } from 'react';
const RouterWithRedux = connect()(Router);

class App extends Component { 
    render() { 
        return ( 
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root">
                        <Scene key="landing" component={AppContainer} title="Landing"/>
                    </Scene>
                </RouterWithRedux>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('TestApp', () => App);