import { Paper, Box, Grid, Typography, Slider } from "@mui/material"
import React from "react"

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

export default CredentialsNeeded