//progress indicators inform user about the status of ongoing processies such as loading an app submitting a form , or saving updates
//in mui we have linear and circular indicators and each of them can either be determinenet or indeterminent
// progress cam be used when you are making http requests and the user needs to be aware of that background process
import { Typography ,Stack , CircularProgress , LinearProgress} from "@mui/material"

export const MuiProgress = () => {
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Progress</Typography>
        //-----------------------------------------------------------------------//

        <Stack spacing={2}>
            {/* by default it is indeterminate progrees == and hence will never stop spinning */}
           <CircularProgress />
           <CircularProgress color="success"/>
           {/* determinate proogress  ----> progress will be fixed at a particular value */}
           <CircularProgress variant="determinate" value={60}/>
        </Stack>
        <Stack spacing={2}>
           <LinearProgress/>
           <LinearProgress color="success"/>
           <LinearProgress variant="determinate" value={60}/>
        </Stack>
 
    </div>
  )
}
