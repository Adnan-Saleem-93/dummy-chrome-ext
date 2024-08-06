import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import SidebarContent from './SidebarContent'

const root = document.getElementById('root')

if (root) {
  const rootDiv = ReactDOM.createRoot(root)
  rootDiv.render(
    <React.StrictMode>
      <SidebarContent />
    </React.StrictMode>
  )
}
