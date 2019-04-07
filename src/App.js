import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {orderActionReducer,orderStatusReducer} from './reducers/index';
import { Link, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

const reducer = combineReducers({
  orderAction:orderActionReducer,
  orderStatus:orderStatusReducer
})

const store =  createStore(reducer);

class App extends Component {
  render() {

    return (
      <Router>
        <Provider store={store}>
          <div id="nav">
            <ul>
              <li><Link className='link' to='/'>Home</Link></li>
              <li><Link className='link' to='/'>Orders</Link></li>
              <li><Link className='link' to='/'>Link example</Link></li>
            </ul>
          </div>
          <Route path='/' exact component={Home}/>
        </Provider>
      </Router>
    );
  }
}

export default App;
