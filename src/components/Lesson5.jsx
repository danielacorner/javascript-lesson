import React from 'react';

const Lesson5 = () => {
  return (
    <div>
      Lesson 5: CSS pseudo-selectors + more styles
      <br />
      <br />
      1. Create four of each HTML element: <code>button, img, a</code>
      <button>hey! don't click me pls</button>
      <a href="/lesson6">
        <img src="https://picsum.photos/300/300" alt="seagull" />
      </a>
      <button>hey! don't click me pls</button>
      <a href="/lesson6">
        <img src="https://picsum.photos/300/299" alt="bananas" />
      </a>
      <button>hey! don't click me pls</button>
      <a href="/lesson6">
        <img src="https://picsum.photos/299/299" alt="" />
      </a>
      <button>hey! don't click me pls</button>
      <a href="/lesson6">
        <img src="https://picsum.photos/299/300" alt="" />
      </a>
      <br />
      <br />
      2. Add a unique class to each set of <code>button / img / a</code>{' '}
      elements
      <br />
      <br />
      3. Using styled-components, add some rockin' styles to each set of
      elements
      <br />
      <br />
      4. Add styles on <code>:hover</code> and <code>:active</code> for each
      element
    </div>
  );
};

export default Lesson5;
