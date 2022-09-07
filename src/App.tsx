import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atom";
import Router from "./router/Router";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import "./font/font.css";

import { darkTheme, lightTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 10px;
    font-family: "GmarketSansMedium";
  }
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.nameColor};
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    width: 100%;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }
  .ir {
    position: absolute;
    clip: rect(0,0,0,0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow:hidden;
  }
  .hide {
    display: none;
  }
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
