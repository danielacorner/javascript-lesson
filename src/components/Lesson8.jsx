import React from 'react';
const array = [1, 2, 3, 4];
const Lesson8 = () => {
  return (
    <div>
      {array.map(element => (
        <button>hey!</button>
      ))}
      Lesson 8: Declarative JavaScript: Mapping Elements
      <br />
      <br />
      1. Create an <code>img</code> tag with a <code>src</code> attribute
      pointing to <code>https://picsum.photos/200/200/?random</code>
      <br />
      <br />
      2. Declare an array with 5 entries: <code>[200,250,300,350,400]</code>.
      <br />
      <br />
      3. Using the Array.map function, "map out" an <code>img</code> tag for
      each entry in the array.
      <br />
      <br />
      4. For each <code>img</code>, dynamically set the <code>src</code>{' '}
      attribute using the current value in the array.
    </div>
  );
};

export default Lesson8;
