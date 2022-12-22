import {Stack , Button , Typography , IconButton} from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Button</Typography>
        //-----------------------------------------------------------------------//
       <div style={{marginTop : "20px"}}>
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={4} >
                <Stack spacing={2} direction="row">
                    <Button variant="contained" color="primary">primary</Button>
                    <Button variant="contained" color="secondary">Secondary</Button>
                    <Button variant="contained" color="error">Error</Button>
                    <Button variant="contained" color="warning">Warning</Button>
                    <Button variant="contained" color="info">Info</Button>
                    <Button variant="contained" color="success">Success</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button variant="outlined" color="primary">primary</Button>
                    <Button variant="outlined" color="secondary">Secondary</Button>
                    <Button variant="outlined" color="error">Error</Button>
                    <Button variant="outlined" color="warning">Warning</Button>
                    <Button variant="outlined" color="info">Info</Button>
                    <Button variant="outlined" color="success">Success</Button>
                </Stack>     
                <Stack spacing={2} direction="row">
                    <Button variant="text" color="primary">primary</Button>
                    <Button variant="text" color="secondary">Secondary</Button>
                    <Button variant="text" color="error">Error</Button>
                    <Button variant="text" color="warning">Warning</Button>
                    <Button variant="text" color="info">Info</Button>
                    <Button variant="text" color="success">Success</Button>
                </Stack>     
            </Stack>
            <Stack display="block" spacing={2} direction="row">             
                <Button variant="contained" size="small">Small</Button>            
                <Button variant="contained" size="medium">Meidum</Button>            
                <Button variant="contained" size="large">Large</Button>            
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
                <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
                <IconButton aria-label="send">
                    <SendIcon/>
                </IconButton>
                <IconButton aria-label="send" color="success" size="small">
                    <SendIcon/>
                </IconButton>            
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" endIcon={<SendIcon />} disableElevation>Send</Button>
                <Button variant="contained" endIcon={<SendIcon />} disableRipple>Send</Button>
                <Button variant="contained" endIcon={<SendIcon />} disableRipple disableElevation>Send</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" endIcon={<SendIcon />} disableElevation onClick={()=> alert("clicked!!!")}>Send</Button>            
            </Stack>
        </Stack>    
       </div>
    </div>
  )
}
