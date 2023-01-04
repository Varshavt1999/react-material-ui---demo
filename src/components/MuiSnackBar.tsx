//snackbars provide brief notifications and are also known as toast notifications
//snackbar inform users of a process that an app has performed or will perform
//they appear temporarily towards the bottom of the screen 
//they shoulndnt interrupt user experience and they dont require user input to disappear
import {Typography ,Box ,Snackbar , Button ,Alert} from "@mui/material"
import { AlertProps } from "@mui/material/Alert"
import {useState , forwardRef} from "react"

export const MuiSnackBar = () => {
    const [open, setOpen] = useState(false)
    const handleClose = (event?:React.SyntheticEvent | Event , reason?: string) =>{
        if(reason === "clickaway"){
            return
        }
        setOpen(false)
    }
    //custom snackbar
    const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
      function SnackbarAlert(props,ref){
        return <Alert elevation={6} ref={ref} {...props}/>
      }
    )
   return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Snackbar</Typography>
        //-----------------------------------------------------------------------//
        <Box>
          {/* snackbar also need a trigger element for that we use a button */}
        <Button onClick={()=>setOpen(true)}>Submit</Button>
        {/* message prop --> text to be displayed */}
        {/* autoHideDuration --> to close automatically */}
        {/* anchorOrigin prop --> to change position */}
        <Snackbar message ="Form submitted successfully" autoHideDuration={4000} open ={open} onClose={handleClose}
        anchorOrigin={{
          vertical : "bottom" , 
          horizontal : "center"
        }}
        />

        {/* custom snackbar */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <SnackbarAlert onClose={handleClose} severity="success">
Form submitted successfully
          </SnackbarAlert>
        </Snackbar>
        </Box>     
    </div>
  )
}
