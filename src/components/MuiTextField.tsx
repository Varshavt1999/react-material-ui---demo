//textfileds allow users to enter text in the browser.
//eg" textFileds in user registration form ,login form, chekout pages etc.
import { useState } from "react";
import {Stack ,Typography,TextField ,InputAdornment} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';

export const MuiTextField = () => {
    const [value, setValue] = useState("")
  return (
    <div style={{padding : "30px"}}>
    <Typography variant='h4' component="h1" gutterBottom>Text field</Typography>
    //-----------------------------------------------------------------------//
    <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
            <TextField label="Name" />    
        </Stack>   
        {/* we have 3 varients . outlined is default varient */}
        <Stack direction="row" spacing={2}>
            <TextField label="Name" variant="outlined"/>
            <TextField label="Name" variant="filled"/>
            <TextField label="Name" variant="standard"/>
        </Stack>   
        <Stack direction="row" spacing={2}>
            <TextField label="Name" variant="outlined" color="success" size="small"/>
            <TextField label="Name" variant="filled" color="secondary" size="medium"/>
            <TextField label="Name" variant="standard" color="secondary" />
        </Stack> 
        {/* astrich near the label   */}
        <Stack direction="row" spacing={2}>
            <TextField label="Form input" variant="outlined" color="success" required />    
        </Stack>
        <Stack direction="row" spacing={2}> 
            {/*helper text box . which adds help text to the input  */}
           <TextField label="Form input" variant="outlined" color="success" helperText="Do not share your password with anyone"/> 
            {/* type = corresponds type attribute of the input element . when we type in we dont see the text . instead we see dots*/}
            <TextField label="password" type="password" helperText="Do not share your password with anyone"/>
            {/* we can also desable the input . then we are unable to edit that field */}    
            <TextField label="password" type="password"  disabled helperText="Do not share your password with anyone"/>
            {/* inputProps = if you dont want to disable but to prevent the user from editing the field value. you can make it read only . we can focus the input but cant edit */}
            <TextField label="read only" InputProps={{readOnly: true}}/>
            {/* add prefixes and suffixes to a text field . for that we use InputAdornment component  */}
        </Stack> 
        <Stack direction="row" spacing={2}>
            <TextField label="amount" InputProps={{
                startAdornment  : <InputAdornment position="start">$</InputAdornment>,
            }} />    
            <TextField label="weight"  InputProps={{
                endAdornment  : <InputAdornment position="end">kg</InputAdornment>,
            }}/> 
            
            {/* InputAdorment doesnt have to be text . you can also use icons . eg : eye hidden/visible icons you would normally used with a password input  */}
            <TextField label="password" type="password" InputProps={{
                endAdornment  : <InputAdornment position="end"><VisibilityIcon/></InputAdornment>,
            }}/>
            {/* error prop = which toggles the error state */}
            <TextField label="Name" error/>
            <TextField label="Name"  value={value} required onChange={e => setValue(e.target.value)} error={!value} helperText={!value ? "Required" : "Do not share your password with anyone"}/>
        </Stack>         
    </Stack>
    </div>
  )
}
