import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    background: #F5F6FA;
  }

  button, input {
    border: 0;
    outline: none;
  }

`;
