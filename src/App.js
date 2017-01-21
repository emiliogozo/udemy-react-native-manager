import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
