// badge compoenent generate small badge to the top right of its child element
import {Typography ,Stack , Badge} from "@mui/material"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export const MuiBadge = () => {
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Badge</Typography>
        //-----------------------------------------------------------------------//
        <Stack spacing={2} direction="row">
            <Badge badgeContent={5} color="primary"> 
                <EmailOutlinedIcon />
            </Badge>
            {/* if badge content is 0 , badge itself is not displayed  .*/}
            <Badge badgeContent={0} color="primary"> 
                <EmailOutlinedIcon />
            </Badge>
            {/*  you can overwrite this behavior by specifying showzero prop */}
            <Badge badgeContent={0} color="primary" showZero> 
                <EmailOutlinedIcon />
            </Badge>
            {/* the badge reads 99+ and this is bcz the default maximum value is 99 . you can change this using the maxprop */}
            <Badge badgeContent={100} color="primary" showZero> 
                <EmailOutlinedIcon />
            </Badge>
            <Badge badgeContent={100} color="primary" showZero max={999}> 
                <EmailOutlinedIcon />
            </Badge>
            {/* variant="dot" ---> this can be used as a notification  that something has changed without giving a count value */}
            <Badge badgeContent={100} variant="dot" color="primary" > 
                <EmailOutlinedIcon />
            </Badge>
            {/* invisible --- > if you want to hide this badge */}
            <Badge badgeContent={100} variant="dot" color="primary" invisible={true} > 
                <EmailOutlinedIcon />
            </Badge>
        </Stack>
    
    </div>
  )
}
