import { Typography , Stack , Box ,Divider } from "@mui/material"
//*Stack component is used to manage layout in one demention either along the vertical or horizontal access
//*by default stack component arranges all children components in a column . so display flex , flex direction column is the default style
export const MuiStack = () => {
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom >Stack</Typography >
        //-----------------------------------------------------------------------//
        {/* spacing prop : if you want spacing between element  => multiple of 8 will be added
        devider prop : inserts an element between each child
        */}
        <Stack sx={{border : "1px solid" , marginTop: "30px"}} >
            <Box sx={{
                backgroundColor : "primary.main" ,
                color : "white" , height : "100px" , width : "100px" , 
                padding : "16px"
                }}>hello
            </Box>
            <Box sx={{
                backgroundColor : "secondary.main" ,
                color : "white" , height : "100px" , width : "100px" , 
                padding : "16px"
                }}>moosa
            </Box>
        </Stack>
        <Stack sx={{border : "1px solid" , marginTop: "30px"}} direction="row" spacing={2}>
            <Box sx={{
                backgroundColor : "error.main" ,
                color : "white" , height : "100px" , width : "100px" , 
                padding : "16px"
                }}>hello
            </Box>
            <Box sx={{
                backgroundColor : "success.main" ,
                color : "white" , height : "100px" , width : "100px" , 
                padding : "16px"
                }}>ajith
            </Box>
        </Stack>
        <Stack sx={{border : "1px solid" , marginTop: "30px"}} direction="row-reverse" >
            <Box sx={{
                backgroundColor : "primary.main" ,
                color : "white" , height : "100px" , width : "100px" , 
                padding : "16px"
                }}>hello
            </Box>
            <Box sx={{
                backgroundColor : "secondary.main" ,
                color : "white" , height : "100px" , width : "100px" , 
                padding : "16px"
                }}>albin
            </Box>
        </Stack>
        <Stack sx={{border : "1px solid" , marginTop: "30px"}} direction="column-reverse" >
            <Box sx={{
                backgroundColor : "primary.main" ,
                color : "white" , height : "100px" , width : "100px" , 
                padding : "16px"
                }}>hello
            </Box>
            <Box sx={{
                backgroundColor : "secondary.main" ,
                color : "white" , height : "100px" , width : "100px" , 
                padding : "16px"
                }}>varsha
            </Box>
        </Stack>
        <Stack sx={{border : "1px solid" , marginTop: "30px"}} direction="row" divider={<Divider orientation="vertical" flexItem/>} spacing={2}>
            <Box sx={{
                backgroundColor : "primary.main" ,
                color : "white" , height : "100px" , width : "100px" , 
                padding : "16px"
                }}>hello
            </Box>
            <Box sx={{
                backgroundColor : "secondary.main" ,
                color : "white" , height : "100px" , width : "100px" , 
                padding : "16px"
                }}>varsha
            </Box>
        </Stack>
    </div>
  )
}
// * mui system property like padding , margin are also supported with Stack component . 
// * you can specify them as props directly on the component
// * stack is usefull for one dimentional layout