import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route } from "react-router-dom"
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory'
import configureStore from './stores/configureStore';
import Modal from 'react-modal';


export const history = createBrowserHistory()
const store = configureStore();

Modal.setAppElement(document.getElementById('root'));

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>,
  document.getElementById("root")
);
