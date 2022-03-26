import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
},
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  },
  body:{
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`
export const Main = styled.main`
min-height: 95vh;

`