import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from './Home.js';
import Videos from './Videos.js';


const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/videos'>Videos</Link></li>
      </ul>
    </nav>
  </header>
)
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/videos" component={Videos} />
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
