import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {EXTENSION_ROOT_ID} from './utils/constants.ts'

ReactDOM.createRoot(document.getElementById(EXTENSION_ROOT_ID)!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
