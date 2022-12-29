//select component is used for collecting information from a list of options
import {Stack,Box,TextField,MenuItem ,Typography} from "@mui/material"
import {useState} from "react"
export const MuiSelect = () => {
  const [country, setCountry] = useState("")
  const [countries, setCountries] = useState<string[]>([])
  console.log({country});
  const handleChange= (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string)
  }
  //handling mutiple select
  console.log({countries});
  const handleMutipleChange= (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === "string" ? value.split(",") : value)
  }
  return (
    <div style={{padding : "30px"}}>
    <Typography variant='h4' component="h1" gutterBottom >Select</Typography >
    //-----------------------------------------------------------------------//
    <Stack spacing={4} direction="row" style={{marginTop : "30px"}}>
      {/* Box is just a plain old div tag on which we can specify some css property like height and width */} 
      <Box width="250px">
        {/* to convert the select filed input to a select dropdown  we need to add the select prop */}
        {/* since we have a parent with specific width you can use a prop = fullWidth */}
        <TextField label="Select a Country" select value={country} onChange={handleChange} fullWidth
        size="small"
        color="secondary"
        helperText="Please select your Country"
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
      <Box width="250px">
        <TextField label="Select a Country" select value={countries} onChange={handleMutipleChange} fullWidth
        // when you do this state become converted into an array
        SelectProps={{
          multiple : true
        }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
      <Box width="250px">
        <TextField label="Select a Country" select value={countries} onChange={handleMutipleChange} fullWidth
        error
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </Stack>
      
    </div>
  )
}
