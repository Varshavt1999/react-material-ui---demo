import {Typography ,Stack , Avatar , AvatarGroup} from "@mui/material"

export const MuiAvatar = () => {
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Avatar</Typography>
        //-----------------------------------------------------------------------//
        <Stack spacing={6} direction="row" sx={{marginTop : "30px"}} >
            <Stack direction="row" spacing={1}>
                <Avatar sx={{bgcolor : "primary.light"}}>BW</Avatar>
                <Avatar sx={{bgcolor : "success.light"}}>CK</Avatar>
                <Avatar src="https://randomuser.me/api/?gender=female"/>
                <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" alt="women"/>
                <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" alt="men"/>
            </Stack>
            
            {/* if you wish to you can group avatars together - we get overlappimg on indiavidual avatars */}
            <AvatarGroup>
                <Avatar src="https://randomuser.me/api/portraits/women/49.jpg" alt="women"/>
                <Avatar src="https://randomuser.me/api/portraits/men/33.jpg" alt="men"/>
                <Avatar sx={{bgcolor : "success.light"}}>CK</Avatar>
                <Avatar src="https://randomuser.me/api/portraits/women/4.jpg" alt="women"/>
                <Avatar src="https://randomuser.me/api/portraits/men/59.jpg" alt="men"/>  
            </AvatarGroup>
            {/* max Prop --> to restrict number of avatar to display - last avatar contains remining number of avatars in a group */}
            <AvatarGroup max={3}>
                <Avatar src="https://randomuser.me/api/portraits/women/49.jpg" alt="women"/>
                <Avatar src="https://randomuser.me/api/portraits/men/33.jpg" alt="men"/>
                <Avatar sx={{bgcolor : "success.light"}}>CK</Avatar>
                <Avatar src="https://randomuser.me/api/portraits/women/4.jpg" alt="women"/>
                <Avatar src="https://randomuser.me/api/portraits/men/59.jpg" alt="men"/>  
            </AvatarGroup>
            {/* if you wish to change size of avatar you can make use of width and height on the sx props */}
            <Stack direction="row" spacing={1} >
                <Avatar sx={{bgcolor : "primary.light" , width: 48 , height: 48}}>BW</Avatar>
                <Avatar sx={{bgcolor : "success.light"}}>CK</Avatar>
                <Avatar sx={{ width: 48 , height: 48}} src="https://randomuser.me/api/?gender=female"/>
                <Avatar src="https://randomuser.me/api/portraits/women/79.jpg" alt="women"/>
                <Avatar sx={{ width: 48 , height: 48}} src="https://randomuser.me/api/portraits/men/51.jpg" alt="men"/>
            </Stack>
            {/* variant ' "square" --> if you want a square shaped avatar ,  */}
            <Stack direction="row" spacing={1} >     
                <Avatar sx={{bgcolor : "success.light" ,width: 48 , height: 48}} variant="square">CK</Avatar>
                <Avatar sx={{ width: 48 , height: 48}} variant="square" src="https://randomuser.me/api/portraits/men/41.jpg" alt="men"/>
                <Avatar sx={{ width: 48 , height: 48}} variant="rounded" src="https://randomuser.me/api/portraits/men/24.jpg" alt="men"/>
            </Stack>
        </Stack>
    </div>
  )
}
