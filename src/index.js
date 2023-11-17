import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { sotre } from "redux/store";
import GlobalStyle from "style/globla-style";
import StyledThemeProvider from "style/theme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={sotre}>
    <GlobalStyle />
    <StyledThemeProvider>
      <App />
    </StyledThemeProvider>
  </Provider>
);

reportWebVitals();
