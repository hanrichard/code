import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import productsRudecer from './store/reducers/productsRudecer';
import cartRudecer from './store/reducers/cartReducer';
import apiReducer from './store/reducers/apiReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  products: productsRudecer,
  cart: cartRudecer,
  apiStatus: apiReducer,
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk),
));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
