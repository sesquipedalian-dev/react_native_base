# react_native_base
Basic set up for my react native projects using redux. Meant to be a baseline to start other projects with some basic boilerplate.  State managed with redux.

# set up / forking
* https://github.com/Microsoft/react-native-windows/blob/master/docs/GettingStarted.md
* delete unnecessary stuff from project root, like App.windows.js, App.js, their index.js, etc.
* grab js folder and index.js from this project
* rename TestApp in index.js to whatever you called your app during react-native-windows setup
* npm install dependencies in an administrator command prompt
  * npm i redux
  * npm i redux-thunk 
  * npm i redux-logger
  * npm i react-redux
  * npm i react-native-router-flux
* run the app as described on the react-native-windows wiki
