import { Typography, Box } from "@mui/material"
import React from "react"
import Item from "./Item"

const TopJobsForYou = () => {
    return (
        <Item sx={{ flexDirection: "column", height: "350px !important", gap: 2 }} elevation={1}>
            <Typography variant="h3">Top Jobs For You Sections</Typography>
            <Box display="flex" flexDirection="row" height="100%" width="100%" gap={2} overflow="auto">
                <Item elevation={1} sx={{ alignItems: "center", justifyContent: "center", minWidth: "290px" }}>
                    <Typography variant="h3">Job 1</Typography>
                </Item>
                <Item elevation={1} sx={{ alignItems: "center", justifyContent: "center", minWidth: "290px" }}>
                    <Typography variant="h3">Job 2</Typography>
                </Item>
                <Item elevation={1} sx={{ alignItems: "center", justifyContent: "center", minWidth: "290px" }}>
                    <Typography variant="h3">Job 2</Typography>
                </Item>
            </Box>
        </Item>
    )
}
export default TopJobsForYou