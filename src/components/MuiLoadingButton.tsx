//*the lab package contains components that are still under developmenet. 
//*to install lab ----> npm install @mui/lab
import {Typography, Stack} from "@mui/material"
//*loadingButtomn behaves very similar to the regular button component in mui . however the loading button makes it easy
//to show a loading state with the help of loading prop
import {LoadingButton} from "@mui/lab"
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

export const MuiLoadingButton = () => {
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom >Loading Button</Typography>
        //-----------------------------------------------------------------------//
        <Stack spacing={2} direction="row">
            {/* loading button componenet with loading is false */}
            <LoadingButton variant="outlined">Submit</LoadingButton>
            
            {/* - loading button componenet with loading is true
             - when loading is true the submit text is replaced with the circular progress and the button is disabled*/}
            <LoadingButton loading variant="outlined">Submit</LoadingButton>

            {/*loadingIndicator prop --> loading button with text indicator */}
            <LoadingButton variant="outlined" loadingIndicator="Loading...">Fetch data</LoadingButton>
            <LoadingButton loading variant="outlined" loadingIndicator="Loading...">Fetch data</LoadingButton>

            {/* you can also use loading buttons with icons */}
            <LoadingButton variant="outlined" loadingPosition="start" startIcon={<SaveOutlinedIcon/>}>Save</LoadingButton>
            {/* in loading state  the startIcon is replaced with circular icon in the same position */}
            <LoadingButton loading variant="outlined" loadingPosition="start" startIcon={<SaveOutlinedIcon/>}>Save</LoadingButton>

            <LoadingButton variant="outlined" loadingPosition="end" endIcon={<SaveOutlinedIcon/>}>Save</LoadingButton>
            <LoadingButton loading variant="outlined" loadingPosition="end" endIcon={<SaveOutlinedIcon/>}>Save</LoadingButton>
        </Stack>
    </div>
  )
}
