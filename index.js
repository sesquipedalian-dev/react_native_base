import React from 'react';
import ReactNative, { View, Text, AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import reducer from './js/reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

/**********************
 * REDUX MIDDLEWARE
 * In this section, we create redux middleware.  This adds features to 
 * Redux's state store.
 * logger - while using JS remote debugging in a browser window, logs the entire
 * state with each state change in such a way that you can inspect it using 
 * a browser's developer tools.  hit localhost:8081/debugger-ui after enabling
 * remote JS debugging in the running native app
 * 
 * thunk - allows actions to return a function (dispatch, getState) => Unit
 * instead of just an action. This can be handy for async operations - see 
 * js/actions/recipes/delayed for an example. 
 */
const loggerMiddleware = createLogger({
    predicate: (getState, action) => __DEV__
});

function configureStore(initialState) { 
    const enhancer = applyMiddleware(
        loggerMiddleware,
        thunk
    );
    // here we're creating redux's store based on our reducer
    // (imported from js/reducers/index.js) and the middleware
    return createStore(reducer, initialState, enhancer);
}

// initial store with no initial state - typical pattern is reducers are 
// responsible for a sensible initial state
const store = configureStore({});

// in this section, create the magical Router from react-native-router flux
// that lets us define our scenes / routes.  Since this is the top-level
// component, it can manage the route state.
import { Router, Scene } from 'react-native-router-flux';
const RouterWithRedux = connect()(Router);

// in this section, define the routes for the app.  a root scene is required?
// each scene can be a separate container component 
import { connect } from 'react-redux';
import { Component } from 'react';
import AppContainer from './js/containers/app';
import SecondScene from './js/containers/secondScene';

class App extends Component { 
    render() { 
        return ( 
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key="root">
                        <Scene key="landing" component={AppContainer} title="Landing"/>
                        <Scene key="other" component={SecondScene} title="Other"/>
                    </Scene>
                </RouterWithRedux>
            </Provider>
        );
    }
}

// register the js components of the app with the native layer
AppRegistry.registerComponent('TestApp', () => App);