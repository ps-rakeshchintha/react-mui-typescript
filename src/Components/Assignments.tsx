import { Typography, Box } from "@mui/material"
import React from "react"
import Item from "./Item"


const Assignments = () => {
    return (
        <Item sx={{ flexDirection: "column", height: "660px !important", gap: 2 }} elevation={1}>
            <Typography variant="h3">Assignments Section</Typography>
            <Box display="flex" sx={{
                flexDirection: {
                    xs: "column",
                    md: "row"
                }
            }} height="100%" gap={2}>
                <Item elevation={1} sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="h3">Assignments 1</Typography>
                </Item>
                <Item elevation={1} sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="h3">Assignments 2</Typography>
                </Item>
            </Box>
        </Item>
    )
}

export default Assignments