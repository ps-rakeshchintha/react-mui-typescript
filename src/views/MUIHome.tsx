import { Box, Grid, Paper, Slider, styled, Typography } from "@mui/material";
import React from "react";
import ActionItems from "../Components/ActionItems";
import Assignments from "../Components/Assignments";
import CredentialsNeeded from "../Components/CredentialsNeeded";
import CTACards from "../Components/CTACards";
import Heading from "../Components/Heading";
import TopJobsForYou from "../Components/TopJobsForYou";


const MUIHome = () => {
    return (
        <Grid container p={4} spacing={4}>
            <Grid item xs={12}>
                <Heading />
            </Grid>
            <Grid item xs={12} md={8} display="flex" flexDirection="column" gap={4}>
                <Box sx={{ display: { xs: "block", md: "none" } }}>
                    <CredentialsNeeded />
                </Box>
                <CTACards />
                <Box sx={{ display: { xs: "block", md: "none" } }}>
                    <ActionItems />
                </Box>
                <Assignments />
                <TopJobsForYou />
            </Grid>
            <Grid item xs={4} gap={4} flexDirection="column" sx={{ display: { xs: "none", md: "flex" } }}>
                <CredentialsNeeded />
                <ActionItems />
            </Grid>
        </Grid>
    )
}

export default MUIHome;