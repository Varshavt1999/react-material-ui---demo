// * Box component serves as a wrapper component for most of your css utility needs.
// * basically Box is a plain old div tag. the box component since it is a wrapper component you would be using it in most of the pages 
// you would be building
// * ofCourse you might not always want to wrap your content with a div tag . if you are focusing on semnatic html it could be a section tag , article tag etc
// to except for that Box component accepts a component props
import { Typography , Box } from "@mui/material"

export const MuiBox = () => {
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Box</Typography>
        //-----------------------------------------------------------------------//
        {/*component prop : change tag . this component would be span tag */}
        {/* sx prop : which can be used to for defining a custom style that has access to the style . it would be an object .*/}
        <Box style={{marginTop : "30px"}}>
            <Box component="span">
                hello
            </Box>
            {/* if you were to use regular inline style on regular html tags you cannot acces the theme */}
            <Box  sx={{
            backgroundColor : "primary.main" ,
             color : "white" , height : "100px" , width : "100px" , 
             padding : "16px",
             //style when you hover over the element . this again is an object
             "&:hover" : {
                backgroundColor : "primary.light"
             }
             }}>varsha</Box>
            {/* you can use a lot of css property that material ui support as a prop directly on the component */}
            {/* Mui sysytem property also has a shorter name for few property */}
            <Box display="flex" height="100px" width="100px"
             bgcolor="success.light" // background color
             p={2} //padding . default is multyplied by 8 px
             >
                welcome!!!
            </Box>
        </Box>
        
    </div>
  )
}

//docs of mui system 
//-------------------
// Mui docs ---> system ----> properties
