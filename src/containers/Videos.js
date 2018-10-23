import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Videos extends Component {
  render() {
    return (
      <div>
        <h1>Video Page</h1>
        <Link to='/'>Back</Link>
      </div>
    );
  }
}

export default Videos;
