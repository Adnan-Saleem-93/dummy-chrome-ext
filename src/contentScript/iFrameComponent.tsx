import {ThemeProvider, createTheme, styled} from '@mui/material'
import {useState} from 'react'
import {CacheProvider} from '@emotion/react'
import createCache from '@emotion/cache'

import App from '../App'
import {createPortal} from 'react-dom'

const PreviewIframe = styled('iframe')(() => ({
  border: 'none',
  height: '100vh',
  width: '100%',
}))
const PreviewPortal = () => {
  const [contentRef, setContentRef] = useState<any>(null)
  const frameDocument = contentRef?.contentWindow?.document
  const frameBody = frameDocument?.body
  const frameHeader = frameDocument?.head

  const emotionRoot = document.createElement('style')
  frameBody?.appendChild(emotionRoot)

  const globalStyles = document.createElement('style')
  globalStyles.innerHTML = `
  #ext-iframe-root{
    height: 100%;
    width: 100%;
}
    body {
      margin: 0;
      padding: 0;
    }
    * {
      box-sizing: border-box;
    }
  `
  frameBody?.appendChild(globalStyles)

  const theme = createTheme({
    components: {
      MuiPopover: {
        defaultProps: {
          container: frameBody,
        },
      },
      MuiPopper: {
        defaultProps: {
          container: frameBody,
        },
      },
      MuiModal: {
        defaultProps: {
          container: frameBody,
        },
      },
    },
  })

  const cache = createCache({
    key: 'css',
    container: frameHeader,
    prepend: true,
  })
  return (
    <PreviewIframe ref={setContentRef}>
      {frameBody &&
        createPortal(
          <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </CacheProvider>,
          frameBody
        )}
    </PreviewIframe>
  )
}

export default PreviewPortal
