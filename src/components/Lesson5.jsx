import React from 'react';

const Lesson5 = () => {
  return (
    <div>
      Lesson 4: Declarative JavaScript (I declare it is so, and it is so)
      <br />
      <br />
      1. add the following line below <code>const Lesson5</code> and above{' '}
      <code>return</code> :
      <br />
      <code>
        const [buttonPosition, setButtonPosition] = React.useState('left')
      </code>
      <br />
      <br />
      2. create a button and on click, declaratively make a styled div animate
      however you like
    </div>
  );
};

export default Lesson5;
