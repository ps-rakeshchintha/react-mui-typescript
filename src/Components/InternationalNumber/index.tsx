import { Box, TextField, Typography, Paper, List, ListItem, ListItemText, ListItemIcon, InputAdornment, Input, Button } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import React from "react"
import { AccountCircle } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

export default () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Box display="flex" sx={{ position: "relative", width: '300px' }}>
            <Box onClick={() => setOpen(!open)} sx={{ backgroundColor: "grayscale.gray100", borderBottom: '1px solid', borderColor: "grayscale.gray500", cursor: "pointer" }} display="flex" alignItems="center" justifyContent="space-between" p={2}>
                <img width="30px" src="https://countryflagsapi.com/png/USA" />
                <ChevronRightOutlinedIcon sx={{ transform: 'rotate(90deg)' }} />
            </Box>

            <TextField sx={{ backgroundColor: "grayscale.gray100", width: '100%' }} label="Mobile Phone" variant="filled" />
            {open && <Paper elevation={2} sx={{ display: "flex", width: '100%', flexDirection: "column", padding: 2, paddingBottom: 0, position: "absolute", top: '54px', backgroundColor: "system.white", borderRadius: '4px' }}>
                <Box border={1} px={2} py={1} sx={{ display: 'flex', width: '100%', borderRadius: '3px', borderColor: "grayscale.gray500", alignItems: 'center' }}>
                    <SearchIcon sx={{ mr: 2, width: '18px', height: '18px' }} />
                    <Input sx={{ width: '100%' }} placeholder="Search" />
                </Box>
                <List>
                    {Array.from({ length: 5 }, (_, i) => i + 1).map((_quantity, index) => (
                        <ListItem key={index} sx={{ padding: 0, paddingTop: 2, paddingBottom: 2 }} secondaryAction={
                            <Typography variant='subtitle1'>USA</Typography>
                        }>
                            <ListItemIcon>
                                <img width="30px" src="https://countryflagsapi.com/png/USA" />
                            </ListItemIcon>
                            <ListItemText
                                primary="United States"
                            />
                        </ListItem>
                    ))}
                </List>
            </Paper>}
        </Box>
    )
}
