import {Typography ,Box, Card,CardContent,CardActions, Button,CardMedia} from "@mui/material"
//* card contain contents and actions about a single topic
//* card component also contain action at the bottom for that we need CardActions component .
//  the actions are typically buttons
//*to add images we need to import CardMedia component
export const MuiCard = () => {
  return (
    <div style={{padding : "30px", backgroundColor : "#eeeeee"}}>
      <Typography variant='h4' component="h1" gutterBottom>Card</Typography>
      //-----------------------------------------------------------------------//
      <Box width="300px"  style={{padding : "30px" }}>
        <Card>
          {/* image prop : place to add image link */}
          <CardMedia component="img" height="140px" image="https://source.unsplash.com/random" alt="card-image"/>
          <CardContent>
            <Typography variant="h5" gutterBottom component="div">React</Typography>
            <Typography variant="body2" color="text.secondary" component="div">Tortor aliquam nulla facilisi cras. ac turpis egestas sed tempus urna et. ut pharetra sit amet aliquam id diam maecenas ultricies. Purus ut faucibus pulvinar elementum. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Pellentesque dignissim enim sit amet venenatis urna cursus eget.
            ultrices</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn more</Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  )
}
