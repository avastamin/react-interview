import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
  html {
    height: 100%;
    body {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0;
      #root {
        background: ${theme.colors.background};
        color: ${theme.colors.black};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        height: 100%;
        padding: 15px;
      }
    }
  }
`}
`;
