import {Box, Button} from '@mui/material'
import {OPEN_EXT_MESSAGE, OPEN_SIDEBAR} from '../utils/constants'

const ExtensionPopup = () => {
  const openSidebarViaContentScripts = () => {
    chrome.tabs
      .query({active: true, currentWindow: true})
      .then((tabs) => {
        const activeTab = tabs[0]
        chrome.tabs
          .sendMessage(activeTab?.id, {
            message: OPEN_EXT_MESSAGE,
          })
          .then(() => {})
          .catch((error) => {
            console.log('Error from chrome.tabs.sendMessage()', error.toString())
            chrome.action.setPopup({popup: 'popup.html'})
          })
      })
      .catch((error) => {
        console.log('Error from chrome.tabs.query()', error.toString())
        chrome.action.setPopup({popup: 'popup.html'})
      })
  }

  const openSidebar = () => {
    chrome.runtime.sendMessage({action: OPEN_SIDEBAR})
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          padding: 3,
          gap: '1rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <Button
            onClick={openSidebarViaContentScripts}
            variant="contained"
            sx={{textAlign: 'center'}}
          >
            Open Sidebar via Content Script
          </Button>
          <Button onClick={openSidebar} variant="contained" sx={{textAlign: 'center'}}>
            Open Sidebar
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default ExtensionPopup
