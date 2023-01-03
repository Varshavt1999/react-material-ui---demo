//drawer component can be used to create side bar which can be used for number of things which completely depend on your application
// they can contain links to other pages in your app ,allow you to switch accounts etc

import { Typography , Drawer , Box , IconButton} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react"

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <div style={{padding : "30px" }}>
        <Typography variant='h4' component="h1" gutterBottom>Drawer</Typography>
        //-----------------------------------------------------------------------//
        <Box>
            <IconButton size="large" edge="start" aria-label="logo" color="inherit" onClick={() =>setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            {/* anchor props - which bnasically controll in which direction the sidebar opens
            by default tooltip is positioned to the bottom of the element */}
            <Drawer anchor="left" open={isDrawerOpen} onClose={() =>setIsDrawerOpen(false) }>
                <Box p={2} width="250px" textAlign="center" role="presentation">
                    <Typography variant="h6" component="div">Side Panel</Typography>
                </Box>
            </Drawer>
        </Box>
    </div>
  )
}
