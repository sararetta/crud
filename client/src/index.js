import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { configureStore,getDefaultMiddleware  } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import  songsReducer  from "./state.js";
import songSaga from "./saga.js";

const saga=createSagaMiddleware()
const store=configureStore({
  reducer:{
    songs:songsReducer
  },
  middleware:[...getDefaultMiddleware() ,saga]
})
saga.run(songSaga)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

