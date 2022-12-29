//switch toggle the state of a single setting on or off and are the preffered way to adjust the settings on a mobile
import {Box,Typography, FormControlLabel , Switch} from "@mui/material"
import React,{useState} from "react"

export const MuiSwitch = () => {
    const [check, setCheck] = useState(false)
    console.log({check});    
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setCheck(event.target.checked)
    }
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom >Select</Typography >
        //-----------------------------------------------------------------------//
        <Box>
            <FormControlLabel  label="dark Mode" control={<Switch checked={check} onChange={handleChange} size="small" color="secondary"/>} />
        </Box>
    </div>
  )
}
