import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Routines extends Component {
  render() {
    return (
      <div>
        <h1>Routines</h1>
        <Link to='/'>Back</Link>
      </div>
    );
  }
}

export default Routines;
