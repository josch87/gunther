import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --primary-text-color: #4b4b4b;
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: system-ui;
    color: var(--primary-text-color);
  }

  h1 {
    margin: 0.67em 0;
  }
`;
