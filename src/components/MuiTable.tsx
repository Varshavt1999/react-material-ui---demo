// tables helps display sets of data
import {Typography , TableContainer , Table , TableHead , TableBody, TableRow, TableCell , Paper} from "@mui/material"

export const MuiTable = () => {
    const tableData = [
        {
            id : 1,
            first_name : "varsha",
            last_name : "vt",
            email : "v@email.com",
            gender : "female",
        
        },
        {
            id : 2,
            first_name : "vnnggg",
            last_name : "vt",
            email : "v@email.com",
            gender : "female",
        
        },
        {
            id : 3,
            first_name : "fsfsdfsfds",
            last_name : "vt",
            email : "v@email.com",
            gender : "female",
        
        },
        {
            id : 4,
            first_name : "v++fffrsha",
            last_name : "vt",
            email : "v@email.com",
            gender : "female",
        
        },
        {
            id : 5,
            first_name : "qkhdfhd",
            last_name : "vt",
            email : "v@email.com",
            gender : "female",
        
        },
        {
            id : 6,
            first_name : "varsha",
            last_name : "vt",
            email : "v@email.com",
            gender : "female",
        
        },
        {
            id : 7,
            first_name : "vnnggg",
            last_name : "vt",
            email : "v@email.com",
            gender : "female",
        
        },
        {
            id : 8,
            first_name : "fsfsdfsfds",
            last_name : "vt",
            email : "v@email.com",
            gender : "female",
        
        },
        {
            id : 9,
            first_name : "v++fffrsha",
            last_name : "vt",
            email : "v@email.com",
            gender : "female",
        
        },
        {
            id : 10,
            first_name : "qkhdfhd",
            last_name : "vt",
            email : "v@email.com",
            gender : "female",
        
        },
    ]
  return (
    <div style={{padding : "30px"}}>
        <Typography variant='h4' component="h1" gutterBottom>Table</Typography>
        //-----------------------------------------------------------------------//
        <TableContainer component={Paper} sx={{maxHeight : "300px"}}>
            {/*stickyHeader ---> for a sticky header */}
            <Table aria-label="simple-table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        {/* align="center" ---> to make a column to center align  . the align property is usefull with numeric values as numric values are righty aligned*/}
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map((row) =>(
                            <TableRow key={row.id} sx={{"&:last-child td , &:last-child th" : {border : 0}}}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
  
   
}
