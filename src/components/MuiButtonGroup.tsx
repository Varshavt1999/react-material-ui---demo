import {Stack , Button , Typography ,ButtonGroup} from "@mui/material"

export const MuiButtonGroup = () => {
  return (
    <div style={{padding : "30px"}}>
    <Typography variant='h4' component="h1" gutterBottom>ButtonGroup</Typography>
    //-----------------------------------------------------------------------//
    <Stack spacing={4}>
        <Stack spacing={2} direction="row" >  
            <ButtonGroup variant="contained">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>        
        </Stack>
        <Stack spacing={2} direction="row">  
            <ButtonGroup variant="outlined">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>        
        </Stack>
        <Stack spacing={2} direction="row">  
            <ButtonGroup variant="text">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>        
        </Stack>
        <Stack spacing={2} direction="row">  
            <ButtonGroup variant="text" orientation="vertical">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>        
        </Stack>
        <Stack spacing={2} direction="row" >  
            <ButtonGroup variant="contained" color="secondary" size="small">
                <Button onClick={()=> alert("left clicked")}>Left</Button>
                <Button>Center</Button>
                <Button onClick={()=> alert("Right clicked")}>Right</Button>
            </ButtonGroup>        
        </Stack>
    </Stack>
    </div>
  )
}
