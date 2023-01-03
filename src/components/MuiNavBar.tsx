import { Typography,Stack, AppBar , Toolbar , IconButton ,Button} from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export const MuiNavBar = () => {
  return (
    <div style={{padding : "30px" }}>
        <Typography variant='h4' component="h1" gutterBottom>Nav bar</Typography>
        //-----------------------------------------------------------------------//
        <AppBar position="static" >
            {/* this component add some padding on left amd right side of the navbar */}
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow:1 ,textAlign:"left"}}>POKEMONAPP</Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit"  >Features</Button>
                    <Button color="inherit"  >Pricing</Button>
                    <Button color="inherit"  >About</Button>
                    <Button color="inherit"  >Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    </div>
  )
}
