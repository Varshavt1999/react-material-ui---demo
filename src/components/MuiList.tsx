//display data as a list in material ui
import { Typography ,Stack, List , ListItem , ListItemText , ListItemIcon  ,ListItemAvatar, Avatar , ListItemButton ,Divider} from "@mui/material"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const MuiList = () => {
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>List</Typography>
        //-----------------------------------------------------------------------//
        <Stack spacing={2} direction= "row">
            <List>
                {/* ListItemButton--->  to make a list item clickable  . but alignment seems to be incorrect .
                 to fix it you will need to add disablePadding on the list item compoenent */}
        
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <EmailOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="list item 1" /> 
                    </ListItemButton> 
                </ListItem>
              
                <ListItem>
                    <ListItemAvatar>
                        <EmailOutlinedIcon />
                    </ListItemAvatar>
                    <ListItemText primary="list item 2"></ListItemText>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <EmailOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="list item 3"></ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="list item 1" secondary="secondary text.."  />  
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemAvatar>
                        <Avatar>
                                <EmailOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="list item 2" secondary="secondary text.." ></ListItemText>
                    </ListItemButton> 
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                            <EmailOutlinedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="list item 3" secondary="secondary text.." ></ListItemText>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" alt="women"/>
                    </ListItemAvatar>
                    <ListItemText primary="list item 1" />  
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" alt="women"/>
                    </ListItemAvatar>
                    <ListItemText primary="list item 2"></ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src="https://randomuser.me/api/portraits/men/79.jpg" alt="women"/>
                    </ListItemAvatar>
                    <ListItemText primary="list item 3"></ListItemText>
                </ListItem>
            </List>
             {/* Divider compoennt can be used to separate the item */}
             <List>
                <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <EmailOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="list item 1" /> 
                        </ListItemButton> 
                    </ListItem> 
                    <Divider/>       
                    <ListItem>
                        <ListItemAvatar>
                            <EmailOutlinedIcon />
                        </ListItemAvatar>
                        <ListItemText primary="list item 2"></ListItemText>
                    </ListItem>
                    <Divider/>
                    <ListItem>
                        <ListItemIcon>
                            <EmailOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="list item 3"></ListItemText>
                    </ListItem>
            </List>
        </Stack>
    </div>
  )
}
