//used to display a collection of images in an organized grid.
import { Typography ,Stack, ImageList , ImageListItem , Box ,ImageListItemBar} from "@mui/material"

export const MuiImageList = () => {
  const itemData1 = [
    {
      id:1,
      img : "https://images.unsplash.com/photo-1598515213692-5f252f75d785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNoaWNrZW4lMjBmcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Breakfast",
      subtitle : "enjoy your yummy foood from our website!!!"
    },
    {
      id:2,
      img : "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGZyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ,
      title : "Burger",
      subtitle : "enjoy your yummy foood from our website!!!"
    },
    {
      id:3,
      img : "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Pizza"
    },
    {
      id:4,
      img : "https://images.unsplash.com/photo-1601785263284-65bc432520d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNoaWNrZW4lMjBmcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "cake"
    },
    {
      id:5,
      img : "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Burger",
      subtitle : "enjoy your yummy foood from our website!!!"
    },
    {
      id:6,
      img : "https://images.unsplash.com/photo-1619683548293-c74defe8d5d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGNoaWNrZW4lMjBmcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Pizza"
    },
    {
      id:7,
      img : "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "cake",
      subtitle : "enjoy your yummy foood from our website!!!"
    },
    {
      id:8,
      img : "https://images.unsplash.com/photo-1601785263284-65bc432520d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNoaWNrZW4lMjBmcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "cake"
    },
    {
      id:9,
      img : "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Burger"
    },
    {
      id:10,
      img : "https://images.unsplash.com/photo-1619683548293-c74defe8d5d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGNoaWNrZW4lMjBmcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Pizza"
    },
    {
      id:11,
      img : "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "cake",
      subtitle : "enjoy your yummy foood from our website!!!"
    },
    {
      id:12,
      img : "https://images.unsplash.com/photo-1598515213692-5f252f75d785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNoaWNrZW4lMjBmcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Breakfast"
    },
    {
      id:13,
      img : "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGZyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ,
      title : "Burger",
      subtitle : "enjoy your yummy foood from our website!!!"
    },
    {
      id:14,
      img : "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Pizza"
    },
  ]
  const itemData2 = [
    {
      id:1,
      img : "https://images.unsplash.com/photo-1672615086343-66afac1abe81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Breakfast"
    },
    {
      id:2,
      img : "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGZyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ,
      title : "Burger"
    },
    {
      id:3,
      img : "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Pizza"
    },
    {
      id:4,
      img : "https://images.unsplash.com/photo-1601785263284-65bc432520d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNoaWNrZW4lMjBmcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "cake"
    },
    {
      id:5,
      img : "https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Burger"
    },
    {
      id:6,
      img : "https://images.unsplash.com/photo-1619683548293-c74defe8d5d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGNoaWNrZW4lMjBmcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Pizza"
    },
    {
      id:7,
      img : "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "cake"
    },
    {
      id:8,
      img : "https://images.unsplash.com/photo-1601785263284-65bc432520d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNoaWNrZW4lMjBmcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "cake"
    },
    {
      id:9,
      img : "https://images.unsplash.com/photo-1672643074814-487fe349c049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Burger"
    },
    {
      id:10,
      img : "https://images.unsplash.com/photo-1619683548293-c74defe8d5d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGNoaWNrZW4lMjBmcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Pizza"
    },
    {
      id:11,
      img : "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "cake"
    },
    {
      id:12,
      img : "https://images.unsplash.com/photo-1672627798660-d0b3c2d7a691?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Breakfast"
    },
    {
      id:13,
      img : "https://images.unsplash.com/photo-1672638219074-c250c547810a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" ,
      title : "Burger"
    },
    {
      id:14,
      img : "https://images.unsplash.com/photo-1672661164570-d5e7e0890a69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" ,
      title : "Pizza"
    },
  ]
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom >Image List</Typography >
        //-----------------------------------------------------------------------//
        <Stack spacing={4}>
          <Stack spacing={8} direction="row">
            <ImageList sx={{width: 500, height :450 }} cols={3} rowHeight={164}>
                {itemData1.map((item)=>(
                  // loading="lazy" => this will ensure images are loaded when required
                  //and not all at once when the page loads . last row of images is lazy loaded only when required
                  <ImageListItem key={item.id} >
                    <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy" />
                    <ImageListItemBar title={item.title} subtitle={item.subtitle}  />
                   
                  </ImageListItem>
                ))}
            </ImageList>
            {/* variant="woven" ==> different image grid . woven imagelist uses alternating container ratio to create very nice layout .*/}
            <ImageList sx={{width: 500, height :450 }} cols={3} variant="woven" gap={8} >
              {itemData2.map((item)=>(
                <ImageListItem key={item.id} >
                  <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"/>
                </ImageListItem>
              ))}
          </ImageList>
          </Stack>
          <Stack spacing={2}>
            {/* masonry layout ==>masonry layout is suited for dynamically sized uncropped content and does well with aspect ratio of
            the image . images have dofferent height depends on what looks best for the image */}
              <Box sx={{width: 500, height :450 , overflowY:"scroll" }}>
                <ImageList  cols={3} variant="masonry" gap={8} >
                  {itemData2.map((item)=>(
                    <ImageListItem key={item.id} >
                      <img src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`} alt={item.title} loading="lazy"/>
                      <ImageListItemBar title={item.title}/>
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
          </Stack>
        </Stack>
    </div>
  )
}
