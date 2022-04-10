import { Box, Typography } from "@mui/material"
import React from "react"

const CTACard = (props: any) => {
    return (
        <Box display="flex" alignItems="center" p={4} sx={{
            color: "system.white",
            borderRadius: "10px",
            width: '290px',
            minWidth: '290px',
            height: '150px',
            backgroundImage: 'url("https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=290&q=150")',
            backgroundPositionY: '-50px'
        }}>
            <Typography variant="h3" fontWeight="800" component="div">{props.content}</Typography>
        </Box>
    )
}


export default CTACard