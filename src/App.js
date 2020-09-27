import React from 'react';

import './App.css';

import Homepage from './pages/homepages/homepage.component';

import {Route, Switch}  from 'react-router-dom';


import Shop from './pages/shop/shop';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'  component={Homepage} />
        <Route exact path='/shop' component={Shop} /> 
      </Switch>     
    </div>
  );
}

export default App;
