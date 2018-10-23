import React, { Component } from 'react';
import styled from 'styled-components';

const red = "#710627";

const Button = styled.button`
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid white;

  background: ${props => props.primary ? `${red}` : "white"};
  color: ${props => props.primary ? "white" : `${red}`};
  &:hover{
    color: black;
  }
`


class Home extends Component {
  render() {
    return (
      <div>
        <Button
          href='https://FitnessFirst.herokuapp.com/routines'
          target="_blank"
          rel="noopener"
          primary>Cardio</Button>
        <Button>Bodybuilding</Button>
      </div>
    );
  }
}

export default Home;
