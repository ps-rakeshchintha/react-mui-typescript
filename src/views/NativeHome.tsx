import { Box, Grid, Paper, Slider, styled, Typography } from "@mui/material";
import React from "react";
import ActionItems from "../Components/ActionItems";
import Assignments from "../Components/Assignments";
import CredentialsNeeded from "../Components/CredentialsNeeded";
import CTACards from "../Components/CTACards";
import Heading from "../Components/Heading";
import TopJobsForYou from "../Components/TopJobsForYou";


const Home = () => {
    return (
        <Box display="grid" p={4} gridTemplateColumns="repeat(12, 1fr)" gap={4}>
            <Box gridColumn="span 12">
                <Heading />
            </Box>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4} sx={{ gridColumn: { xs: "span 12", md: "span 8" } }}>
                <Box gridColumn="span 12" sx={{ display: { xs: "block", md: "none" } }}>
                    <CredentialsNeeded />
                </Box>
                <Box gridColumn="span 12">
                    <CTACards />
                </Box>
                <Box gridColumn="span 12" sx={{ display: { xs: "block", md: "none" } }}>
                    <ActionItems />
                </Box>
                <Box gridColumn="span 12">
                    <Assignments />
                </Box>
                <Box gridColumn="span 12">
                    <TopJobsForYou />
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap={4} sx={{display: { xs: "none", md: "flex" }, gridColumn: "span 4"}}>
                <CredentialsNeeded />
                <ActionItems />
            </Box>
        </Box>
    )
}

export default Home;