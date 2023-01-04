//doalog is a type of a model that appear infront of application content to present important information or ask for a decision
//unlike a snackbar dialog disable all the app functionality when they appear and remine on screen untill confirmed or dismissed
import {Typography ,Box,Button , Dialog , DialogTitle , DialogContent , DialogContentText ,DialogActions} from "@mui/material"
import {useState} from "react"
export const MuiDialog = () => {
    const [open, setOpen] = useState(false)
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Dialog</Typography>
        //-----------------------------------------------------------------------//
        <Box>
        <Button onClick={()=>setOpen(true)}>open dialog</Button>
        <Dialog open={open} onClose={()=>setOpen(false) } aria-labelledby="dialog-title" aria-describedby="dialog-description">
            <DialogTitle id="dialog-title">Submit the test ?</DialogTitle>
            <DialogContent id="dialog-description">
                <DialogContentText>Are you sure  you want to submit the test? you will not be able to edit after submitting </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>setOpen(false)}>Cancel</Button>
                <Button autoFocus onClick={()=>setOpen(false)}>submit</Button>
            </DialogActions>
        </Dialog>
        </Box>
    </div>
  )
}
