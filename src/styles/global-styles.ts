import { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.6rem;
    font-family: ${theme.font.family.default};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.font.family.secondary};
    margin: ${theme.spacings.large} 0;
  }
  p {
    margin: ${theme.spacings.medium} 0;
  }
  ul, ol {
    margin: ${theme.spacings.medium};
    padding: ${theme.spacings.medium};
  }
  a {
    color: ${theme.colors.secondaryColor};
  }
  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
