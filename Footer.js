import React from "react";
export default () => (
  <footer>
    <hr />
    <ul
      css={`
        display: flex;
        justify-content: center;

        li {
          display: inline-block;
          margin: 1rem;
        }
      `}
    >
      <li>Lettre d'informations</li>
      <li>Contact</li>
      <li>Mentions légales</li>
    </ul>
  </footer>
);
