// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./states";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
      </BrowserRouter>
  </Provider>
)
