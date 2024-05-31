import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
// import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { store } from "./store/Redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);

{
  /* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      <ToastContainer />
    </Provider> */
}
