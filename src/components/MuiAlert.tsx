//alert display a short important message in a way that atracts users attention without interrupting users task.
import {Typography , Stack , Box, Alert , AlertTitle , Button} from "@mui/material"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

export const MuiAlert = () => {
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Alert</Typography>
        //-----------------------------------------------------------------------//
        <Stack spacing={4}>
            {/* sevearity prop --> can be one of error  , warning , info or success */}
            <Stack spacing={2}>
              <Alert severity="error">This is an error alert!!!</Alert>
              <Alert severity="warning">This is an warning alert!!!</Alert>
              <Alert severity="info">This is an info alert!!!</Alert>
              <Alert severity="success">This is an success alert!!!</Alert>

              <Alert variant="outlined" severity="error">This is an error alert!!!</Alert>
              <Alert variant="outlined" severity="warning">This is an warning alert!!!</Alert>
              <Alert variant="outlined" severity="info">This is an info alert!!!</Alert>
              <Alert variant="outlined" severity="success">This is an success alert!!!</Alert>

              <Alert variant="filled" severity="error">This is an error alert!!!</Alert>
              <Alert variant="filled" severity="warning">This is an warning alert!!!</Alert>
              <Alert variant="filled" severity="info">This is an info alert!!!</Alert>
              <Alert variant="filled" severity="success">This is an success alert!!!</Alert>
            </Stack>
            {/* AlertTitle component ---> can also add title for alert */}
            <Stack spacing={2} sx={{textAlign : "left"}}>
              <Alert severity="error"><AlertTitle>Error</AlertTitle>This is an error alert!!!</Alert>
              <Alert severity="warning"><AlertTitle>Warning</AlertTitle>This is an warning alert!!!</Alert>
              <Alert severity="info"><AlertTitle>Info</AlertTitle>This is an info alert!!!</Alert>
              <Alert severity="success" ><AlertTitle>Success</AlertTitle>This is an success alert!!!</Alert>
              {/* icon prop --> customize the icon */}
              <Alert severity="success" icon={<CheckOutlinedIcon fontSize="inherit" />}><AlertTitle>Success</AlertTitle>This is an success alert!!!</Alert>
              {/* inclusion of a close button for the alert */}
              <Alert severity="error" onClose={()=> alert("close alert")}><AlertTitle>Error</AlertTitle>This is an error alert!!!</Alert>
              {/* you can also add an action button */}
              <Alert severity="success" action={<Button color="inherit" size="small">UNDO</Button>}>This is an success alert!!!</Alert>
            </Stack>
        </Stack>
    </div>
  )
}
