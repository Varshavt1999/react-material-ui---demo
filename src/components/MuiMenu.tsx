import { Typography,Stack, AppBar , Toolbar , IconButton ,Button ,Menu , MenuItem} from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from "react";

export const MuiMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  //we are going to use the anchor elememnt state variable to determine whether the  menu component should be 
  //visible or hidden
  const open = Boolean(anchorEl)
  //open element set to true when you click on the button element
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
    //this will set button element as  the anchor element
    setAnchorEl(event.currentTarget)  
  }
  //this will hide the menu
  const handleClose= () =>{
    setAnchorEl(null)
  }
  return (
    <div style={{padding : "30px"}}>
      <Typography variant='h4' component="h1" gutterBottom>Menu</Typography>
      //-----------------------------------------------------------------------//
      <AppBar position="static" >
            {/* this component add some padding on left amd right side of the navbar */}
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow:1 ,textAlign:"left"}}>POKEMONAPP</Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit"  >Features</Button>
                    <Button color="inherit"  >Pricing</Button>
                    <Button color="inherit"  >About</Button>
                    <Button color="inherit" id="resources-button" onClick={handleClick} aria-controls={open ? "resources-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined}      
                    endIcon={<KeyboardArrowDownIcon/>}
                    >Resources</Button>
                    <Button color="inherit"  >Login</Button>
                </Stack>
                <Menu id="resources-menu" anchorEl={anchorEl} open={open} MenuListProps={{"aria-labelledby" : "resources-button",}} 
                onClose={handleClose}
                //reference : muidocs ---> components ---> utils---> popover
                anchorOrigin={{
                  vertical : "bottom" ,
                  horizontal : "right"
                }}
                transformOrigin={{
                  vertical : "top" ,
                  horizontal : "right"
                }}
                >
                  <MenuItem onClick={handleClose}>Blog</MenuItem>
                  <MenuItem onClick={handleClose}>poadcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
      
      </div>
  )
}
