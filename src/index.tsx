import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

import App from "./components/App";

const saveToLocalStorage = (state: object) => {
  try {
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem("state", stringifiedState);
  } catch (e) {
    console.error(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const state = localStorage.getItem("state");
    if (!state) return;
    return JSON.parse(state);
  } catch (e) {
    console.error(e);
  }
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage()
});

store.subscribe(() => saveToLocalStorage(store.getState()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
