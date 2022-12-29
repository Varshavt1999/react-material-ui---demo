// checkbox allow the user to select one or more options from a set
//they can also be used to turn an option on or off
import {Box , FormControlLabel , Checkbox ,Typography , FormControl,FormLabel,FormGroup , FormHelperText} from "@mui/material"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {useState} from "react"

export const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)  
    const [skills, setSkills] = useState<string[]>([])  //<string[]> =>  type is array of strings
    console.log({acceptTnC} ,"acceptTnC");   
    console.log({skills} ,"skills");   
    const handleChange = (event : React.ChangeEvent<HTMLInputElement >) =>{
        setAcceptTnC(event.target.checked)
    }
    const handleSkillChange = (event : React.ChangeEvent<HTMLInputElement >) =>{
        const index = skills.indexOf(event.target.value)
        if(index === -1){
            setSkills([...skills,event.target.value])
        }else{
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }
  return (
    <div style={{padding : "30px"}}>
    <Typography variant='h4' component="h1" gutterBottom >Check Box</Typography >
    //-----------------------------------------------------------------------//
    <Box>
        <Box>
            <FormControlLabel label="I accept terms and conditions" control={<Checkbox checked={acceptTnC} size="small" color="success" onChange={handleChange}/>}/>
        </Box>
        {/* it is also possible to use icon as checkbox */}
        <Box>
            <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon/>} checked={acceptTnC} onChange={handleChange}/>
        </Box>
        <Box>     
            <FormControlLabel label="I accept terms and conditions" control={<Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon/>} checked={acceptTnC} onChange={handleChange}/>}/>
        </Box>
    </Box>
    {/* checkboxgroup  */}
    <Box>
        <FormControl error={skills.length === 0 }>
            <FormLabel>Skills</FormLabel>
            <FormGroup row>
                <FormControlLabel label="Html" value="html" control={<Checkbox checked={skills.includes("html")} onChange={handleSkillChange}/>}/>
                <FormControlLabel label="Css" value="css" control={<Checkbox checked={skills.includes("css")} onChange={handleSkillChange}/>}/>
                <FormControlLabel label="Javascript" value="javascript" control={<Checkbox checked={skills.includes("javascript")} onChange={handleSkillChange}/>}/>
            </FormGroup>
            <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
    </Box>
    </div>
  
  )
}
