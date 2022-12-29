import { Typography , Grid ,Box} from "@mui/material"
//* Grid component is usefull for creating 2 dimentional and responsive layouts 
//* Grid component has 2 variations . 
//    - container for the parent
//    - item for the children
//* Grid component under the hood uses the flex box module
//* Grid consists of 12 columns
//* Each item in a grid can take up one or more columns as its width
//* There are 5 breakpoints each corresponding to a certain device width
//      - xs for mobile device size ,sm for tablet , md for desktop, lg and xl for large monitors
//* we can assign integer values to each breakpoints which indicates how many of the 12 available columns are occupied by that item
// when the view port satisfies that breakpoint contraints
export const MuiGrid = () => {
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Box</Typography>
        //-----------------------------------------------------------------------//
        <Grid container my={4}>
            <Grid item xs={12} sm={6} md={4}>
                <Box bgcolor="primary.light" p={2}>Item 1</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>  
                <Box bgcolor="secondary.light" p={2}>Item 2</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}> 
                <Box bgcolor="warning.light" p={2}>Item 3</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>          
                <Box bgcolor="error.light" p={2}>Item 4</Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>  
                <Box bgcolor="success.light" p={2}>Item 2</Box>
            </Grid>
        </Grid>
        <Grid container my={4}>
            <Grid item xs={3}>
                <Box bgcolor="secondary.light" p={2}>Item 1</Box>
            </Grid>
            <Grid item xs={9}>  
                <Box bgcolor="primary.light" p={2}>Item 2</Box>
            </Grid>
            <Grid item xs={9}> 
                <Box bgcolor="error.light" p={2}>Item 3</Box>
            </Grid>
            <Grid item xs={3}>          
                <Box bgcolor="warning.light" p={2}>Item 4</Box>
            </Grid>
        </Grid>
        {/* if you want to equally distribute the available width between all the item you can rely on AutoLayout .
        add the breakpoints but not assign a integer value */}
        <Grid container my={4}>
            <Grid item xs>
                <Box bgcolor="secondary.light" p={2}>Item 1</Box>
            </Grid>
            <Grid item xs>  
                <Box bgcolor="primary.light" p={2}>Item 2</Box>
            </Grid>
            <Grid item xs> 
                <Box bgcolor="error.light" p={2}>Item 3</Box>
            </Grid>
            <Grid item xs>          
                <Box bgcolor="warning.light" p={2}>Item 4</Box>
            </Grid>
        </Grid>
        <Grid container my={4}>
            <Grid item xs>
                <Box bgcolor="secondary.light" p={2}>Item 1</Box>
            </Grid>
            <Grid item xs={6}>  
                <Box bgcolor="primary.light" p={2}>Item 2</Box>
            </Grid>
            <Grid item xs> 
                <Box bgcolor="error.light" p={2}>Item 3</Box>
            </Grid>
            <Grid item xs>          
                <Box bgcolor="warning.light" p={2}>Item 4</Box>
            </Grid>
        </Grid>
        {/* breakpoints equal to auto => in this case size of the item depends on the natural width of its content */}
        <Grid container my={4}>
            <Grid item xs>
                <Box bgcolor="secondary.light" p={2}>Item 1</Box>
            </Grid>
            <Grid item xs="auto">  
                <Box bgcolor="primary.light" p={2}>Item 2</Box>
            </Grid>
            <Grid item xs> 
                <Box bgcolor="error.light" p={2}>Item 3</Box>
            </Grid>
            <Grid item xs>          
                <Box bgcolor="warning.light" p={2}>Item 4</Box>
            </Grid>
        </Grid>
        {/* spacing between element . multiple of 8 */}
        <Grid container my={4} spacing={2}>
            <Grid item xs>
                <Box bgcolor="warning.light" p={2}>Item 1</Box>
            </Grid>
            <Grid item xs="auto">  
                <Box bgcolor="warning.light" p={2}>Item 2</Box>
            </Grid>
            <Grid item xs> 
                <Box bgcolor="warning.light" p={2}>Item 3</Box>
            </Grid>
            <Grid item xs>          
                <Box bgcolor="warning.light" p={2}>Item 4</Box>
            </Grid>
        </Grid>
        {/* you can also specify separate row and column spacing */}
        <Grid container my={4} rowSpacing={1} columnSpacing={2}>
            <Grid item xs={6}>
                <Box bgcolor="primary.light" p={2}>Item 1</Box>
            </Grid>
            <Grid item xs={6}>  
                <Box bgcolor="primary.light" p={2}>Item 2</Box>
            </Grid>
            <Grid item  xs={6}> 
                <Box bgcolor="primary.light" p={2}>Item 3</Box>
            </Grid>
            <Grid item  xs={6}>          
                <Box bgcolor="primary.light" p={2}>Item 4</Box>
            </Grid>
        </Grid>
    </div>
  )
}
