import React, { Component } from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`

class Home extends Component {
  render() {
    return (
      <div>        
        <Image src={require('../img/fitness.jpg')} alt=""/>
      </div>
    );
  }
}

export default Home;
