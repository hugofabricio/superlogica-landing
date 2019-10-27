import { createGlobalStyle } from "styled-components";
import { rem } from "polished";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab|Roboto:400,500&display=swap');

  body {
    font-family: ${({ theme }) => theme.fontFamily.sansSerif};
    font-size: 16px;
    height: 100%;
    width: 100%;

    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    margin: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: 700;
  }

  hr {
    border: none;
    clear: both;
    margin-bottom: 1.25rem;
  }

  code,
  pre {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;
    border-radius: 3px;
    margin: 1rem 0;
  }

  ol,
  ul {
    padding: 0;
    list-style: none;
  }

  ol,
  ul,
  dl {
    margin: 0;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default GlobalStyles;
