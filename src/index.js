import React from 'react';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import './index.css';
import ReactDOM from "react-dom/client";
import store from "./store.js";
import { Provider } from "react-redux";
import App from './App.jsx';
import { productApi } from './features/Products/apiSlice.js';


ReactDOM.createRoot(document.getElementById("root")).render(
 
  <ApiProvider api={productApi}>
    <App />
  </ApiProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

