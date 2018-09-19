/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';

import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC9N0grXUF-SvJYsC9xU3NMrWlIJWsEfRU",
      authDomain: "employee-4b916.firebaseapp.com",
      databaseURL: "https://employee-4b916.firebaseio.com",
      projectId: "employee-4b916",
      storageBucket: "employee-4b916.appspot.com",
      messagingSenderId: "494440810571"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}