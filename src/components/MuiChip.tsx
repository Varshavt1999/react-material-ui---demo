import {Typography , Stack ,Chip , Avatar} from "@mui/material"
import Face4OutlinedIcon from '@mui/icons-material/Face4Outlined';
import { useState } from "react";

export const MuiChip = () => {
    //chip allow users to enter information , make selection , filter content or trigger action 
    const [chip, setChip] = useState(["chip1", "chip2", "chip3"])
    const handleDelete = (chipToDelete : string) =>{
        setChip((chip) => chip.filter((chip) => chip !== chipToDelete))
    }
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Chip</Typography>
        //-----------------------------------------------------------------------//
        <Stack direction="row" spacing={2}>
            {/* invoke chip compoenent with label prop */}
            <Chip label="chip" color="primary"/>       
            <Chip label="chip" color="primary" size="small"/>   
            <Chip label="chip outlined" color="primary" variant="outlined"/>     
            <Chip label="chip with avatar" color="primary" variant="outlined" avatar={<Avatar>V</Avatar>}/>     
            <Chip label="chip with avatar"  variant="outlined" avatar={<Avatar src="https://randomuser.me/api/portraits/women/79.jpg" alt="women" />}/>    
            <Chip label="chip with icon" color="primary" icon={<Face4OutlinedIcon/>}/>    
            <Chip label="click" color="success" onClick={()=> alert("clicked a chip")}/>   
            <Chip label="delete" color="error" onClick={()=> alert("clicked a chip")} onDelete={()=> alert("delete handler called")}/>   
        </Stack>
        <Stack direction="row" spacing={2} sx={{marginTop : "40px"}}>
            {chip.map((chip)=>(
                     <Chip key={chip} label={chip}  onDelete={()=>handleDelete(chip)}/> 
            ))} 
        </Stack>

        
    </div>
  )
}
