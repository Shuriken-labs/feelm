import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./components/Share/ScrollToTop";

import store from "./store/index";
import { Provider } from "react-redux";
import { StarknetProvider } from "./components/starknet/startnet-provider"; // ✅ Adjust this path as needed

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StarknetProvider>
        <HashRouter>
          <ScrollToTop />
          <App />
        </HashRouter>
      </StarknetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
