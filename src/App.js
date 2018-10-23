import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/* Routines component */
const Routines = () => (
  <div>
    <h2>Routines</h2>
  </div>
)

/* Videos component */
const Videos = () => (
  <div>
    <h2>Videos</h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>

      {/* Navigation Bar */}
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
       </nav>

       {/* React Router*/}
        <Route path='/' component={Home}/>
        <Route path='routines' component={Routines}/>
        <Route path='videos' component={Videos}/>
      </div>
    );
  }
}

export default App;
