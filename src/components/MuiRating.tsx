//rating provide insight regardings regarding others opinions and can allow the user to submit rating of their own 
import {Typography, Stack , Rating} from "@mui/material"
import {useState} from "react"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const MuiRating = () => {
    // const [SelectedValue, setSelectedValue] = useState<number | null>(null)
    const [SelectedValue, setSelectedValue] = useState<number | null>(3)
    console.log({SelectedValue}); 
    const handleChange = (_event : React.ChangeEvent<{}> , newValue : number | null) =>{
        setSelectedValue(newValue)
    }
  return (
    <div style={{padding : "30px"}}>
    <Typography variant='h4' component="h1" gutterBottom >Rating</Typography >
    //-----------------------------------------------------------------------//
    <Stack spacing={2}>
        {/* size prop : can be small medium large . and the default value is medium */}
        <Rating value={SelectedValue} onChange={handleChange} precision={0.5} size="large"/>
        <Rating value={SelectedValue} onChange={handleChange} precision={0.5} size="small"/>
        {/* we can customize the icon */}
        <Rating value={SelectedValue} onChange={handleChange} precision={0.5} icon={<FavoriteIcon fontSize="inherit" color="error"/>} emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}/>
        {/* readOnly prop : which makes the rating component display only . if we set to a specific number we cannot change it . and cursor not be a pointed cursor*/}
        <Rating value={SelectedValue} onChange={handleChange} precision={0.5} readOnly/>
        {/* highlightselecetedOnly prop : which as the name indicate highlight only one icon instead of all the icon leading up to that value */}
        <Rating value={SelectedValue} onChange={handleChange} precision={0.5} highlightSelectedOnly/>
    </Stack>
    </div>
  )
}
