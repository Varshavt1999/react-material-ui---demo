import { Typography,Stack, SpeedDial , SpeedDialAction , SpeedDialIcon} from "@mui/material"
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const MuiSpeedDial = () => {
  return (
    <div style={{padding : "30px" }}>
        <Typography variant='h4' component="h1" gutterBottom>Speed Dial</Typography>
        //-----------------------------------------------------------------------//
        <SpeedDial ariaLabel="Navigation speed dial" icon={<SpeedDialIcon /> }>
            <SpeedDialAction icon={<FileCopyOutlinedIcon/>} tooltipTitle="copy" />
            <SpeedDialAction icon={<PrintOutlinedIcon/>} tooltipTitle="print" />
            <SpeedDialAction icon={<ShareOutlinedIcon/>} tooltipTitle="share" />
        </SpeedDial>
        {/* if you want tooltip to be always visible when the action icons are displayed ,you can pass you can pass tooltipOpen props on speedDialAction component */}
        <SpeedDial ariaLabel="Navigation speed dial" icon={<SpeedDialIcon openIcon={<EditOutlinedIcon />}/> }>
            <SpeedDialAction icon={<FileCopyOutlinedIcon/>} tooltipTitle="copy" tooltipOpen/>
            <SpeedDialAction icon={<PrintOutlinedIcon/>} tooltipTitle="print" tooltipOpen/>
            <SpeedDialAction icon={<ShareOutlinedIcon/>} tooltipTitle="share" tooltipOpen/>
        </SpeedDial>
    </div>
  )
}
