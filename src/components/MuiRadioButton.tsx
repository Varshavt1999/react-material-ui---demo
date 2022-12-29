//radio button allow the user to select one option from a set/ it is prefered over a single select drop down
// where there are limite doption to select from  and the user can see all the available options.
// FormControl : wrapper
// FormLabel : specify the label for group of buttons
//FormControlLabel : to label the individual radio button 
//RadioGroup : which wrap individual radio component
import {Box,Stack,Typography, FormControl ,FormLabel,FormControlLabel ,RadioGroup,Radio , FormHelperText} from "@mui/material"
import { log } from "console"
import React, { useState } from "react"
export const MuiRadioButton = () => {
  const [value, setValue] = useState("")
  console.log({value});
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    setValue(event.target.value)
  }
  return (
    <div style={{padding : "30px"}}>
      <Typography variant='h4' component="h1" gutterBottom >Radio Button</Typography >
      //-----------------------------------------------------------------------//
      <Box style={{marginTop : "30px"}}>
        {/* error prop : you can add error prop on the form control component */}
        <FormControl error={!value} >
          <FormLabel id="job-experience-group-label">Years of Experience</FormLabel>
          {/* going to connect form label with the radio group  using an id and aria-labelledby accessibility*/}
          {/* row prop : which aligns the radio button in a row */}
          <RadioGroup name="job-experience-group" aria-labelledby="job-experience-group-label" value={value} onChange={handleChange} >
            {/* within the radio group we specify the labels for the different options using form control label */}
            {/* control prop : which represents the form control component . here we are going to set it to the radio component */}
            {/* value prop : value which will be tracked when the option is seleceted */}        
            <FormControlLabel control={<Radio  size="small" color="secondary"/>} label="0-2" value="0-2"/>
            <FormControlLabel control={<Radio size="medium" />} label="3-5" value="3-5"/>
            <FormControlLabel control={<Radio  color="success"/>} label="6-10" value="6-10"/>
          </RadioGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>  
      </Box> 
    </div>
  )
}
