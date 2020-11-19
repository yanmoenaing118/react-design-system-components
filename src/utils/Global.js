import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { primaryFont } from "./typography";
import { neutral } from "./colors";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: ${primaryFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  main {
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 1rem;
    background-color: ${({ theme }) => theme.themeBackground};

    &> div {
      border: 1px solid #ccc;
      padding: 1.6rem;
    }

    &>nav {
      grid-column: 1 / -1;
      background-color:${neutral[100]}; 
      padding: 1rem 0;
      border-bottom: 1px solid ${neutral[300]}
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;
