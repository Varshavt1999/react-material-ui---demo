//one of the use of link component apart from using stand alone link is the usage of breadcrumps component
import {Typography , Stack ,Link} from "@mui/material"

export const MuiLink = () => {
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Link</Typography>
        //-----------------------------------------------------------------------//
        <Stack direction="row" spacing={2} >
            <Link href="#">Link</Link>
            <Link href="#" color="secondary">secondary</Link>
            {/* underline="hover" ==> in which case the underline appears only when we hover over the link
            underline="hover" ==> in which case there is never be an underline
            variant prop ===> which is same as that of typography -- however the default value is inherit */}
            <Link href="#" color="secondary" underline="hover">secondary</Link>
            <Link href="#" color="secondary" underline="none">secondary</Link>
            <Typography variant="h6"><Link href="#" color="secondary" underline="none">secondary</Link></Typography>    
            {/*  if there is no wrapping typography element , you can set the value explicitly*/}
            <Link href="#" color="secondary" underline="none" variant="h6">secondary</Link>
        </Stack>
    </div>
  )
}
