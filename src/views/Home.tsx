import { Box, Grid, Paper, Slider, styled, Typography } from "@mui/material";
import React from "react";
import CTACards from "../Components/CTACards";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: "flex",
    height: "100%",
    width: "100%"
}));

const Heading = () => {
    return (
        <Box>
            <Typography variant="h2">Good Morning Jane Doe!</Typography>
        </Box>
    )
}
const CredentialsNeeded = () => {
    return (
        <Paper>
            <Box p={4} sx={{
                backgroundColor: "system.purple",
                color: "system.white",
            }}>
                <Grid container columns={4}>
                    <Grid item xs={3}>
                        <Typography variant="body1" component="div" fontWeight="bold">Good Morning Jane Doe!</Typography>
                    </Grid>
                    <Grid item xs={1} textAlign="right">
                        <Typography variant="body1" component="span" fontWeight="bold">33</Typography>
                        <Typography variant="body1" component="span" color="system.lavender">/44</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Slider
                            sx={{
                                color: "system.white"
                            }}
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="body1" component="div">Credentialing must be complete by Oct 31, 2019</Typography>
                    </Grid>
                </Grid>

            </Box>
        </Paper>
    )
}

const ActionItems = () => {
    return (
        <Item sx={{ height: "300px", gap: 2, alignItems: "center", justifyContent: "center" }} elevation={1}>
            <Typography variant="h3">Actions Items Section</Typography>
        </Item>
    )
}

const Assignments = () => {
    return (
        <Item sx={{ flexDirection: "column", height: "660px", gap: 2 }} elevation={1}>
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

const TopJobsForYou = () => {
    return (
        <Item sx={{flexDirection: "column", height: "350px", gap: 2 }} elevation={1}>
            <Typography variant="h3">Top Jobs For You Sections</Typography>
            <Box display="flex" flexDirection="row" height="100%" width="100%" gap={2}>
                <Item elevation={1} sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="h3">Job 1</Typography>
                </Item>
                <Item elevation={1} sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="h3">Job 2</Typography>
                </Item>
                <Item elevation={1} sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="h3">Job 2</Typography>
                </Item>
            </Box>
        </Item>
    )
}

const Home = () => {
    return (
        <Box display="grid" p={4} gridTemplateColumns="repeat(12, 1fr)" gap={4}>
            <Box gridColumn="span 12">
                <Heading />
            </Box>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4} sx={{
                gridColumn: {
                    xs: "span 12",
                    md: "span 8"
                }
            }}>
                <Box gridColumn="span 12" sx={{
                    display: {
                        xs: "block",
                        md: "none"
                    }
                }}>
                    <CredentialsNeeded />
                </Box>
                <Box gridColumn="span 12">
                    <CTACards />
                </Box>
                <Box gridColumn="span 12" sx={{
                    display: {
                        xs: "block",
                        md: "none"
                    }
                }}>
                    <ActionItems />
                </Box>
                <Box gridColumn="span 12">
                    <Assignments />
                </Box>
                <Box gridColumn="span 12">
                    <TopJobsForYou />
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" gap={4} sx={{
                display: {
                    xs: "none",
                    md: "flex"
                },
                gridColumn: {
                    xs: "span 12",
                    md: "span 4"
                }
            }}>
                <CredentialsNeeded />
                <ActionItems />
            </Box>

        </Box>
    )
}

export default Home;