import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home.js';
import Videos from './containers/Videos.js';


export default (
  <BrowserRouter>
    <div>
      <Route path="/" component={Home} />
      <Route path="/videos" component={Videos} />
    </div>
  </BrowserRouter>
);
