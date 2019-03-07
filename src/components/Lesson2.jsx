import React from 'react';
import './lesson2.css';
const svgWidth = 200;
const svgHeight = 200;
const Lesson2 = () => {
  return (
    <div className="everything">
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
        <br />
        <ol>
          <li>Make this and the next lines into a list, then</li>
          {/* step 1 */}
          <li>Create two of each HTML tag:</li>
          <ul>
            <li>Structural:</li>
            <ul>
              <li>
                <div className="cool-button">
                  <p>paragraph</p> <h1>h1</h1> <h6>h6</h6>
                  <blockquote>blockquote</blockquote> <code>code</code>
                  <pre>pre</pre>
                </div>
              </li>
            </ul>
            <li>Functional:</li>
            <ul>
              <li>
                <button className="cool-button uncool-button">button</button>{' '}
                <a href="lesson2">link</a> <input />
                <button className="uncool-button">button</button>{' '}
                <a href="lesson2">link</a> <input />
                <button className="cool-button">button</button>{' '}
                <a href="lesson2">link</a> <input />
                <button className="cool-button">button</button>{' '}
                <a href="lesson2">link</a> <input />
                <button className="cool-button">button</button>{' '}
                <a href="lesson2">link</a> <input />
                <button className="supercool-button">button</button>{' '}
                <a href="lesson2">link</a> <input />
                <textarea>textarea</textarea>
                <select>
                  <option>select</option>
                  <option>select</option>
                  <option>select</option>
                  <option>select</option>
                  <option>select</option>
                  <option>select</option>
                </select>
              </li>
            </ul>
            <li>Canvas:</li>
            <ul>
              <li>
                svg, circle, rect, line, path
                <svg
                  width={svgWidth}
                  height={svgHeight}
                  style={{ background: 'lightgrey' }}
                >
                  <circle
                    r={10}
                    fill={'red'}
                    cx={svgWidth / 2}
                    cy={svgHeight / 2}
                  />
                  <rect x={10} width={10} fill={'red'} height={svgWidth / 2} />
                </svg>
              </li>
            </ul>
          </ul>
        </ol>
      </div>
    </div>
  );
};

export default Lesson2;
