//bottom navigation is well suited for mobile and tablet device sizes and is used to switch btwn the primary destinations in  an application
import {Typography ,Box,BottomNavigation, BottomNavigationAction } from "@mui/material"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {useState} from "react"
export const MuiBottomNavigation = () => {
  const [selected, setSelected] = useState(null)
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Bottom Navigation</Typography>
        //-----------------------------------------------------------------------//
        <Box sx={{width:"50%" , height:"300px", margin:" 0 auto" , position: "relative" , background : "rgba(0,0,0,0.5)" , border : "1px solid green"}}>
          <BottomNavigation sx={{width : "100%" ,position: "absolute" ,bottom : 0 }} value={selected} onChange={(event , newvalue) => setSelected(newvalue)}>
              <BottomNavigationAction label="home" icon ={<HomeOutlinedIcon />}/>
              <BottomNavigationAction label="favorite" icon ={<FavoriteBorderOutlinedIcon />}/>
              <BottomNavigationAction label="person" icon ={<PersonOutlineOutlinedIcon />}/>
          </BottomNavigation>
        </Box>
         {/* showLabels prop ----> to always show the label */}
         <Box sx={{width:"50%" , height:"300px", margin:"40px auto 0" , position: "relative" , background : "rgba(0,0,0,0.5)" , border : "1px solid green"}}>
          <BottomNavigation sx={{width : "100%" ,position: "absolute" ,bottom : 0 }} value={selected} onChange={(event , newvalue) => setSelected(newvalue)} showLabels>
              <BottomNavigationAction label="home" icon ={<HomeOutlinedIcon />}/>
              <BottomNavigationAction label="favorite" icon ={<FavoriteBorderOutlinedIcon />}/>
              <BottomNavigationAction label="person" icon ={<PersonOutlineOutlinedIcon />}/>
          </BottomNavigation>
        </Box>
    </div>
  )
}
