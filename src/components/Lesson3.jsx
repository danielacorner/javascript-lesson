import React from 'react';
import styled from 'styled-components';

const Lesson3Styles = styled.div`
  div.joe {
    color: white;
    background: purple;
    .bob {
      color: cyan;
    }
  }
`;

const Lesson3 = () => {
  return (
    <Lesson3Styles>
      <div className="joe">
        Lesson 3: Styled Components
        <br />
        <br />
        0. Copy the HTML from the previous lesson below
        <br />
        <br />
        <a href="lesson1" className="bob">
          HEY I'm A LINK OVER HERE
        </a>
        1. At the top of this file, add <br />
        <code>import styled from 'styled-components'</code>
        <br />
        <br />
        2. Translate your lesson2.css into styled-components syntax
      </div>
    </Lesson3Styles>
  );
};

export default Lesson3;
