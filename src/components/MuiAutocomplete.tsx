import {Typography , Stack , Autocomplete , TextField} from "@mui/material"
import { useState } from "react"
//autoComplete behaves like a combo box . when you click inside you see the options.select an optiomn and the value is shown
//you can also clear the selected value .if you start typing in few letters we see the list of suggetions. you can select one option from the list of selection
//this scenario is suitable for autocomplete like google search
export const MuiAutocomplete = () => {
    const skills = ["HTML" , "CSS" , "JavaScript" , "TypeScript" ,"React"]
    const [selectedValue, setSelectedValue] = useState<string | null>(null)
    console.log({selectedValue});
    //------------------------------------------
    //this is the more practical usage of autoComplete component
    type skill = {
        id : number 
        label : string
    }
    const skillsOptions = skills.map((skill,index) => ({
        id : index ,
        label : skill
    }))
    const [selectedSkills, setSelectedSkills] = useState<skill | null>(null)
    console.log({selectedSkills});
    return (
        <div style={{padding : "30px"}}>
            <Typography variant='h4' component="h1" gutterBottom>Autocomplete</Typography>
            //-----------------------------------------------------------------------//
            <Stack style={{marginTop : "30px"}} spacing={2} width="250px">
                {/* Autocomplete component have 2 mandatory props
                - options prop : which should be an array of strings
                - renderInput : which renders the input , this is equal to an arrow function
                */}
                <Autocomplete options={skills} renderInput={(params)=> <TextField {...params} label="skills" 
                />}
                value={selectedValue}
                onChange={(event: any , newValue : string | null) =>setSelectedValue(newValue) }/>
                {/*freeSolo prop :  to allow free text you can use the  - getting value that is not in the options */}
                <Autocomplete options={skills} renderInput={(params)=> <TextField {...params} label="skills" 
                />}
                value={selectedValue}
                onChange={(event: any , newValue : string | null) =>setSelectedValue(newValue) }
                freeSolo
                />
                {/* autoComplete with different structure of input data . the autoComplete compoenent can
                accept either an array of string or an array of objects which contains a label key. */}
                <Autocomplete options={skillsOptions} renderInput={(params)=> <TextField {...params} label="skills" 
                />}
                value={selectedSkills}
                onChange={(event: any , newValue : skill | null) =>setSelectedSkills(newValue) }
              
                />
            </Stack>
           
           
        </div>
    )
}
