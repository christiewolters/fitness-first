import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home.js';
import Videos from './Videos.js';
import Routines from './Routines.js';
import styled from 'styled-components';
import '../css/index.css'

const NavLink = styled(Link)`
  font-size: 30px;
  padding-left: 15px;
`

const Header = () => (
  <header className="navbar">
    <span><strong>FitnessFirst</strong></span>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/videos'>Videos</NavLink>
    <NavLink to='/routines'>Routines</NavLink>
  </header>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/videos" component={Videos} />
      <Route exact path="/routines" component={Routines} />
    </Switch>
  </main>
)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
