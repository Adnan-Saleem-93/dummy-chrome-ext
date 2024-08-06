/** global chrome */

import ReactDOM from 'react-dom/client'
import '../index.css'
import {EXTENSION_ROOT_ID, OPEN_EXT_MESSAGE} from '../utils/constants'
import PreviewPortal from './iFrameComponent'

/* eslint-disable no-undef */
chrome.runtime.onMessage.addListener(function (request) {
  // Get the page content element (usually <body> or a wrapper div)
  const pageContent = document.body

  pageContent.setAttribute('ext-version-id', '0.0.1')
  const extensionWidth = '450px' // Width of your extension's content

  if (request.message === OPEN_EXT_MESSAGE) {
    const app = document.getElementById(EXTENSION_ROOT_ID)
    if (app) {
      if (app.style.display === 'none') {
        app.style.display = 'flex'
        // Adjust the page content width when the extension is activated
        pageContent.style.marginRight = extensionWidth
      } else {
        app.style.display = 'none'
        // Reset the page content width when the extension is deactivated
        pageContent.style.marginRight = '0'
        pageContent.removeAttribute('ext-version-id')
      }
    } else {
      const root = document.createElement('div')
      root.id = EXTENSION_ROOT_ID

      ReactDOM.createRoot(root).render(<PreviewPortal />)
      document.body?.append(root)
      pageContent.setAttribute('data', `ext-version-id: 0.0.1`)

      root.style.display = 'flex'
      // Adjust the page content width when the extension is activated
      pageContent.style.marginRight = extensionWidth
    }
  }
})
/* eslint-enable no-undef */
