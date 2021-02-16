import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

// Setting the grid template through props.
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columnNum}, 1fr);
  grid-template-rows: repeat(${props => props.rowNum}, 1fr);
  font-size: 50px;
`;

// I set this as a static array but this could be very dynamic coming from the server.
function App() {
    // I set this as a static array but this could be very dynamic coming from the server.
    const [xGrid] = useState({
        first: ['X', '.', '.', '.', 'X'],
        second: ['.', 'X', '.', 'X', '.'],
        third: ['.', '.', 'X', '.', '.'],
        fourth: ['.', 'X', '.', 'X', '.'],
        fifth: ['X', '.', '.', '.', 'X']

    });

    // Destructure from state
    const { first, second, third, fourth, fifth } = xGrid;
  return (
    <div className="App">
      <GridContainer className='GridContainer' columnNum={5} rowNum={5}>
          {first.map((item) => (
              <p key={item}>{item}</p>
          ))}
          {second.map((item) => (
              <p key={item}>{item}</p>
          ))}
          {third.map((item) => (
              <p key={item}>{item}</p>
          ))}
          {fourth.map((item) => (
              <p key={item}>{item}</p>
          ))}
          {fifth.map((item) => (
              <p key={item}>{item}</p>
          ))}
      </GridContainer>
    </div>
  );
}

export default App;
