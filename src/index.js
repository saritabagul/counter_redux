import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./App";
import count from "./reducers";

const store = createStore(count);
// console.log(store);
// console.log("state", store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App store={store} />
  </StrictMode>,
  rootElement
);
