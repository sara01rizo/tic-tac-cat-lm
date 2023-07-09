import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  a {
    color: inherit;
    text-decoration: none;
  }

  grid {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 33% 33% 33%;
    max-width: 300px;
  }

  square {
    width: 100px;
    height: 100px;
    font-size: 5rem;
    color: #ddd;
    border: solid 1px #282828;
  }

  square_o {
    background-color: green;
  }

  square_x {
    background-color: crimson;
  }

  p {
    font-size: 2.1rem;
  }

  reset {
    margin-top: 2rem;
    cursor: pointer;
    padding: 1rem;
    border-radius: 6px;
    font-size: 2rem;
    background-color: darkcyan;
  }
`;

export default GlobalStyles;
