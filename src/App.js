import React from 'react';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import About from './components/About';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
