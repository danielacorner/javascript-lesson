import React from 'react';
const svgWidth = 200;
const svgHeight = 200;
const Lesson1 = () => {
  return (
    <div>
      Lesson 1: HTML
      <br />
      <br />
      Make this page look nice!
      <br />
      First create the structure (HTML),
      <br />
      Then create the style (CSS).
      <br />
      <br />
      1. Make this and the next lines into a list, then
      <br />
      <ul>
        <li>2. Create two of each HTML tag:</li>
        <li>Structural:</li>
        <li>
          <p>paragraph</p>, <h1>h1</h1>, <h6>h6</h6>,{' '}
          <blockquote>blockquote</blockquote>, <code>code</code>,{' '}
          <pre>pre `</pre>,
        </li>
        <li>Functional:</li>
        <li>
          <button>button</button>, <a href="lesson2">link</a>, <input />,{' '}
          <textarea>textarea</textarea>,{' '}
          <select>
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
            <option>select</option>
          </select>
        </li>
        <li>Canvas:</li>
        <li>
          svg, circle, rect, line, path
          <svg
            width={svgWidth}
            height={svgHeight}
            style={{ background: 'lightgrey' }}
          >
            <circle r={10} fill={'red'} cx={svgWidth / 2} cy={svgHeight / 2} />
            <rect x={10} width={10} fill={'red'} height={svgWidth / 2} />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Lesson1;
