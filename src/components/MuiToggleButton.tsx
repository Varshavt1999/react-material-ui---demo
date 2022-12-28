import {useState} from "react"
import {Stack ,  Typography ,ToggleButton, ToggleButtonGroup} from "@mui/material"
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


export const MuiToggleButton = () => {

    //-----------------------------------------------------------------
    // const [formats, setFormats] = useState<string[]>([])
    // console.log(formats,"formats");  
    // const handleFormatChange =(_event : React.MouseEvent<HTMLElement> ,updatedFormats : string[]
    //     )=>{
    //         setFormats(updatedFormats)
    // }

    //-----------------------------------------------------------------
    //if we want to choose only one at a time
    const [formats, setFormats] = useState<string | null>(null)
    console.log(formats,"formats");  
    const handleFormatChange =(_event : React.MouseEvent<HTMLElement> ,updatedFormats : string | null
        )=>{
            setFormats(updatedFormats)
    }
  return (
    <div style={{padding : "30px"}}>
    <Typography variant='h4' component="h1" gutterBottom>ButtonGroup</Typography>
    //-----------------------------------------------------------------------//
        <Stack spacing={4}>
            <Stack spacing={2} direction="row" >  
                <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} size="small" color="success" orientation="vertical" exclusive>
                    <ToggleButton value="bold">
                        <FormatBoldIcon/>
                    </ToggleButton>
                    <ToggleButton value="italic">
                        <FormatItalicIcon/>
                    </ToggleButton>
                    <ToggleButton value="underlined">
                        <FormatUnderlinedIcon/>
                    </ToggleButton>
                </ToggleButtonGroup>        
            </Stack>
        </Stack>
    </div>
  )
}
