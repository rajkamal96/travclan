import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';

const App = () => {
  return (
    <div className='container'>
      <h1>Customers</h1>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/profile" component={Profile} />
    </div>
  );
};

export default App;
