import {Box, Typography} from '@mui/material'
import './index.css'

function App() {
  return (
    <>
      <Box id="ext-iframe-root">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <Typography>THIS IS A CONTENT-SCRIPT</Typography>
        </Box>
      </Box>
    </>
  )
}

export default App
