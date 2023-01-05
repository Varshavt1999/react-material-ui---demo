//skelton components are used to display a placeholder preview of the content before the data gets loaded to reduce 
//load time frustration
import {Typography ,Box, Stack , Skeleton, Avatar } from "@mui/material"
import { useState ,useEffect} from "react"

export const MuiSkelton = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
      setTimeout(()=>{
        setLoading(false)
      },3000)
  },[])
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Skelton</Typography>
        //-----------------------------------------------------------------------//
        <Stack spacing={6} direction="row">
          <Stack spacing={1} width="250px">
              {/* variant="text" ---> by default variant of a skeleton is text */}
              <Skeleton  />
              <Skeleton  variant="text"/>
              {/* circular skeleton is suitable for avatars */}
              <Skeleton  variant="circular" width={40} height={40}/>
              {/* circular skeleton is suitable for images */}
              <Skeleton  variant="rectangular" width={200} height={125}/>
              <Skeleton  variant="rectangular" height={125}/>     
          </Stack>
            {/* by default animation is pulse animation . */}
          <Stack spacing={1} width="250px">
              <Skeleton  variant="circular" width={40} height={40} animation="wave"/>
              <Skeleton  variant="text" animation="wave"/>
              <Skeleton  variant="rectangular" height={125} animation="wave"/>
              {/* if you want no animation */}
              <Skeleton  variant="rectangular" height={125} animation={false}/>
          </Stack>
      </Stack>
      <Box width="300px" sx={{marginTop: "30px"}}>
            {
              loading ? <Skeleton height={244} width={300}  animation="wave"/> 
              : <img  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" width="300px" height="144px" alt="img"/>
            }
          <Stack direction="row" spacing={1} sx={{width: "100%" , marginTop: "12px"}}>
            {
              loading ? <Skeleton variant="circular" width={40} height={40} animation="wave"/> :
              <Avatar >V</Avatar>
            }
            <Stack sx={{width: "80%" }}>
            {
              loading ? 
              <>
                <Typography  variant="body1">
                  {/* if you nest a skeleton inside a typography compoenent the skeleton automatically inferce the dimentions of 
                  the typography based on the variant */}
                  <Skeleton variant="text" width="100%" animation="wave"/>
                </Typography>
                <Typography  variant="body2">
                  <Skeleton variant="text" width="100%" animation="wave"/>
                </Typography>
              </>
               :
               <>
                  <Typography  variant="body1" >
                    React MUI tutorial
                  </Typography>
                  <Typography  variant="body2">
                    React MUI tutorial React MUI tutorial
                  </Typography>
             </>
            }
            </Stack>
          </Stack>
      </Box>
    </div>
  )
}
