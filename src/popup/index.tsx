import React from 'react'
import ReactDOM from 'react-dom/client'
import ExtensionPopup from './ExtensionPopup'
import './index.css'

const root = document.getElementById('root')
if (root) {
  const rootDiv = ReactDOM.createRoot(root)
  rootDiv.render(
    <React.StrictMode>
      <ExtensionPopup />
    </React.StrictMode>
  )
}
