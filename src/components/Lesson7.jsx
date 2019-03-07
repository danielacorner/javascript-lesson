import React from 'react';

const handleClick = whatevs => {
  whatevs(100);
};

const Lesson7 = () => {
  // const [state, setState] = React.useState('left');
  const [buttonPosition, setButtonPosition] = React.useState(0);
  return (
    <div>
      Lesson 7: Declarative JavaScript (I declare it is so, and it is so)
      <br />
      <br />
      1. Add the following line below <code>const Lesson7</code> and above{' '}
      <code>return</code> :
      <br />
      <code>
        const [buttonPosition, setButtonPosition] = React.useState('left')
      </code>
      <br />
      <br />
      2. Create a <code>button</code> and on click, declaratively make the
      button move by changing its position
      <br />
      <button
        style={{ position: 'absolute', left: buttonPosition, top: 200 }}
        onClick={() => handleClick(setButtonPosition)}
      >
        CLICKME
      </button>
      <br />
      3. Using styled-components, add as many styles as you can think of inside
      of the class "bananas"
      <br />
      <br />
      4. Add the following line below the previous call to{' '}
      <code>React.useState</code>:
      <code>const [buttonClass, setButtonClass] = React.useState(null)</code>
      <br />
      <br />
      5. Add a call to setButtonClass("bananas") when clicking the button
      <br />
      <br />
      6. Add an <code>if</code> statement to set the class to <code>null</code>{' '}
      if the button class is already "bananas"
    </div>
  );
};

export default Lesson7;
