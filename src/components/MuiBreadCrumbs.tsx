// BreadCrumbs is a type of secondary navigation scheme that reveals users location in a website
import {Typography ,Box,Breadcrumbs,Link } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const MuiBreadCrumbs = () => {
  return (
    <div style={{padding : "30px"}}>
    <Typography variant='h4' component="h1" gutterBottom>BreadCrumbs</Typography>
    //-----------------------------------------------------------------------//
    <Box margin={2}>
      <Breadcrumbs aria-label="breadcrumb" separator="-">
        <Link underline="hover">Home</Link>
        <Link underline="hover">Categories</Link>
        <Link underline="hover">Accessories</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      {/* links navigate to the previous route each time */}
      {/* separator prop - you can also use icon to separate breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon/>}>
        <Link underline="hover">Home</Link>
        <Link underline="hover">Categories</Link>
        <Link underline="hover">Accessories</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      {/* number of list to display at a given time . by default breadcrumbs componeny shows 8 items
      maxItems={3} --> does not make any change bcz number of items to show before and  after the collaps is 1 . hence the fiest and last item is shown
      itemAfterCollapse , itemBeforeCollapse----> number of items before and after the ellipsis*/}
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon/>} maxItems={3} itemsAfterCollapse={2}>
        <Link underline="hover">Home</Link>
        <Link underline="hover">Categories</Link>
        <Link underline="hover">Accessories</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon/>} maxItems={3} itemsBeforeCollapse={2}>
        <Link underline="hover">Home</Link>
        <Link underline="hover">Categories</Link>
        <Link underline="hover">Accessories</Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
    </div>
  )
}
