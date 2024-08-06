/** global chrome */
import {OPEN_SIDEBAR} from './utils/constants'

chrome.runtime.onInstalled.addListener(async () => {
  chrome.action.setPopup({popup: 'popup.html'})
})

let windowId
chrome.tabs.onActivated.addListener(function (activeInfo) {
  windowId = activeInfo.windowId
})

// to receive messages from popup script
chrome.runtime.onMessage.addListener((message, sender) => {
  ;(async () => {
    if (message.action === OPEN_SIDEBAR) {
      chrome.sidePanel.open({windowId: windowId})
    }
  })()
})

chrome.tabs.onUpdated.addListener(async (tabId) => {
  await chrome.sidePanel.setOptions({
    tabId,
    path: 'sidepanel.html',
    enabled: true,
  })
})
