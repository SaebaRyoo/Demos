import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import Root from "./routes/root";
import store from "./stores/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <Root />
  </Provider>
  // {/* </React.StrictMode> */}
);
