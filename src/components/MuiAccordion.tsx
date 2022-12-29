import {Typography ,Box, Accordion, AccordionSummary , AccordionDetails } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
//accodion component allow the user to show and hide sections of related content on a page

export const MuiAccordion = () => {
    const [expandItem, setExpandItem] = useState<string | false>(false)
    console.log(expandItem,"expand");
    
    const handleChange =(isExpanded: boolean,panel : string ) =>{
        setExpandItem(isExpanded ? panel : false )
    }
  return (
    <div style={{padding : "30px"}}>
            <Typography variant='h4' component="h1" gutterBottom>Accordion</Typography>
            //-----------------------------------------------------------------------//
            <Box width="600px">
                <Accordion>
                    <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5">Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">Tortor aliquam nulla facilisi cras. ac turpis egestas sed tempus urna et. ut pharetra sit amet aliquam id diam maecenas ultricies. Purus ut faucibus pulvinar elementum. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Pellentesque dignissim enim sit amet venenatis urna cursus eget.
                        ultrices</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary id="panel2-header" aria-controls="panel2-content" expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5">Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">Tortor aliquam nulla facilisi cras. ac turpis egestas sed tempus urna et. ut pharetra sit amet aliquam id diam maecenas ultricies. Purus ut faucibus pulvinar elementum. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Pellentesque dignissim enim sit amet venenatis urna cursus eget.
                        ultrices</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary id="panel3-header" aria-controls="panel3-content" expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5">Accordion 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">Tortor aliquam nulla facilisi cras. ac turpis egestas sed tempus urna et. ut pharetra sit amet aliquam id diam maecenas ultricies. Purus ut faucibus pulvinar elementum. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Pellentesque dignissim enim sit amet venenatis urna cursus eget.
                        ultrices</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary id="panel4-header" aria-controls="panel4-content" expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5">Accordion 4</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">Tortor aliquam nulla facilisi cras. ac turpis egestas sed tempus urna et. ut pharetra sit amet aliquam id diam maecenas ultricies. Purus ut faucibus pulvinar elementum. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Pellentesque dignissim enim sit amet venenatis urna cursus eget.
                        ultrices</Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            {/* if we want only one accordion is expand at one time .if we expand second panel the first panel automatically collapses. */}
            <Box width="600px" sx={{marginTop: "40px"}}>
                <Accordion expanded={ expandItem === "panel1"} onChange={(event , isExpanded)=> handleChange(isExpanded,"panel1")}>
                    <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5">Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">Tortor aliquam nulla facilisi cras. ac turpis egestas sed tempus urna et. ut pharetra sit amet aliquam id diam maecenas ultricies. Purus ut faucibus pulvinar elementum. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Pellentesque dignissim enim sit amet venenatis urna cursus eget.
                        ultrices</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={ expandItem === "panel2"}  onChange={(event , isExpanded)=> handleChange(isExpanded,"panel2")}>
                    <AccordionSummary id="panel2-header" aria-controls="panel2-content" expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5">Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">Tortor aliquam nulla facilisi cras. ac turpis egestas sed tempus urna et. ut pharetra sit amet aliquam id diam maecenas ultricies. Purus ut faucibus pulvinar elementum. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Pellentesque dignissim enim sit amet venenatis urna cursus eget.
                        ultrices</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={ expandItem === "panel3"}  onChange={(event , isExpanded)=> handleChange(isExpanded,"panel3")}>
                    <AccordionSummary id="panel3-header" aria-controls="panel3-content" expandIcon={<ExpandMoreIcon/>}>
                        <Typography variant="h5">Accordion 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">Tortor aliquam nulla facilisi cras. ac turpis egestas sed tempus urna et. ut pharetra sit amet aliquam id diam maecenas ultricies. Purus ut faucibus pulvinar elementum. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Pellentesque dignissim enim sit amet venenatis urna cursus eget.
                        ultrices</Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
    </div>
  )
}
