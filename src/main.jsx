import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { store } from "./redux/strore";
import "./index.css";
const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>
);
