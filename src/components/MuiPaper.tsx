import { Typography , Box , Paper ,Stack} from "@mui/material"
//it is a great component toi use when creating layouts and provides visual heirarchy which is very important in material design
// paper gives a shadow and also add a white background

export const MuiPaper = () => {
  return (
    <div style={{padding : "30px" , backgroundColor : "#eeeeee"}}>
        <Typography variant='h4' component="h1" gutterBottom>Paper</Typography>
        //-----------------------------------------------------------------------//
       {/* elevation prop : can control the shadow . but default the value is 1 .
        more the shadow more the depth heirarchy */}
        <Paper sx={{padding : "32px" , marginTop: "30px"}} elevation={4}>
            <Stack sx={{
                border : "1px solid",
            }}   spacing={2}>
                <Box  sx={{
                    backgroundColor : "primary.main" ,
                    color : "white" , height : "100px" , width : "100px" , 
                    padding : "16px",
                    "&:hover" : {
                        backgroundColor : "primary.light"
                    }
                }}>varsha</Box>     
                <Box 
                    display="flex" height="100px" width="100px"
                    bgcolor="success.light" 
                    p={2} 
                >
                    welcome!!!
                </Box>
            </Stack>
            
        </Paper>

    </div>
  )
}
