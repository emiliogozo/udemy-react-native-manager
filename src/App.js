import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDIxsAZh6tXMy-WZ4I8V3wH6l9f_93w5qs',
      authDomain: 'manager-55b2f.firebaseapp.com',
      databaseURL: 'https://manager-55b2f.firebaseio.com',
      storageBucket: 'manager-55b2f.appspot.com',
      messagingSenderId: '482584819728'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
