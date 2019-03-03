import React from 'react';

const Lesson9 = () => {
  return (
    <div>
      Lesson 9: Four Ways to Do the Robot
      <br />
      <br />
      0. Copy the code from the previous lesson over to this file.
      <br />
      <br />
      1. Comment out the array, then use a <code>for</code> loop to dynamically
      generate it instead.
      <br />
      <br />
      2. Comment out the <code>for</code> loop, then and use a{' '}
      <code>while</code> loop instead.
      <br />
      <br />
      3. Replace the array with [1,2,3,4,5], then use a <code>forEach</code>
      function call instead.
      <br />
      <br />
      4. Replace the array with [0,0,0,0,0], then call <code>map</code> on that
      array, and directly use <code>map</code>'s second argument, the index.
    </div>
  );
};

export default Lesson9;
