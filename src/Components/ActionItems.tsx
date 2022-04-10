import { Typography } from "@mui/material";
import React from "react";
import Item from "./Item";

const ActionItems = () => {
    return (
        <Item sx={{ height: "300px !important", gap: 2, alignItems: "center", justifyContent: "center" }} elevation={1}>
            <Typography variant="h3">Actions Items Section</Typography>
        </Item>
    )
}

export default ActionItems;