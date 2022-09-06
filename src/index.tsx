import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font/font.css";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 10px;
    font-family: "GmarketSansMedium";
  }
  body {
    background-color: #FCF6F5;
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

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </>
);
