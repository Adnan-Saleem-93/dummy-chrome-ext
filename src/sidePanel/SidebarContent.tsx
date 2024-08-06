import {Box, Typography} from '@mui/material'
import '../index.css'

function SidebarContent() {
  return (
    <Box sx={{height: '100%', width: '100%'}}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Typography>This is a SIDEPANEL</Typography>
      </Box>
    </Box>
  )
}

export default SidebarContent
