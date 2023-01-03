//tooltip display informative text when users hover over , focus on , or tap an element. 
//they are especially usefull when working with icon
import { Typography ,Stack,Tooltip , IconButton} from "@mui/material"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export const MuiTooltip = () => {
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Tooltip</Typography>
        //-----------------------------------------------------------------------//
        {/* while hover over the button we see the tooltip being displayed */}
        <Stack direction="row" spacing={8}>
          <Tooltip title="Delete">
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete" placement="right-start">
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
          {/* arrow prop --> Tooltip  has an arrow which points to the child element*/}
          <Tooltip title="Delete" placement="right" arrow>
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
          {/* enterDelay prop & leaveDelay prop ---> tooltip appears after half a sec the tooltip desappears after 200ms */}
          <Tooltip title="Delete" placement="right" arrow enterDelay={500} leaveDelay={200}>
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Stack>
    </div>
  )
}
