import React from 'react';
import styled from 'styled-components';
const StyledDiv = styled.div`
  div.bobby {
    background: tan;
    width: 400px;
    height: 200px;
    border-radius: 50px;
    box-shadow: 1px 2px 3px blue;
    display: grid;
    place-items: center center;
    .popcorn {
      font-size: 50px;
    }
  }
`;
// the old imperative way:
// document.querySelector('.popcorn').innerHTML = `🍿🍿🍿🍿`;

// the old, cleaner imperative way
// const popcornDiv = document.querySelector('.popcorn');
// popcornDiv.innerHTML = `🍿🍿🍿🍿`;

// the old way to work a button
// document.querySelector('.ash').addEventListener('click',()=>{
//   console.log('clicked!')
// })

const addMorePopcorn = () => {
  console.log('popcorn time!!!');
  let popcornDiv = document.querySelector('.popcorn').innerHTML;
  document.querySelector('.popcorn').innerHTML = popcornDiv + `🍿`;
};

const Lesson4 = () => {
  return (
    <StyledDiv>
      Lesson 4: Imperative JavaScript (I tell/impel you to do it, and you do it)
      <br />
      <br />
      1. Create a button with an onClick handler
      <button onClick={addMorePopcorn} className="ash">
        WHAT DO I DO 😂
      </button>
      <br />
      <div className="bobby">
        <p className="popcorn">🍿</p>
      </div>
      <br />
      2. On click, imperatively make a styled div animate however you like
    </StyledDiv>
  );
};

export default Lesson4;
